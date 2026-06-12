const params = new URLSearchParams(location.search);
const id = parseInt(params.get('id')) || 1;
const routine = ROUTINES.find(r => r.id === id);

// --- Render page ---
document.title = routine.title;
document.getElementById('r-tag').textContent = routine.tag;
document.getElementById('r-title').textContent = routine.title;

function splitBarHTML(split) {
  return `
    <div class="split-bar">
      <div class="split-seg" style="background:var(--upper);width:${split.upper}%"></div>
      <div class="split-seg" style="background:var(--lower);width:${split.lower}%"></div>
      <div class="split-seg" style="background:var(--core);width:${split.core}%"></div>
    </div>
    <div class="split-labels">
      <div class="split-label"><div class="split-dot" style="background:var(--upper)"></div><span style="color:var(--text2)">Upper ${split.upper}%</span></div>
      <div class="split-label"><div class="split-dot" style="background:var(--lower)"></div><span style="color:var(--text2)">Lower ${split.lower}%</span></div>
      <div class="split-label"><div class="split-dot" style="background:var(--core)"></div><span style="color:var(--text2)">Core ${split.core}%</span></div>
    </div>`;
}
document.getElementById('r-split').innerHTML = splitBarHTML(routine.split);

function videoURL(exName) {
  const q = encodeURIComponent(exName + ' exercise bodyweight technique');
  return `https://www.youtube.com/results?search_query=${q}`;
}

const tagClass = { upper: 'tag-upper', lower: 'tag-lower', core: 'tag-core' };

const phasesEl = document.getElementById('r-phases');
routine.phases.forEach(phase => {
  const isWarmup = phase.label === 'Warm-up';

  const secLabel = document.createElement('div');
  secLabel.className = 'section-label';
  secLabel.textContent = `${phase.label} · ${phase.duration}`;
  phasesEl.appendChild(secLabel);

  phase.exercises.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'ex-card ' + (isWarmup ? 'warmup' : phase.label === 'Cool-down' ? 'cooldown' : '');

    const tagsHTML = ex.muscles.length
      ? `<div class="tags">${ex.muscles.map(m => `<span class="tag ${tagClass[m.k]}">${m.n}</span>`).join('')}</div>`
      : '';

    card.innerHTML = `
      <div class="ex-left">
        <div class="ex-name">${ex.name}</div>
        <div class="ex-note">${ex.note}</div>
        ${tagsHTML}
      </div>
      <div class="ex-right">
        <div class="ex-sets">${ex.sets}</div>
        <a href="${videoURL(ex.name)}" target="_blank" class="video-btn" aria-label="Watch ${ex.name} on YouTube">
          <svg viewBox="0 0 16 16"><path d="M6.5 4.5l5 3.5-5 3.5V4.5z"/><rect width="14" height="14" x="1" y="1" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
          Watch
        </a>
      </div>`;
    phasesEl.appendChild(card);
  });
});

document.getElementById('r-tip').innerHTML = `<div class="tip-box">${routine.tip}</div>`;

// --- Mode selection ---
let workoutMode = 'timer';
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    workoutMode = btn.dataset.mode;
  });
});

// --- History ---
function saveWorkoutHistory(mode, sets) {
  const now = new Date();
  const entry = {
    id: now.getTime(),
    date: now.toISOString().slice(0, 10),
    time: now.toTimeString().slice(0, 5),
    routineId: routine.id,
    routineTitle: routine.title,
    mode,
    sets,
  };
  const hist = JSON.parse(localStorage.getItem('workout_history') || '[]');
  hist.unshift(entry);
  localStorage.setItem('workout_history', JSON.stringify(hist));
}

// --- Build flat exercise queue for timer ---
const queue = [];
routine.phases.forEach(phase => {
  phase.exercises.forEach(ex => {
    const setsMatch = ex.sets.match(/(\d+)\s*[×x]/);
    const totalSets = setsMatch ? parseInt(setsMatch[1]) : 1;
    for (let s = 1; s <= totalSets; s++) {
      queue.push({
        phase: phase.label,
        name: ex.name,
        note: ex.note,
        work: ex.work,
        rest: ex.rest,
        setNum: s,
        totalSets,
      });
    }
  });
});

// --- Timer state ---
let qIdx = 0;
let mode = 'work';
let remaining = 0;
let totalDuration = 0;
let running = false;
let interval = null;

const overlay   = document.getElementById('timer-overlay');
const tPhase    = document.getElementById('t-phase');
const tName     = document.getElementById('t-name');
const tNote     = document.getElementById('t-note');
const tSec      = document.getElementById('t-sec');
const tMode     = document.getElementById('t-mode');
const tRing     = document.getElementById('t-ring');
const tSetInfo  = document.getElementById('t-set-info');
const tNext     = document.getElementById('t-next');
const tProgress = document.getElementById('t-progress');
const tPlay     = document.getElementById('t-play-icon');
const tPause    = document.getElementById('t-pause-icon');
const CIRCUMFERENCE = 502;

function updateRing() {
  const frac = remaining / totalDuration;
  tRing.style.strokeDashoffset = CIRCUMFERENCE * (1 - frac);
}

function updateProgressBar() {
  const done = qIdx + (mode === 'rest' ? 1 : 0);
  tProgress.style.width = Math.round((done / queue.length) * 100) + '%';
}

function loadItem(idx, m) {
  if (idx >= queue.length) { showDone(); return; }
  const item = queue[idx];
  mode = m;
  totalDuration = m === 'work' ? item.work : item.rest;
  remaining = totalDuration;

  tPhase.textContent = item.phase;
  tName.textContent = item.name;
  tNote.textContent = item.note;
  tSetInfo.textContent = item.totalSets > 1 ? `Set ${item.setNum} of ${item.totalSets}` : '';

  if (m === 'work') {
    tMode.textContent = 'GO';
    tMode.className = 'timer-mode-label work';
    tRing.className = 'timer-ring-fg work';
  } else {
    tMode.textContent = 'REST';
    tMode.className = 'timer-mode-label rest';
    tRing.className = 'timer-ring-fg rest';
  }

  if (m === 'work') {
    if (item.setNum < item.totalSets) {
      tNext.innerHTML = `Next: <span>Rest ${item.rest}s</span>`;
    } else if (idx + 1 < queue.length) {
      tNext.innerHTML = `Next: <span>${queue[idx + 1].name}</span>`;
    } else {
      tNext.innerHTML = `<span>Last exercise!</span>`;
    }
  } else {
    tNext.innerHTML = idx + 1 < queue.length ? `Next: <span>${queue[idx + 1].name}</span>` : '';
  }

  tSec.textContent = remaining;
  updateRing();
  updateProgressBar();
}

function tick() {
  remaining--;
  tSec.textContent = remaining;
  updateRing();
  if (remaining <= 0) {
    clearInterval(interval); interval = null;
    beep();
    const item = queue[qIdx];
    if (mode === 'work') {
      if (item.rest > 0 && qIdx !== queue.length - 1) {
        loadItem(qIdx, 'rest'); startTimer();
      } else {
        qIdx++;
        if (qIdx < queue.length) { loadItem(qIdx, 'work'); startTimer(); }
        else showDone();
      }
    } else {
      qIdx++;
      if (qIdx < queue.length) { loadItem(qIdx, 'work'); startTimer(); }
      else showDone();
    }
  }
}

function startTimer() {
  running = true;
  tPlay.style.display = 'none';
  tPause.style.display = '';
  interval = setInterval(tick, 1000);
}

function pauseTimer() {
  running = false;
  tPlay.style.display = '';
  tPause.style.display = 'none';
  clearInterval(interval); interval = null;
}

function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.3, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    o.start(); o.stop(ctx.currentTime + 0.3);
  } catch(e) {}
}

function showDone() {
  saveWorkoutHistory('timer', []);
  overlay.innerHTML = `
    <div class="done-screen">
      <div class="done-icon">✓</div>
      <div class="done-title">Done!</div>
      <div class="done-sub">You completed ${routine.title}.<br>Great work.</div>
      <a href="history.html" style="margin-top:8px;font-size:13px;color:var(--accent)">View history →</a>
      <button class="done-btn" onclick="window.location.href='index.html'" style="margin-top:16px">Back to routines</button>
    </div>`;
}

document.getElementById('t-playpause').addEventListener('click', () => {
  if (running) pauseTimer(); else startTimer();
});

document.getElementById('t-skip').addEventListener('click', () => {
  clearInterval(interval); interval = null;
  const item = queue[qIdx];
  if (mode === 'work') {
    if (item.rest > 0 && qIdx !== queue.length - 1) {
      loadItem(qIdx, 'rest');
    } else {
      qIdx++;
      if (qIdx < queue.length) loadItem(qIdx, 'work');
      else { showDone(); return; }
    }
  } else {
    qIdx++;
    if (qIdx < queue.length) loadItem(qIdx, 'work');
    else { showDone(); return; }
  }
  if (running) startTimer();
});

document.getElementById('t-prev').addEventListener('click', () => {
  clearInterval(interval); interval = null;
  if (mode === 'rest') {
    loadItem(qIdx, 'work');
  } else if (qIdx > 0) {
    qIdx--;
    loadItem(qIdx, 'work');
  }
  if (running) startTimer();
});

document.getElementById('t-quit').addEventListener('click', () => {
  clearInterval(interval); interval = null;
  running = false;
  overlay.classList.remove('active');
  document.getElementById('start-area').style.display = '';
});

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('start-area').style.display = 'none';
  if (workoutMode === 'reps') {
    rIdx = 0;
    Object.keys(enteredReps).forEach(k => delete enteredReps[k]);
    repsOverlay.classList.add('active');
    loadRepsItem(0);
  } else {
    qIdx = 0;
    overlay.classList.add('active');
    loadItem(0, 'work');
    startTimer();
  }
});

// --- Reps mode ---

function parseTargetReps(setsStr) {
  const afterMult = setsStr.match(/[×x]\s*(\d+)/);
  if (afterMult) {
    const rest = setsStr.slice(setsStr.indexOf(afterMult[0]) + afterMult[0].length);
    if (/sec/.test(rest)) return null;
    return parseInt(afterMult[1]);
  }
  const numMatch = setsStr.match(/^(\d+)\s*(reps|each)/);
  return numMatch ? parseInt(numMatch[1]) : null;
}

const repsQueue = [];
routine.phases.forEach(phase => {
  phase.exercises.forEach(ex => {
    const setsMatch = ex.sets.match(/(\d+)\s*[×x]/);
    const totalSets = setsMatch ? parseInt(setsMatch[1]) : 1;
    const targetReps = parseTargetReps(ex.sets);
    for (let s = 1; s <= totalSets; s++) {
      repsQueue.push({
        phase: phase.label,
        name: ex.name,
        note: ex.note,
        sets: ex.sets,
        targetReps,
        setNum: s,
        totalSets,
      });
    }
  });
});

let rIdx = 0;
let currentReps = 0;
const enteredReps = {}; // queueIdx → reps, persists across back/forward navigation

function getLoggedSets() {
  return Object.entries(enteredReps)
    .sort(([a], [b]) => a - b)
    .map(([idx, reps]) => {
      const item = repsQueue[parseInt(idx)];
      return { exercise: item.name, phase: item.phase, setNum: item.setNum, totalSets: item.totalSets, reps };
    });
}

const repsOverlay = document.getElementById('reps-overlay');
const rpPhase     = document.getElementById('rp-phase');
const rpName      = document.getElementById('rp-name');
const rpNote      = document.getElementById('rp-note');
const rpSetInfo   = document.getElementById('rp-set-info');
const rpTarget    = document.getElementById('rp-target');
const rpCount     = document.getElementById('rp-count');
const rpRepSec    = document.getElementById('rp-rep-section');
const rpSetsDisp  = document.getElementById('rp-sets-display');
const rpProgress  = document.getElementById('rp-progress');
const rpNext      = document.getElementById('rp-next');

function loadRepsItem(idx) {
  if (idx >= repsQueue.length) { showRepsDone(); return; }
  rIdx = idx;
  const item = repsQueue[idx];

  rpPhase.textContent = item.phase;
  rpName.textContent = item.name;
  rpNote.textContent = item.note;
  rpSetInfo.textContent = item.totalSets > 1 ? `Set ${item.setNum} of ${item.totalSets}` : '';

  if (item.targetReps !== null) {
    rpRepSec.style.display = '';
    rpSetsDisp.style.display = 'none';
    rpTarget.textContent = `Target: ${item.targetReps}`;
    currentReps = idx in enteredReps ? enteredReps[idx] : item.targetReps;
    rpCount.textContent = currentReps;
  } else {
    rpRepSec.style.display = 'none';
    rpSetsDisp.style.display = '';
    rpSetsDisp.textContent = item.sets;
    currentReps = null;
  }

  rpProgress.style.width = Math.round((idx / repsQueue.length) * 100) + '%';
  rpNext.innerHTML = idx + 1 < repsQueue.length
    ? `Next: <span>${repsQueue[idx + 1].name}</span>`
    : '<span>Last one!</span>';
}

function showRepsDone() {
  const sets = getLoggedSets();
  saveWorkoutHistory('reps', sets);
  const totalReps = sets.reduce((s, e) => s + e.reps, 0);
  repsOverlay.innerHTML = `
    <div class="done-screen">
      <div class="done-icon">✓</div>
      <div class="done-title">Done!</div>
      <div class="done-sub">
        ${routine.title}<br>
        ${sets.length} sets · ${totalReps} total reps
      </div>
      <a href="history.html" style="margin-top:8px;font-size:13px;color:var(--accent)">View history →</a>
      <button class="done-btn" onclick="window.location.href='index.html'" style="margin-top:16px">Back to routines</button>
    </div>`;
}

document.getElementById('rp-minus').addEventListener('click', () => {
  if (currentReps > 0) { currentReps--; rpCount.textContent = currentReps; }
});
document.getElementById('rp-plus').addEventListener('click', () => {
  if (currentReps !== null) { currentReps++; rpCount.textContent = currentReps; }
});
document.getElementById('rp-done').addEventListener('click', () => {
  if (currentReps !== null) enteredReps[rIdx] = currentReps;
  loadRepsItem(rIdx + 1);
});
document.getElementById('rp-skip').addEventListener('click', () => {
  loadRepsItem(rIdx + 1);
});
document.getElementById('rp-prev').addEventListener('click', () => {
  if (rIdx > 0) loadRepsItem(rIdx - 1);
});
document.getElementById('rp-quit').addEventListener('click', () => {
  const sets = getLoggedSets();
  if (sets.length > 0) saveWorkoutHistory('reps', sets);
  repsOverlay.classList.remove('active');
  document.getElementById('start-area').style.display = '';
});
