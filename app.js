if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

// ── Sport icons & labels ──────────────────────────────────────────────

const SPORT_ICONS = {
  run: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="4" r="2" fill="currentColor" stroke="none"/><path d="M14 7l-4 9M14 7l4 3 3 4M10 16l-2 4M18 10l2 5"/></svg>`,
  swim: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/><path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0"/><circle cx="19" cy="6" r="2" fill="currentColor" stroke="none"/><path d="M14 7l3-1 2 2-3 3"/></svg>`,
  cycle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h-5l-3 6 3 2 2-5 5.5 6"/><path d="M15 6l2 6"/><line x1="13" y1="3" x2="17" y2="3"/></svg>`,
  all:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};
const SPORT_LABELS = { run: 'Running', swim: 'Swimming', cycle: 'Cycling', all: 'All sports' };

// ── Helpers ──────────────────────────────────────────────────────────

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

// ── Favourites ───────────────────────────────────────────────────────

const FAVS_KEY = 'workout_favorites';
let favorites = JSON.parse(localStorage.getItem(FAVS_KEY) || '[]');

function isFav(id) { return favorites.includes(id); }

function toggleFav(id) {
  favorites = isFav(id) ? favorites.filter(f => f !== id) : [id, ...favorites];
  localStorage.setItem(FAVS_KEY, JSON.stringify(favorites));
  renderCards();
}

// ── Duration tabs ─────────────────────────────────────────────────────

let activeDur = 30;

document.querySelectorAll('.dur-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.dur-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeDur = parseInt(tab.dataset.dur);
    renderCards();
  });
});

// ── Render ────────────────────────────────────────────────────────────

const container = document.getElementById('cards');
const workoutHistory = JSON.parse(localStorage.getItem('workout_history') || '[]');

function renderCards() {
  container.innerHTML = '';
  const pool = ROUTINES.filter(r => r.duration === activeDur);
  const sorted = [
    ...pool.filter(r => isFav(r.id)),
    ...pool.filter(r => !isFav(r.id))
  ];

  sorted.forEach(r => {
    const last = workoutHistory.find(e => e.routineId === r.id);
    const lastSets = last && Array.isArray(last.sets) ? last.sets : [];
    const lastReps = lastSets.reduce((s, e) => s + (e.reps || 0), 0);
    const lastDoneHTML = last
      ? `<div class="routine-card-last">Done ${last.date}${last.mode === 'reps' && lastReps > 0 ? ` · ${lastReps} reps` : ''}</div>`
      : '';

    const fav = isFav(r.id);
    const card = document.createElement('div');
    card.className = 'routine-card';
    card.innerHTML = `
      <div class="routine-num">${r.id}</div>
      <div class="routine-info">
        <div class="routine-card-title">${r.title}</div>
        <div class="routine-card-focus">${r.focus}</div>
        <div class="sport-badge sport-${r.sport}">${SPORT_ICONS[r.sport]}<span>${SPORT_LABELS[r.sport]}</span></div>
        ${lastDoneHTML}
        <div class="routine-card-split">${splitBarHTML(r.split)}</div>
      </div>
      <button class="heart-btn${fav ? ' active' : ''}" data-id="${r.id}" aria-label="${fav ? 'Remove from favourites' : 'Add to favourites'}">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
      <div class="chevron"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>`;

    card.querySelector('.heart-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFav(r.id);
    });
    card.addEventListener('click', () => {
      window.location.href = `routine.html?id=${r.id}`;
    });
    container.appendChild(card);
  });
}

renderCards();
