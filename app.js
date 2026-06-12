if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

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

const container = document.getElementById('cards');
const workoutHistory = JSON.parse(localStorage.getItem('workout_history') || '[]');

ROUTINES.forEach(r => {
  const last = workoutHistory.find(e => e.routineId === r.id);
  const lastSets = last && Array.isArray(last.sets) ? last.sets : [];
  const lastReps = lastSets.reduce((s, e) => s + (e.reps || 0), 0);
  const lastDoneHTML = last
    ? `<div class="routine-card-last">Done ${last.date}${last.mode === 'reps' && lastReps > 0 ? ` · ${lastReps} reps` : ''}</div>`
    : '';

  const card = document.createElement('div');
  card.className = 'routine-card';
  card.innerHTML = `
    <div class="routine-num">${r.id}</div>
    <div class="routine-info">
      <div class="routine-card-title">${r.title}</div>
      <div class="routine-card-focus">${r.focus}</div>
      ${lastDoneHTML}
      <div class="routine-card-split" style="margin-top:10px">${splitBarHTML(r.split)}</div>
    </div>
    <div class="chevron"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>`;
  card.addEventListener('click', () => {
    window.location.href = `routine.html?id=${r.id}`;
  });
  container.appendChild(card);
});
