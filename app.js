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

const FAVS_KEY = 'workout_favorites';
let favorites = JSON.parse(localStorage.getItem(FAVS_KEY) || '[]');

function isFav(id) { return favorites.includes(id); }

function toggleFav(id) {
  if (isFav(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites = [id, ...favorites];
  }
  localStorage.setItem(FAVS_KEY, JSON.stringify(favorites));
  renderCards();
}

const container = document.getElementById('cards');
const workoutHistory = JSON.parse(localStorage.getItem('workout_history') || '[]');

function renderCards() {
  container.innerHTML = '';
  const sorted = [
    ...ROUTINES.filter(r => isFav(r.id)),
    ...ROUTINES.filter(r => !isFav(r.id))
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
        ${lastDoneHTML}
        <div class="routine-card-split" style="margin-top:10px">${splitBarHTML(r.split)}</div>
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
