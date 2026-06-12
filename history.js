const history = JSON.parse(localStorage.getItem('workout_history') || '[]');
const listEl  = document.getElementById('history-list');
const emptyEl = document.getElementById('history-empty');

// --- Weekly stats ---
function weekStart(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() - d.getDay()); // back to Sunday
  return d.toISOString().slice(0, 10);
}

if (history.length > 0) {
  const today = new Date().toISOString().slice(0, 10);
  const thisWeek = weekStart(today);

  // Count this week
  const thisWeekCount = history.filter(e => weekStart(e.date) === thisWeek).length;

  // Average over all distinct weeks that have data
  const weekCounts = {};
  history.forEach(e => {
    const w = weekStart(e.date);
    weekCounts[w] = (weekCounts[w] || 0) + 1;
  });
  const weekValues = Object.values(weekCounts);
  const avgPerWeek = weekValues.length
    ? (weekValues.reduce((a, b) => a + b, 0) / weekValues.length).toFixed(1)
    : '0';

  const summaryEl = document.createElement('div');
  summaryEl.className = 'history-week-summary';
  summaryEl.innerHTML = `
    <div class="history-stat">
      <div class="history-stat-value">${history.length}</div>
      <div class="history-stat-label">Total workouts</div>
    </div>
    <div class="history-stat">
      <div class="history-stat-value">${thisWeekCount}</div>
      <div class="history-stat-label">This week</div>
    </div>
    <div class="history-stat">
      <div class="history-stat-value">${avgPerWeek}</div>
      <div class="history-stat-label">Avg per week</div>
    </div>`;
  listEl.appendChild(summaryEl);
}

// --- Cards ---
if (history.length === 0) {
  emptyEl.style.display = '';
} else {
  history.forEach(entry => {
    const sets = entry.sets || [];
    const totalReps = sets.reduce((s, e) => s + (e.reps || 0), 0);

    const byExercise = {};
    sets.forEach(s => {
      if (!byExercise[s.exercise]) byExercise[s.exercise] = [];
      byExercise[s.exercise].push(s.reps);
    });

    const exerciseRows = Object.entries(byExercise).map(([name, repsArr]) =>
      `<div class="history-ex-row"><span>${name}</span><span>${repsArr.join(', ')} reps</span></div>`
    ).join('');

    const detail = entry.mode === 'reps' && sets.length > 0
      ? `${sets.length} sets · ${totalReps} reps`
      : 'Timer';

    const hasDetails = exerciseRows.length > 0;

    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="history-card-header">
        <div style="flex:1;min-width:0">
          <div class="history-card-title">${entry.routineTitle}</div>
          <div class="history-card-meta">${entry.date}${entry.time ? ' · ' + entry.time : ''} · ${detail}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
          <div class="history-mode-badge ${entry.mode}">${entry.mode}</div>
          ${hasDetails ? '<svg class="history-chevron" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>' : ''}
        </div>
      </div>
      ${hasDetails ? `<div class="history-exercises">${exerciseRows}</div>` : ''}`;

    if (hasDetails) {
      card.addEventListener('click', () => card.classList.toggle('expanded'));
    }

    listEl.appendChild(card);
  });
}

document.getElementById('export-btn').addEventListener('click', () => {
  const rows = [['date', 'time', 'routine', 'mode', 'exercise', 'phase', 'set', 'reps']];

  history.forEach(entry => {
    const sets = entry.sets || [];
    if (sets.length === 0) {
      rows.push([entry.date, entry.time || '', entry.routineTitle, entry.mode, '', '', '', '']);
    } else {
      sets.forEach(s => {
        rows.push([entry.date, entry.time || '', entry.routineTitle, entry.mode, s.exercise, s.phase, s.setNum, s.reps]);
      });
    }
  });

  const csv = rows.map(r =>
    r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `workouts-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
});
