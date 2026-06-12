const EXERCISES = [

  // ── LOWER BODY ──────────────────────────────────────────────────────
  {
    id: 'squat',
    name: 'Squat',
    category: 'lower',
    muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    description: 'The foundation of all lower body training. A correctly performed bodyweight squat develops the quad, glute, and hamstring strength that transfers directly to running, cycling, and swimming starts. It trains the brain to coordinate hip, knee, and ankle flexion simultaneously — a movement pattern used in almost every athletic activity.',
    tips: [
      'Feet shoulder-width apart, toes slightly turned out (15–30°)',
      'Sit down and back — hips descend before knees travel forward',
      'Chest up and spine long throughout the full range',
      '3 sec lowering maximises time under tension without extra reps',
      'Drive through the full foot — heel and ball — to stand'
    ]
  },
  {
    id: 'bulgarian-split-squat',
    name: 'Bulgarian split squat',
    category: 'lower',
    muscles: ['Quads', 'Glutes', 'Hip stabilisers', 'Hamstrings'],
    description: 'The most effective single-leg strength exercise available without gym equipment. Elevating the rear foot isolates the front leg completely and immediately exposes any strength imbalance between sides. The high hip flexor demand also makes it an excellent hip mobility exercise for cyclists and anyone who sits for long periods.',
    tips: [
      'Rear foot elevated on a chair — top of the foot, or heel, both work',
      'Front foot far enough forward that the shin stays roughly vertical at the bottom',
      '3 sec lowering — the descent is where most of the work happens',
      'Front knee tracks over the second toe, never caving inward',
      'Work the weaker leg first, every set and every session'
    ]
  },
  {
    id: 'romanian-deadlift',
    name: 'Romanian deadlift',
    category: 'lower',
    muscles: ['Hamstrings', 'Glutes', 'Lower back'],
    description: 'A hip-hinge movement that trains the hamstrings through their full range of motion, loading them in the lengthened position. Runners and cyclists develop shortened, tight hamstrings from the mechanics of their sport — the RDL directly counteracts this. Most hamstring strains happen at the moment of peak length, which is exactly where this exercise builds strength.',
    tips: [
      'Soft bend in both knees throughout — this is not a stiff-leg exercise',
      'Hinge at the hips, not the waist — push the hips backward',
      'Feel a strong stretch in the hamstrings before reversing',
      'Spine stays neutral from skull to tailbone — if it rounds, you have gone too far',
      'Drive the hips forward to stand — the lower back should not do the lifting'
    ]
  },
  {
    id: 'glute-bridge',
    name: 'Glute bridge',
    category: 'lower',
    muscles: ['Glutes', 'Hamstrings', 'Lower back'],
    description: 'The essential glute isolation exercise. Trains the posterior chain with zero spinal compression, making it accessible even when the lower back is fatigued. The horizontal loading vector is distinct from squats and lunges, activating the gluteus maximus more directly — important for runners who rely on glute extension power with every stride.',
    tips: [
      'Feet flat, hip-width apart, heels close to the glutes',
      'Drive through the heels — if toes lift slightly, that is fine',
      'Squeeze the glutes hard at the top, not just the hamstrings',
      '2-second hold at the top doubles time under tension without extra reps',
      'Lower slowly and with control — the descent is not rest'
    ]
  },
  {
    id: 'single-leg-glute-bridge',
    name: 'Single-leg glute bridge',
    category: 'lower',
    muscles: ['Glutes', 'Hamstrings', 'Core stability'],
    description: 'Advances the glute bridge by forcing one leg to produce all the force while the core resists pelvic rotation. This single-leg demand directly mirrors running and swimming — every push-off or kick requires the glute to work in isolation while the core stabilises the pelvis. Imbalances between sides become immediately visible here.',
    tips: [
      'Extend the non-working leg straight, or bend it at 90° to start',
      'Drive through the heel of the planted foot only',
      'Keep hips completely level — zero rotation is the goal, not height',
      'If the opposite hip drops, reduce range of motion before adding reps',
      'Hold 1–2 sec at the top before lowering'
    ]
  },
  {
    id: 'wall-sit',
    name: 'Wall sit',
    category: 'lower',
    muscles: ['Quads', 'Glutes', 'Calves'],
    description: 'An isometric exercise that builds the sustained quad and glute endurance that separates athletes who fade from those who do not. The discomfort is the training stimulus — the ability to stay in position under fatigue is the adaptation. Particularly valuable for cyclists on long climbs and skiers who hold low positions for extended periods.',
    tips: [
      'Back completely flat against the wall — no gap at the lower back',
      'Thighs parallel to the floor, shins vertical, 90° at the knee',
      'Arms at sides or extended forward — not resting on the thighs',
      'Breathe normally throughout — holding your breath is cheating',
      'When form breaks before the time is up, record the actual time — that is your baseline'
    ]
  },
  {
    id: 'hip-hinge',
    name: 'Hip hinge (good morning)',
    category: 'lower',
    muscles: ['Hamstrings', 'Glutes', 'Lower back'],
    description: 'The hip hinge is a movement skill as much as an exercise. Learning to load the hamstrings and glutes by pushing the hips backward — with a neutral spine — is the prerequisite for safe deadlifts and powerful running or cycling extension. Most lower back injuries happen when people flex the spine instead of hinging at the hips; mastering this pattern is protective.',
    tips: [
      'Stand with a slight bend in both knees',
      'Push the hips directly backward — imagine reaching for a wall behind you',
      'Spine stays long from tailbone to the crown of the head',
      'Feel the hamstrings load with tension as you hinge — that is the target',
      'Drive the hips forward to stand; the lower back should not initiate the return'
    ]
  },
  {
    id: 'sumo-squat',
    name: 'Sumo squat',
    category: 'lower',
    muscles: ['Inner thighs', 'Glutes', 'Quads'],
    description: 'A wide-stance squat that shifts emphasis to the adductors (inner thighs) and requires greater hip external rotation. Athletes in swimming and cycling often develop tight adductors from the dominant straight-line mechanics of their sport. The sumo squat addresses this with a loaded stretch through the inner thigh — combining strength and mobility work in one exercise.',
    tips: [
      'Feet outside shoulder-width, toes turned out roughly 45°',
      'Sit straight down between the heels — do not lean forward',
      'Knees track in the direction the toes point throughout',
      'At the bottom, elbows can gently press knees outward to encourage depth',
      'Keep chest up — folding forward shifts load away from the glutes and inner thighs'
    ]
  },
  {
    id: 'reverse-lunge',
    name: 'Reverse lunge',
    category: 'lower',
    muscles: ['Quads', 'Glutes', 'Core stability'],
    description: 'A lunge variation where you step backward rather than forward. This is significantly easier on the knee joint than a forward lunge and better mimics the deceleration demands of running. The act of stepping back requires the front leg to control the landing eccentrically — a high-quality single-leg stability challenge that transfers well to trail running and field sports.',
    tips: [
      'Step back far enough that the front shin stays vertical when the back knee is near the floor',
      'Lower the back knee to just above the floor — hovering, not touching',
      'Drive through the front heel to return — not the toes',
      'Keep the torso upright throughout — leaning forward shifts work away from the glute',
      'Knee drive variation: return explosively and drive the back knee up toward the chest'
    ]
  },
  {
    id: 'single-leg-calf-raise',
    name: 'Single-leg calf raise',
    category: 'lower',
    muscles: ['Calves', 'Ankle stabilisers'],
    description: 'The standing single-leg calf raise targets the gastrocnemius through its full range of motion. Bilateral versions allow the stronger leg to compensate — the single-leg version eliminates this and immediately reveals any asymmetry. Essential for runners who rely on calf and Achilles power with every push-off, and for swimmers building ankle plantar-flexion strength.',
    tips: [
      'Hold a wall lightly for balance only — do not lean into it',
      'Rise as high as possible onto the ball of the foot',
      '3 sec lowering — the eccentric phase is where most adaptation happens',
      'Standing on a step and letting the heel drop below increases range',
      'Full range at the bottom matters as much as the height at the top'
    ]
  },
  {
    id: 'deficit-calf-raise',
    name: 'Deficit calf raise',
    category: 'lower',
    muscles: ['Calves', 'Achilles', 'Ankle stabilisers'],
    description: 'Extends the range of the calf raise by starting the heel below the level of the ball of the foot. This extended range places significant load through the Achilles tendon — building the resilience that is essential for runners and jumpers. Eccentric loading in this lengthened position is the most evidence-backed method for Achilles tendinopathy management and prevention.',
    tips: [
      'Use a step, thick book, or raised surface to allow heel drop',
      'Start with the heel as low as comfortable — ease into it over days, not all at once',
      'Rise to the highest possible point on the ball of the foot',
      '3 sec lowering — the slow eccentric is the therapeutic part of this exercise',
      'The Achilles adapts slowly — increase range gradually over weeks'
    ]
  },
  {
    id: 'seated-calf-raise',
    name: 'Seated calf raise',
    category: 'lower',
    muscles: ['Soleus', 'Calves'],
    description: 'The seated position bends the knee to approximately 90°, which slackens the gastrocnemius and isolates the soleus — the deeper calf muscle running underneath it. The soleus is primarily slow-twitch and endurance-dominant, responding better to high-rep sustained work. It is the more important calf muscle for long-distance athletes and is almost never trained in standard calf raise variations.',
    tips: [
      'Sit on a sturdy chair, feet flat on the floor',
      'Place a heavy object — books, a loaded bag — on the thighs close to the knee',
      'Rise onto the balls of the feet as high as possible',
      'Hold briefly at the top before lowering under control',
      'Higher rep ranges (15–25) match the soleus fiber composition'
    ]
  },

  // ── UPPER BODY ──────────────────────────────────────────────────────
  {
    id: 'push-up',
    name: 'Push-up',
    category: 'upper',
    muscles: ['Chest', 'Shoulders', 'Triceps', 'Core'],
    description: 'The fundamental pressing exercise. Done with correct form and a slow tempo, it is a highly effective chest, shoulder, and tricep developer — and simultaneously a core exercise, since the body must maintain a rigid plank throughout. The push-up is often underestimated because most people perform it too fast to produce a meaningful training stimulus.',
    tips: [
      'Hands slightly wider than shoulder-width, fingers pointing forward',
      'Elbows at 45° from the torso — not flared wide, not tucked straight back',
      'Lower until the chest nearly touches the floor — full range matters',
      '3 sec lowering creates far more muscle tension than fast reps',
      'Body is a rigid plank from head to heels — no hip sag, no raised hips'
    ]
  },
  {
    id: 'wide-push-up',
    name: 'Wide push-up',
    category: 'upper',
    muscles: ['Chest', 'Shoulders', 'Triceps'],
    description: 'Hand position wider than shoulder-width shifts emphasis toward the outer pectoral fibers and anterior deltoids. The wider base also reduces the range of motion slightly, which allows more reps and makes it useful as a volume tool after harder narrow variations like the diamond push-up.',
    tips: [
      'Hands about 1.5× shoulder-width apart',
      'Elbows flare to approximately 60° rather than 45°',
      'Lower chest between the hands — do not stop above them',
      'Keep the core rigid — a wider base makes the plank harder to maintain',
      'Use this variation after diamond push-ups to continue the set with less tricep demand'
    ]
  },
  {
    id: 'diamond-push-up',
    name: 'Diamond push-up',
    category: 'upper',
    muscles: ['Triceps', 'Chest', 'Shoulders'],
    description: 'The most effective bodyweight tricep exercise. Bringing the hands together under the chest changes the mechanics fundamentally: the triceps must do the majority of the pressing work and the chest plays a supporting role. Swimmers benefit particularly — tricep strength is a primary driver of pull-through power in all strokes.',
    tips: [
      'Thumbs and index fingers touching to form a diamond shape',
      'Hands placed under the centre of the chest, not under the face',
      'Elbows travel straight back, close to the body — not flared out to the sides',
      'Lower until the chest nearly touches the hands',
      'When fatigue hits, reduce range before breaking the elbow position'
    ]
  },
  {
    id: 'pike-push-up',
    name: 'Pike push-up',
    category: 'upper',
    muscles: ['Shoulders', 'Triceps', 'Upper back'],
    description: 'Performed with hips elevated in an inverted V, the pike push-up trains the overhead pressing pattern. This is the only bodyweight exercise that loads the deltoid comparably to a shoulder press. The elevated hip position also provides a dynamic hamstring and lower back stretch during each rep.',
    tips: [
      'Start in a downward dog — hips high, heels pressing toward the floor',
      'Walk feet closer to hands for more vertical loading on the shoulders',
      'Lower the crown of the head toward the floor between the hands',
      'Focus on the front deltoid doing the work — do not let the triceps dominate',
      'Elbows can move slightly outward as you lower, matching the deltoid line of pull'
    ]
  },
  {
    id: 'table-row-overhand',
    name: 'Table bodyweight row (overhand)',
    category: 'upper',
    muscles: ['Upper back', 'Biceps', 'Rear delts'],
    description: 'The essential pulling exercise for anyone training without a pull-up bar. Lying under a sturdy table and pulling the chest to the edge develops the upper back and rear deltoids that pushing-dominant work — push-ups, swimming, cycling — chronically neglects. Rear deltoid weakness is a primary driver of shoulder pain in overhead athletes and should be directly trained every week.',
    tips: [
      'Find a sturdy table that will not tip — test it before committing',
      'Grip the edge overhand at slightly wider than shoulder-width',
      'Body stays in a straight plank from head to heels — no sagging hips',
      'Pull the chest up to the edge, squeezing shoulder blades together at the top',
      'Move feet further forward (more horizontal body angle) to increase difficulty'
    ]
  },
  {
    id: 'table-row-underhand',
    name: 'Table row (underhand)',
    category: 'upper',
    muscles: ['Lats', 'Biceps', 'Upper back'],
    description: 'The supinated (underhand) grip changes the pull mechanics: the lats are loaded in a more vertical line and the biceps contribute more. This variation often feels stronger than the overhand version and provides a different stimulus to the upper back. Both variations target different fiber orientations in the latissimus — use both for complete development.',
    tips: [
      'Same setup as the overhand row — lie under a sturdy table',
      'Flip the grip so palms face toward you',
      'Elbows travel closer to the body during the pull',
      'Pull chest to the edge and hold for 1 second at the top',
      'Most people feel stronger with this grip — use it on heavier or rep-PR sets'
    ]
  },
  {
    id: 'tricep-dip',
    name: 'Tricep dip',
    category: 'upper',
    muscles: ['Triceps', 'Shoulders', 'Chest'],
    description: 'An effective bodyweight tricep exercise using a chair or bench as support. The behind-the-body hand position creates a unique loading angle: the triceps are challenged through a long range while the front deltoids assist. Swimmers gain additional benefit since tricep strength is a primary driver of power through the pull-through phase of every stroke.',
    tips: [
      'Hands on the edge of a sturdy chair, fingers facing forward',
      'Slide hips off the seat, feet extended in front',
      'Lower by bending the elbows only — do not let the hips drop toward the floor',
      'Elbows point straight back throughout — not flared to the sides',
      'Keep shoulders depressed and away from the ears throughout the movement'
    ]
  },
  {
    id: 'superman-hold',
    name: 'Superman hold',
    category: 'upper',
    muscles: ['Upper back', 'Rear delts', 'Lower back', 'Glutes'],
    description: 'A prone back extension that activates the entire posterior chain with no spinal compression. Particularly valuable for swimmers who need strong back extensors for a flat body position in the water, and for anyone who spends long hours seated. The glute contraction required at the top also protects the lower back from overextension during the hold.',
    tips: [
      'Lie face down, arms extended overhead',
      'Lift arms, chest, and legs simultaneously in one smooth motion',
      'Squeeze the glutes hard at the top — this is the lower back protection cue',
      'Hold for 2–3 sec at the peak before lowering under control',
      'Keep the neck in line with the spine — do not crank it upward'
    ]
  },

  // ── CORE ───────────────────────────────────────────────────────────
  {
    id: 'plank',
    name: 'Plank',
    category: 'core',
    muscles: ['Abs', 'Obliques', 'Shoulders', 'Glutes'],
    description: 'The standard for anti-extension core training. The plank teaches the body to resist the spine extending (arching) under sustained load — the most fundamental core function in running, cycling, and swimming. Done correctly, it simultaneously engages the abs, obliques, glutes, and shoulder stabilisers as a complete system.',
    tips: [
      'Elbows directly under the shoulders — not in front',
      'Body forms one straight line from head to heels',
      'Squeeze the glutes and quads — this takes load off the lower back',
      'Breathe normally — holding the breath reduces core engagement',
      'When form breaks, stop and reset; continuing trains the wrong pattern'
    ]
  },
  {
    id: 'side-plank',
    name: 'Side plank',
    category: 'core',
    muscles: ['Obliques', 'Abs', 'Shoulders', 'Hip abductors'],
    description: 'Anti-lateral flexion training — resisting the spine bending sideways. While the plank targets anterior core, the side plank targets the obliques and lateral hip stabilisers that are almost never loaded in running, cycling, or swimming. This is precisely why those muscles tend to be weak, and why single-leg injuries and IT band problems often originate from lateral instability.',
    tips: [
      'Elbow directly under the shoulder — not in front of it',
      'Stack feet for a harder version, or stagger them for a wider base',
      'Lift the hips completely — no sagging in the middle',
      'Top hip squared forward — it should not rotate toward the floor',
      'Progression: add hip dips, or raise the top leg to increase demand'
    ]
  },
  {
    id: 'hollow-body-hold',
    name: 'Hollow body hold',
    category: 'core',
    muscles: ['Abs', 'Hip flexors', 'Core stability'],
    description: 'A gymnastics staple that trains total-body tension. The lower back must press into the floor while arms and legs are held extended away from it — a demanding anti-extension challenge. The hollow position is central to swimming efficiency (a flat, streamlined body position requires sustained hollow body tension) and is also the foundation of handstands, pull-ups, and gymnastic skills.',
    tips: [
      'Lie on your back and press the lower back firmly into the floor — hold it there',
      'Arms extended overhead, legs extended low at roughly 30–45°',
      'Start with bent knees or raised legs if the lower back lifts off',
      'If you feel the lower back arch, immediately raise the legs higher',
      'Lower back flat is the priority — not legs low; never sacrifice one for the other'
    ]
  },
  {
    id: 'bicycle-crunch',
    name: 'Bicycle crunch',
    category: 'core',
    muscles: ['Abs', 'Obliques', 'Hip flexors'],
    description: 'The most effective crunch variation for the obliques. The combination of trunk rotation and alternating hip flexion recruits more oblique and rectus abdominis fibers than any static crunch. The near-universal mistake is performing it too fast — rapid sloppy reps dramatically reduce oblique activation and shift load to the hip flexors and neck.',
    tips: [
      'Hands lightly behind the ears, elbows wide — never pull on the neck',
      'Rotate from the torso, not the neck or shoulder',
      'Fully extend the opposite leg with each rotation',
      '2 seconds each side — slow is harder and far more effective than fast',
      'Lower back pressed into the floor throughout — if it lifts, slow down further'
    ]
  },
  {
    id: 'dead-bug',
    name: 'Dead bug',
    category: 'core',
    muscles: ['Abs', 'Hip flexors', 'Core stability', 'Lower back'],
    description: 'Trains the core to stabilise the spine while opposite limbs move independently — the precise demand placed on the core during running, swimming, and cycling. The challenge is not the limb movement; it is keeping the lower back pressed against the floor while they move. Most people find this significantly harder than it looks when performed with genuine control.',
    tips: [
      'Lie on your back, arms pointing to the ceiling, knees bent at 90°',
      'Press the lower back firmly into the floor — this is the only cue that matters',
      'Lower opposite arm and leg simultaneously, exhaling as they descend',
      'Never let the lower back lift away from the floor, even slightly',
      'If the back starts to lift, reduce the range of the arm or leg — not the intent'
    ]
  },
  {
    id: 'bird-dog',
    name: 'Bird dog',
    category: 'core',
    muscles: ['Lower back', 'Core stability', 'Glutes'],
    description: 'An anti-rotation exercise from the quadruped (all-fours) position. The challenge is keeping the spine and pelvis completely still while opposite arm and leg are extended — training the deep spinal stabilisers. Used extensively in rehabilitation because it loads the lumbar stabilisers without any compressive or shear force on the spine. The slowness of the movement is the entire point.',
    tips: [
      'Start on hands and knees, wrists under shoulders, knees under hips',
      'Brace the core before moving the limbs — not after',
      'Extend opposite arm and leg slowly, hold for 2–3 sec at full extension',
      'Zero pelvic rotation is the goal — if hips rotate, reduce range of motion',
      'Lower to the floor under control before switching sides; do not swing'
    ]
  },
  {
    id: 'leg-raise',
    name: 'Leg raise',
    category: 'core',
    muscles: ['Abs', 'Hip flexors', 'Quads'],
    description: 'A lower abdominal and hip flexor exercise requiring the lower back to resist extension under load — the same demand as the plank but with the challenge placed at the extremities. The moment the lower back leaves the floor is the limit of effective range; beyond that, the hip flexors are pulling on the lumbar spine rather than the abs stabilising it.',
    tips: [
      'Place hands under the lower back to monitor — if they get compressed, form is correct',
      'Lower legs as far as possible while keeping the lower back in contact with the floor',
      'The point where the back starts to lift is your current working range',
      'Bend the knees to shorten the lever arm and make this more accessible',
      'Lower legs under control — dropping them removes the eccentric stimulus'
    ]
  },
  {
    id: 'glute-bridge-march',
    name: 'Glute bridge with march',
    category: 'core',
    muscles: ['Glutes', 'Abs', 'Hip flexors'],
    description: 'Advances the glute bridge by adding alternating hip flexion while holding the bridge position. The marching knee lifts require the core to resist both pelvic drop and rotation simultaneously — directly replicating the pelvic stability demands of running, where every stride involves a single-leg support phase with the opposite hip in flexion.',
    tips: [
      'Establish a full glute bridge with both feet grounded before marching',
      'Maintain full glute squeeze and level hips throughout — this is the whole challenge',
      'Lift one knee slowly toward the chest; do not rush or swing',
      'Hips staying level is more important than how high the knee rises',
      'If the hips drop significantly on each march, lower the bridge height and rebuild'
    ]
  },
  {
    id: 'plank-to-downward-dog',
    name: 'Plank to downward dog',
    category: 'core',
    muscles: ['Abs', 'Shoulders', 'Hamstrings', 'Lower back'],
    description: 'A flowing movement between plank and downward dog that combines shoulder stability, hip mobility, and core control in a single exercise. The transition from plank (spine neutral, anti-extension) to downward dog (hip flexion, hamstring stretch) demands shoulder stability through a large range of motion — directly relevant to swimmers and anyone building overhead resilience.',
    tips: [
      'From a strong plank, push the hips upward and back into a downward dog',
      'Press heels toward the floor at the top position',
      'Return to plank by lowering the hips without sagging — core engaged throughout',
      'Move deliberately and slowly — this is a mobility and control exercise, not a cardio one',
      'Keep elbows soft (not locked) throughout to protect the joint'
    ]
  },
  {
    id: 'push-up-shoulder-tap',
    name: 'Push-up with shoulder tap',
    category: 'core',
    muscles: ['Chest', 'Shoulders', 'Triceps', 'Core stability'],
    description: 'Adds a demanding anti-rotation core challenge to the standard push-up. After each rep, shifting weight to one hand and tapping the opposite shoulder requires the obliques and deep stabilisers to resist pelvic and spinal rotation under load. The result is a genuine full-body exercise that simultaneously trains pressing strength and rotational core stability.',
    tips: [
      'Complete a full push-up before the tap — do not shortcut the pressing rep',
      'Shift weight slowly before lifting the hand — do not rush or lean',
      'Keep hips completely level during the tap — zero rotation is the entire point',
      'Wider foot stance makes the anti-rotation challenge more manageable',
      'The slower the tap, the greater the core demand — slow always wins'
    ]
  }
];

// ── Favourites ───────────────────────────────────────────────────────

function watchURL(name) {
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(name + ' technique bodyweight');
}

const EX_FAVS_KEY = 'exercise_favorites';
let exFavs = JSON.parse(localStorage.getItem(EX_FAVS_KEY) || '[]');

function isExFav(id) { return exFavs.includes(id); }

function toggleExFav(id) {
  exFavs = isExFav(id) ? exFavs.filter(f => f !== id) : [id, ...exFavs];
  localStorage.setItem(EX_FAVS_KEY, JSON.stringify(exFavs));
  renderExercises();
}

// ── Category tabs ────────────────────────────────────────────────────

let activeCat = 'all';

document.querySelectorAll('.lib-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.lib-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCat = tab.dataset.cat;
    renderExercises();
  });
});

// ── Render ────────────────────────────────────────────────────────────

const list = document.getElementById('exercise-list');

const CAT_LABELS = { lower: 'Lower', upper: 'Upper', core: 'Core' };
const CAT_CLASSES = { lower: 'tag-lower', upper: 'tag-upper', core: 'tag-core' };

const HEART_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
const CHEVRON_SVG = `<svg class="ex-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;

function renderExercises() {
  list.innerHTML = '';

  const filtered = activeCat === 'all'
    ? EXERCISES
    : EXERCISES.filter(e => e.category === activeCat);

  const sorted = [
    ...filtered.filter(e => isExFav(e.id)),
    ...filtered.filter(e => !isExFav(e.id))
  ];

  sorted.forEach(ex => {
    const fav = isExFav(ex.id);
    const card = document.createElement('div');
    card.className = 'lib-card';

    const muscleTags = ex.muscles
      .map(m => `<span class="tag ${CAT_CLASSES[ex.category]}">${m}</span>`)
      .join('');

    const tipItems = ex.tips
      .map(t => `<li>${t}</li>`)
      .join('');

    const catTag = activeCat === 'all'
      ? `<span class="tag ${CAT_CLASSES[ex.category]} lib-cat-tag">${CAT_LABELS[ex.category]}</span>`
      : '';

    card.innerHTML = `
      <div class="lib-card-header">
        <div class="lib-card-info">
          <div class="lib-card-name-row">
            <span class="lib-card-name">${ex.name}</span>
            ${catTag}
          </div>
          <div class="lib-card-muscles">${muscleTags}</div>
        </div>
        <div class="lib-card-actions">
          <button class="heart-btn${fav ? ' active' : ''}" aria-label="${fav ? 'Remove from favourites' : 'Add to favourites'}">
            ${HEART_SVG}
          </button>
          ${CHEVRON_SVG}
        </div>
      </div>
      <div class="lib-card-body">
        <p class="lib-card-desc">${ex.description}</p>
        <div class="lib-card-tips-label">Technique</div>
        <ul class="lib-card-tips">${tipItems}</ul>
        <a href="${watchURL(ex.name)}" target="_blank" class="lib-watch-btn" aria-label="Watch ${ex.name} on YouTube">
          <svg viewBox="0 0 16 16"><path d="M6.5 4.5l5 3.5-5 3.5V4.5z"/><rect width="14" height="14" x="1" y="1" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
          Watch on YouTube
        </a>
      </div>`;

    const header = card.querySelector('.lib-card-header');
    const heartBtn = card.querySelector('.heart-btn');

    header.addEventListener('click', e => {
      if (e.target.closest('.heart-btn')) return;
      card.classList.toggle('expanded');
    });

    heartBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleExFav(ex.id);
    });

    list.appendChild(card);
  });
}

renderExercises();
