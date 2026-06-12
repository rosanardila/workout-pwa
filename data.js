const ROUTINES = [
  {
    id: 1,
    title: "Strength base",
    tag: "Routine 1",
    focus: "Controlled tempo · Foundational strength",
    split: { upper: 22, lower: 44, core: 33 },
    tip: "3 sec down on every exercise. Slow negatives are where most of the muscle stimulus happens.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Inchworm",    note: "Walk hands to plank and back",  sets: "5 reps",      rest: 30,  work: 40,  muscles: [] },
          { name: "Hip circles", note: "Loosen hips and lower back",    sets: "10 each side",rest: 20,  work: 30,  muscles: [] },
          { name: "Arm swings",  note: "Cross-body and overhead",       sets: "20 reps",     rest: 20,  work: 25,  muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Squat",          note: "Feet shoulder-width, chest up, 3 sec down",  sets: "3 × 15",     rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"lower",n:"Hamstrings"}] },
          { name: "Push-up",        note: "Elbows at 45°, 3 sec down",                  sets: "3 × 10–12",  rest: 60, work: 40, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"}] },
          { name: "Glute bridge",   note: "Squeeze at top for 2 sec, lower slowly",     sets: "3 × 12",     rest: 60, work: 40, muscles: [{k:"lower",n:"Glutes"},{k:"lower",n:"Hamstrings"},{k:"core",n:"Lower back"}] },
          { name: "Plank",          note: "Elbows, straight line head to heel",          sets: "3 × 40 sec", rest: 60, work: 40, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Obliques"},{k:"upper",n:"Shoulders"}] },
          { name: "Reverse lunge",  note: "Step back, knee hovers above floor",          sets: "3 × 10 each",rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Core stability"}] },
          { name: "Superman hold",  note: "Prone, lift arms + legs, hold 2 sec",         sets: "3 × 10",     rest: 60, work: 35, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Rear delts"},{k:"core",n:"Lower back"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Pigeon pose",             note: "Deep hip flexor + glute release",  sets: "60 sec each", rest: 10, work: 60, muscles: [] },
          { name: "Chest & shoulder stretch",note: "Hands clasped behind back",        sets: "45 sec",      rest: 10, work: 45, muscles: [] },
          { name: "Spinal twist",            note: "Lying, knees drop side to side",   sets: "30 sec each", rest: 10, work: 30, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Stability & balance",
    tag: "Routine 2",
    focus: "Single-leg work · Great for runners",
    split: { upper: 33, lower: 44, core: 22 },
    tip: "Balance work is harder than it looks. Use a hand on the wall if needed — the goal is good form, not pride.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Leg swings",              note: "Forward/back then side-to-side, hold wall", sets: "10 each direction", rest: 20, work: 30, muscles: [] },
          { name: "World's greatest stretch",note: "Hip flexor + thoracic rotation",             sets: "5 each side",       rest: 20, work: 40, muscles: [] },
          { name: "Cat-cow",                 note: "Slow spinal mobilisation",                   sets: "10 reps",           rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Single-leg glute bridge", note: "One foot raised, drive through heel",     sets: "3 × 10 each leg",  rest: 60, work: 50, muscles: [{k:"lower",n:"Glutes"},{k:"lower",n:"Hamstrings"},{k:"core",n:"Core stability"}] },
          { name: "Table bodyweight row",    note: "Lie under table, pull chest to edge",     sets: "3 × 10–12",        rest: 60, work: 45, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Biceps"},{k:"upper",n:"Rear delts"}] },
          { name: "Bulgarian split squat",   note: "Rear foot on chair, lower slowly",        sets: "3 × 8 each leg",   rest: 60, work: 50, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Hip stabilisers"}] },
          { name: "Side plank",              note: "Stack feet or stagger, lift hip",         sets: "3 × 30 sec each",  rest: 60, work: 30, muscles: [{k:"core",n:"Obliques"},{k:"core",n:"Abs"},{k:"upper",n:"Shoulders"}] },
          { name: "Dead bug",                note: "Opposite arm + leg, slow and controlled", sets: "3 × 8 each side",  rest: 60, work: 40, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"},{k:"core",n:"Core stability"}] },
          { name: "Single-leg calf raise",   note: "Hold wall, full range of motion",         sets: "3 × 12 each leg",  rest: 60, work: 40, muscles: [{k:"lower",n:"Calves"},{k:"lower",n:"Ankle stabilisers"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Standing quad stretch", note: "Hold wall for balance",           sets: "45 sec each", rest: 10, work: 45, muscles: [] },
          { name: "Seated forward fold",   note: "Hamstrings + lower back",         sets: "60 sec",      rest: 10, work: 60, muscles: [] },
          { name: "Thread-the-needle",     note: "Thoracic rotation on all fours",  sets: "30 sec each", rest: 10, work: 30, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Posterior chain",
    tag: "Routine 3",
    focus: "Glutes · Hamstrings · Back",
    split: { upper: 33, lower: 33, core: 33 },
    tip: "Swimmers and runners tend to have strong quads but weaker posterior chains. This routine helps balance that out.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Hip flexor lunge hold", note: "Deep lunge, arms overhead",           sets: "30 sec each side",  rest: 10, work: 30, muscles: [] },
          { name: "Glute activation walk", note: "Mini lateral steps, tension on hips", sets: "20 steps each way", rest: 20, work: 30, muscles: [] },
          { name: "Thoracic rotation",     note: "Seated or kneeling, rotate slowly",   sets: "8 each side",       rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Hip hinge (good morning)",  note: "Hinge at hips, flat back, feel hamstrings",  sets: "3 × 12",        rest: 60, work: 40, muscles: [{k:"lower",n:"Hamstrings"},{k:"lower",n:"Glutes"},{k:"core",n:"Lower back"}] },
          { name: "Table row (underhand)",     note: "Underhand grip targets bicep + back",         sets: "3 × 10–12",     rest: 60, work: 45, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Biceps"},{k:"upper",n:"Lats"}] },
          { name: "Wall sit",                  note: "90° at knees, back flat on wall",             sets: "3 × 45 sec",    rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"lower",n:"Calves"}] },
          { name: "Bird dog",                  note: "Opposite arm + leg, hold 3 sec",              sets: "3 × 8 each side",rest: 60, work: 40, muscles: [{k:"core",n:"Lower back"},{k:"lower",n:"Glutes"},{k:"core",n:"Core stability"}] },
          { name: "Glute bridge with march",   note: "Bridge hold, alternate lifting each knee",    sets: "3 × 10 each",   rest: 60, work: 45, muscles: [{k:"lower",n:"Glutes"},{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"}] },
          { name: "Push-up with shoulder tap", note: "After each rep, tap opposite shoulder",       sets: "3 × 8",         rest: 60, work: 40, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"core",n:"Core stability"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Child's pose",           note: "Reach arms forward, breathe deeply",  sets: "60 sec",      rest: 10, work: 60, muscles: [] },
          { name: "Figure-4 stretch",       note: "Cross ankle over knee, flex foot",     sets: "45 sec each", rest: 10, work: 45, muscles: [] },
          { name: "Chest doorframe stretch",note: "One arm on doorframe, rotate away",    sets: "30 sec each", rest: 10, work: 30, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Endurance circuit",
    tag: "Routine 4",
    focus: "Lower rest · Higher reps · Muscular endurance",
    split: { upper: 33, lower: 33, core: 33 },
    tip: "Rest only 30 sec between exercises. If something feels too easy, slow the tempo right down rather than adding reps.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "March in place",      note: "High knees, relaxed shoulders",   sets: "60 sec",        rest: 10, work: 60, muscles: [] },
          { name: "Dynamic hip circles", note: "Standing, big slow circles",       sets: "10 each side",  rest: 20, work: 30, muscles: [] },
          { name: "Inchworm + push-up",  note: "Walk out, one push-up, walk back", sets: "5 reps",        rest: 20, work: 40, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Squat + calf raise",         note: "Stand up from squat, rise onto toes",     sets: "3 × 15",           rest: 30, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"lower",n:"Calves"}] },
          { name: "Push-up",                    note: "Standard, controlled pace",                sets: "3 × 12",           rest: 30, work: 35, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"}] },
          { name: "Reverse lunge + knee drive", note: "Step back, drive knee up on return",       sets: "3 × 10 each",      rest: 30, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Hip flexors"}] },
          { name: "Plank to downward dog",      note: "From plank, push hips up and back",        sets: "3 × 10",           rest: 30, work: 40, muscles: [{k:"core",n:"Abs"},{k:"upper",n:"Shoulders"},{k:"lower",n:"Hamstrings"}] },
          { name: "Bicycle crunch",             note: "Slow and deliberate, no neck strain",      sets: "3 × 14 each side", rest: 30, work: 45, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Obliques"},{k:"core",n:"Hip flexors"}] },
          { name: "Tricep dip",                 note: "Hands on chair edge, elbows track back",   sets: "3 × 12",           rest: 30, work: 35, muscles: [{k:"upper",n:"Triceps"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Chest"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Lying hamstring stretch",  note: "Loop a towel around foot if needed",   sets: "45 sec each",     rest: 10, work: 45, muscles: [] },
          { name: "Neck rolls",               note: "Slow, release tension from effort",     sets: "5 each direction",rest: 10, work: 30, muscles: [] },
          { name: "Diaphragmatic breathing",  note: "4 sec in, 6 sec out, hand on belly",    sets: "6 breaths",       rest: 10, work: 40, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Lower body",
    tag: "Routine 5",
    focus: "Quads · Glutes · Hamstrings · Calves",
    split: { upper: 8, lower: 76, core: 16 },
    tip: "Drive through your heels on every pushing movement. For split squats, front knee tracks over your second toe — never caving inward.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Leg swings",       note: "Forward/back then side-to-side, hold wall for balance", sets: "10 each direction", rest: 20, work: 30, muscles: [] },
          { name: "Bodyweight squat", note: "Slow and controlled, focus on depth",                   sets: "10 reps",           rest: 20, work: 40, muscles: [] },
          { name: "Hip circles",      note: "Standing, big deliberate circles each direction",        sets: "8 each side",       rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Bulgarian split squat",          note: "Rear foot on chair, lower until front thigh is parallel", sets: "3 × 10 each leg",  rest: 75, work: 50, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Hip stabilisers"}] },
          { name: "Romanian deadlift (bodyweight)", note: "Hinge at hips, soft knee, feel the hamstring stretch",    sets: "3 × 12",           rest: 60, work: 40, muscles: [{k:"lower",n:"Hamstrings"},{k:"lower",n:"Glutes"},{k:"core",n:"Lower back"}] },
          { name: "Sumo squat",                     note: "Wide stance, toes out 45°, sit deep",                     sets: "3 × 15",           rest: 60, work: 45, muscles: [{k:"lower",n:"Inner thighs"},{k:"lower",n:"Glutes"},{k:"lower",n:"Quads"}] },
          { name: "Reverse lunge",                  note: "Step back, lower slowly, drive through front heel",       sets: "3 × 12 each leg",  rest: 60, work: 50, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Core stability"}] },
          { name: "Wall sit",                       note: "90° at knees, back flat, arms at sides",                  sets: "3 × 45 sec",       rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"lower",n:"Calves"}] },
          { name: "Single-leg calf raise",          note: "Full range of motion, 3 sec lowering, hold wall",         sets: "3 × 15 each leg",  rest: 45, work: 40, muscles: [{k:"lower",n:"Calves"},{k:"lower",n:"Ankle stabilisers"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Standing quad stretch", note: "Hold wall for balance, pull heel to glute", sets: "45 sec each", rest: 10, work: 45, muscles: [] },
          { name: "Pigeon pose",           note: "Deep glute and hip flexor release",          sets: "60 sec each", rest: 10, work: 60, muscles: [] },
          { name: "Seated forward fold",   note: "Legs straight, hinge from hips, spine long", sets: "60 sec",      rest: 10, work: 60, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Upper body",
    tag: "Routine 6",
    focus: "Chest · Back · Shoulders · Arms",
    split: { upper: 76, lower: 8, core: 16 },
    tip: "Elbow position defines the exercise: wide elbows for chest, narrow for triceps, forward for shoulders. Follow the elbow, not the rep count.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Arm circles",       note: "Small to large, forward and backward",      sets: "20 reps each direction", rest: 15, work: 30, muscles: [] },
          { name: "Shoulder rolls",    note: "Slow and deliberate, full range",             sets: "10 reps",                rest: 15, work: 20, muscles: [] },
          { name: "Thoracic rotation", note: "Seated, hands behind head, rotate slowly",   sets: "8 each side",            rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Wide push-up",        note: "Hands wider than shoulders, chest to floor",              sets: "3 × 10–12", rest: 60, work: 40, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"}] },
          { name: "Table bodyweight row",note: "Lie under table, pull chest to edge, hold 1 sec at top", sets: "3 × 10–12", rest: 60, work: 45, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Biceps"},{k:"upper",n:"Rear delts"}] },
          { name: "Diamond push-up",     note: "Hands together under chest, elbows track straight back", sets: "3 × 8",     rest: 60, work: 35, muscles: [{k:"upper",n:"Triceps"},{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"}] },
          { name: "Pike push-up",        note: "Hips high, lower head toward floor between hands",       sets: "3 × 8–10",  rest: 60, work: 35, muscles: [{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"},{k:"upper",n:"Upper back"}] },
          { name: "Superman hold",       note: "Prone, lift arms and legs, hold 3 sec at top",           sets: "3 × 10",    rest: 60, work: 35, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Rear delts"},{k:"core",n:"Lower back"}] },
          { name: "Tricep dip",          note: "Hands on chair edge, elbows track straight back",        sets: "3 × 12",    rest: 60, work: 35, muscles: [{k:"upper",n:"Triceps"},{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Chest doorframe stretch",   note: "One arm on doorframe at 90°, rotate body away",   sets: "30 sec each", rest: 10, work: 30, muscles: [] },
          { name: "Cross-body shoulder stretch",note: "Pull arm across chest, hold at elbow",            sets: "30 sec each", rest: 10, work: 30, muscles: [] },
          { name: "Chest & shoulder stretch",  note: "Hands clasped behind back, lift arms, open chest", sets: "45 sec",      rest: 10, work: 45, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Core",
    tag: "Routine 7",
    focus: "Abs · Obliques · Lower back",
    split: { upper: 8, lower: 8, core: 84 },
    tip: "If you feel your lower back arching or your neck pulling, you've exceeded your range — reduce range of motion before reducing reps. Core work is about control, not speed.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Cat-cow",          note: "Slow, breathe into each position",              sets: "10 reps",      rest: 15, work: 30, muscles: [] },
          { name: "Dead bug hold",    note: "Flatten lower back to floor, hold the brace",   sets: "10 sec × 3",   rest: 15, work: 30, muscles: [] },
          { name: "Knee-to-chest",    note: "Lying, alternate drawing each knee in slowly",  sets: "10 each side", rest: 15, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Plank",           note: "Elbows under shoulders, squeeze everything",                    sets: "3 × 45 sec",       rest: 60, work: 45, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Obliques"},{k:"upper",n:"Shoulders"}] },
          { name: "Bicycle crunch",  note: "Slow and deliberate, full twist, no neck strain",               sets: "3 × 15 each side", rest: 60, work: 45, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Obliques"},{k:"core",n:"Hip flexors"}] },
          { name: "Hollow body hold",note: "Lower back pressed flat, arms and legs low but not touching",   sets: "3 × 30 sec",       rest: 60, work: 30, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"},{k:"core",n:"Core stability"}] },
          { name: "Side plank",      note: "Stack or stagger feet, lift hip fully",                         sets: "3 × 30 sec each",  rest: 60, work: 30, muscles: [{k:"core",n:"Obliques"},{k:"core",n:"Abs"},{k:"upper",n:"Shoulders"}] },
          { name: "Leg raise",       note: "Hands under lower back, lower legs slowly — don't arch",        sets: "3 × 12",           rest: 60, work: 35, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"},{k:"lower",n:"Quads"}] },
          { name: "Bird dog",        note: "Opposite arm + leg, hold 3 sec, zero hip rotation",             sets: "3 × 10 each side", rest: 60, work: 40, muscles: [{k:"core",n:"Lower back"},{k:"core",n:"Core stability"},{k:"lower",n:"Glutes"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Child's pose",    note: "Arms forward, breathe into lower back",        sets: "60 sec",      rest: 10, work: 60, muscles: [] },
          { name: "Spinal twist",    note: "Lying, knees drop side to side, arms out",     sets: "30 sec each", rest: 10, work: 30, muscles: [] },
          { name: "Cobra stretch",   note: "Hips down, arms push chest up, look forward",  sets: "30 sec",      rest: 10, work: 30, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Flexibility & mobility",
    tag: "Routine 8",
    focus: "Full-body range of motion",
    split: { upper: 28, lower: 42, core: 30 },
    tip: "Stretch to tension, not pain. Breathe into each position and let gravity do the work — forcing a stretch creates tightness, not flexibility.",
    phases: [
      {
        label: "Activation", duration: "5 min",
        exercises: [
          { name: "Neck rolls",    note: "Slow half-circles, ear to shoulder — never full circles", sets: "5 each direction", rest: 10, work: 30, muscles: [] },
          { name: "Cat-cow",       note: "Flowing spinal wave, 4 sec each way",                     sets: "8 reps",           rest: 10, work: 30, muscles: [] },
          { name: "Hip circles",   note: "Hands on hips, big controlled circles",                   sets: "8 each direction", rest: 10, work: 30, muscles: [] },
        ]
      },
      {
        label: "Mobility work", duration: "20 min",
        exercises: [
          { name: "World's greatest stretch", note: "Lunge + thoracic rotation + reach, slow and full",            sets: "5 each side",  rest: 15, work: 50, muscles: [{k:"lower",n:"Hip flexors"},{k:"lower",n:"Hamstrings"},{k:"upper",n:"Thoracic spine"}] },
          { name: "Pigeon pose",              note: "Sit in it, don't rush — breathe into the glute",              sets: "90 sec each",  rest: 15, work: 90, muscles: [{k:"lower",n:"Glutes"},{k:"lower",n:"Hip flexors"},{k:"core",n:"Hip stabilisers"}] },
          { name: "Deep squat hold",          note: "Feet shoulder-width, heels down, use a wall if needed",       sets: "3 × 30 sec",   rest: 30, work: 30, muscles: [{k:"lower",n:"Hips"},{k:"lower",n:"Ankles"},{k:"lower",n:"Quads"}] },
          { name: "Thread-the-needle",        note: "On all fours, thread arm through and hold, both sides",       sets: "45 sec each",  rest: 15, work: 45, muscles: [{k:"upper",n:"Thoracic spine"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Upper back"}] },
          { name: "Seated forward fold",      note: "Legs straight, hinge from hips — spine stays long",           sets: "60 sec",       rest: 15, work: 60, muscles: [{k:"lower",n:"Hamstrings"},{k:"core",n:"Lower back"}] },
          { name: "Figure-4 stretch",         note: "Cross ankle over knee, draw thigh toward chest",              sets: "60 sec each",  rest: 15, work: 60, muscles: [{k:"lower",n:"Glutes"},{k:"lower",n:"Hip rotators"},{k:"lower",n:"IT band"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Supine spinal twist",     note: "Both shoulders stay on floor, breathe out to deepen",  sets: "60 sec each", rest: 10, work: 60, muscles: [] },
          { name: "Chest opener",            note: "Lying on back, arms out in T, let chest open to floor", sets: "60 sec",      rest: 10, work: 60, muscles: [] },
          { name: "Diaphragmatic breathing", note: "4 sec in, 6 sec out — scan for residual tension",       sets: "8 breaths",   rest: 10, work: 50, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Strength + calves",
    tag: "Routine 9",
    focus: "Structural strength · Calf endurance · Core control",
    split: { upper: 35, lower: 45, core: 20 },
    tip: "Calf raises done slowly are twice the work — 3 seconds down, pause at the bottom, full extension at the top. Skip the bounce.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Inchworm",    note: "Walk hands to plank and back",  sets: "5 reps",       rest: 30, work: 40, muscles: [] },
          { name: "Hip circles", note: "Loosen hips and lower back",    sets: "10 each side", rest: 20, work: 30, muscles: [] },
          { name: "Arm swings",  note: "Cross-body and overhead",       sets: "20 reps",      rest: 20, work: 25, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Squat",                  note: "3 sec down, focus on depth",               sets: "3 × 15",           rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"}] },
          { name: "Push-up",                note: "Elbows at 45°, controlled tempo",           sets: "3 × 10–12",        rest: 60, work: 40, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"}] },
          { name: "Table bodyweight row",   note: "Overhand grip, chest to edge",              sets: "3 × 10",           rest: 60, work: 45, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Biceps"}] },
          { name: "Single-leg calf raise",  note: "Slow and full range of motion, hold wall",  sets: "3 × 12 each leg",  rest: 45, work: 40, muscles: [{k:"lower",n:"Calves"},{k:"lower",n:"Ankle stabilisers"}] },
          { name: "Plank",                  note: "Elbows under shoulders, squeeze everything", sets: "3 × 45 sec",       rest: 60, work: 45, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Obliques"},{k:"upper",n:"Shoulders"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Pigeon pose",              note: "Deep hip flexor + glute release",  sets: "60 sec each", rest: 10, work: 60, muscles: [] },
          { name: "Chest & shoulder stretch", note: "Hands clasped behind back",        sets: "45 sec",      rest: 10, work: 45, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Runner's armor",
    tag: "Routine 10",
    focus: "Single-leg stability · Achilles strength · Joint protection",
    split: { upper: 30, lower: 45, core: 25 },
    tip: "Deficit calf raises need a step or thick book — the extra depth loads the Achilles through its full range. Ease in gently the first session.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Leg swings",               note: "Forward/back and side-to-side, hold wall",  sets: "10 each direction", rest: 20, work: 30, muscles: [] },
          { name: "World's greatest stretch",  note: "Hip flexor + thoracic rotation",             sets: "5 each side",       rest: 20, work: 40, muscles: [] },
          { name: "Cat-cow",                   note: "Slow spinal mobilisation",                   sets: "10 reps",           rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Bulgarian split squat",  note: "Rear foot on chair, lower slowly",                sets: "3 × 8 each leg",  rest: 75, work: 50, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Hip stabilisers"}] },
          { name: "Table row (underhand)",  note: "Targets lats and back pulling power",              sets: "3 × 10–12",       rest: 60, work: 45, muscles: [{k:"upper",n:"Lats"},{k:"upper",n:"Biceps"},{k:"upper",n:"Upper back"}] },
          { name: "Pike push-up",           note: "Hips high, lower head toward floor between hands", sets: "3 × 8",           rest: 60, work: 35, muscles: [{k:"upper",n:"Shoulders"},{k:"upper",n:"Triceps"}] },
          { name: "Deficit calf raise",     note: "Step or thick book, heels drop below the edge",    sets: "3 × 15",          rest: 45, work: 40, muscles: [{k:"lower",n:"Calves"},{k:"lower",n:"Achilles"},{k:"lower",n:"Ankle stabilisers"}] },
          { name: "Dead bug",               note: "Lower back glued flat to floor, opposite arm + leg", sets: "3 × 8 each side", rest: 60, work: 40, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"},{k:"core",n:"Core stability"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Standing quad stretch", note: "Hold wall for balance",    sets: "45 sec each", rest: 10, work: 45, muscles: [] },
          { name: "Seated forward fold",   note: "Hamstrings + lower back",  sets: "60 sec",      rest: 10, work: 60, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Posterior + soleus",
    tag: "Routine 11",
    focus: "Hamstrings · Glutes · Deep calf (soleus)",
    split: { upper: 15, lower: 60, core: 25 },
    tip: "Seated calf raises target the soleus (the deep muscle under the gastrocnemius) — place a heavy object on your thighs for resistance. Both calf heads matter for preventing injuries.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "Hip flexor lunge hold", note: "Deep lunge, arms overhead",           sets: "30 sec each side",  rest: 10, work: 30, muscles: [] },
          { name: "Glute activation walk", note: "Mini lateral steps, tension on hips", sets: "20 steps each way", rest: 20, work: 30, muscles: [] },
          { name: "Thoracic rotation",     note: "Seated or kneeling, rotate slowly",   sets: "8 each side",       rest: 20, work: 30, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Hip hinge (good morning)",   note: "Flat back, hinge at hips, feel the hamstrings",            sets: "3 × 12",           rest: 60, work: 40, muscles: [{k:"lower",n:"Hamstrings"},{k:"lower",n:"Glutes"},{k:"core",n:"Lower back"}] },
          { name: "Single-leg glute bridge",    note: "One foot raised, drive through heel at top",               sets: "3 × 10 each leg",  rest: 60, work: 50, muscles: [{k:"lower",n:"Glutes"},{k:"lower",n:"Hamstrings"},{k:"core",n:"Core stability"}] },
          { name: "Push-up with shoulder tap",  note: "Tap opposite shoulder after each rep",                     sets: "3 × 8",            rest: 60, work: 40, muscles: [{k:"upper",n:"Chest"},{k:"upper",n:"Shoulders"},{k:"core",n:"Core stability"}] },
          { name: "Seated calf raise",          note: "Sit on chair, heavy object on thighs for resistance",      sets: "3 × 20",           rest: 45, work: 45, muscles: [{k:"lower",n:"Soleus"},{k:"lower",n:"Calves"}] },
          { name: "Side plank",                 note: "Stack feet or stagger, lift hips high throughout",         sets: "3 × 30 sec each",  rest: 60, work: 30, muscles: [{k:"core",n:"Obliques"},{k:"core",n:"Abs"},{k:"upper",n:"Shoulders"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Child's pose",     note: "Reach arms forward, breathe deeply",  sets: "60 sec",      rest: 10, work: 60, muscles: [] },
          { name: "Figure-4 stretch", note: "Cross ankle over knee, flex foot",     sets: "45 sec each", rest: 10, work: 45, muscles: [] },
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Control & coordination",
    tag: "Routine 12",
    focus: "Multi-directional movement · Anti-extension core",
    split: { upper: 30, lower: 45, core: 25 },
    tip: "Hollow body hold is a non-negotiable swimmer's drill. If your lower back leaves the floor, bend your knees slightly — never let the arch happen.",
    phases: [
      {
        label: "Warm-up", duration: "5 min",
        exercises: [
          { name: "March in place",      note: "High knees, relaxed shoulders",    sets: "60 sec",       rest: 10, work: 60, muscles: [] },
          { name: "Dynamic hip circles", note: "Standing, big slow circles",        sets: "10 each side", rest: 20, work: 30, muscles: [] },
          { name: "Inchworm + push-up",  note: "Walk out, one push-up, walk back",  sets: "5 reps",       rest: 20, work: 40, muscles: [] },
        ]
      },
      {
        label: "Main work", duration: "20 min",
        exercises: [
          { name: "Reverse lunge",      note: "Step back, knee hovers just above floor",             sets: "3 × 10 each leg", rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"core",n:"Core stability"}] },
          { name: "Superman hold",      note: "Prone, hold at top for 3 seconds, squeeze glutes",   sets: "3 × 10",          rest: 60, work: 35, muscles: [{k:"upper",n:"Upper back"},{k:"upper",n:"Rear delts"},{k:"core",n:"Lower back"}] },
          { name: "Tricep dip",         note: "Hands on chair edge, elbows track straight back",    sets: "3 × 12",          rest: 60, work: 35, muscles: [{k:"upper",n:"Triceps"},{k:"upper",n:"Shoulders"},{k:"upper",n:"Chest"}] },
          { name: "Squat + calf raise", note: "Stand up from squat, rise onto toes, squeeze calves", sets: "3 × 12",          rest: 60, work: 45, muscles: [{k:"lower",n:"Quads"},{k:"lower",n:"Glutes"},{k:"lower",n:"Calves"}] },
          { name: "Hollow body hold",   note: "Lower back flat, arms and legs low but not touching", sets: "3 × 30 sec",      rest: 60, work: 30, muscles: [{k:"core",n:"Abs"},{k:"core",n:"Hip flexors"},{k:"core",n:"Core stability"}] },
        ]
      },
      {
        label: "Cool-down", duration: "5 min",
        exercises: [
          { name: "Lying hamstring stretch", note: "Loop a towel around foot if needed",  sets: "45 sec each", rest: 10, work: 45, muscles: [] },
          { name: "Supine spinal twist",     note: "Both shoulders on floor, breathe out to deepen", sets: "60 sec each", rest: 10, work: 60, muscles: [] },
        ]
      }
    ]
  }
];
