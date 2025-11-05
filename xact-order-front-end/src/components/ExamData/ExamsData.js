const ExamsData = [
  // ABDOMEN
  { id: 1, 
    procedure: "ABDOMEN 2 VIEW", 
    anatomy: "ABDOMEN", 
    views: "UPRIGHT, KUB", 
    alias: ["abdomen", "kub", "upright", "Abdomen"], 
    region: "ABDOMEN", 
    common: false, 
    shortcut: false 
  },

  { id: 2, procedure: "ABDOMEN ACUTE", anatomy: "ABDOMEN", views: "UPRIGHT, KUB, CHEST", alias: ["abdomen", "acute", "kub", "chest", "Abdomen"], region: "ABDOMEN", common: false, shortcut: false },
  { id: 3, procedure: "ABDOMEN DECUBITUS", anatomy: "ABDOMEN", views: "LEFT LATERAL DECUBITUS", alias: ["abdomen", "decub", "lld", "Abdomen"], region: "ABDOMEN", common: false, shortcut: false },
  { id: 4, procedure: "ABDOMEN UPRIGHT", anatomy: "ABDOMEN", views: "UPRIGHT", alias: ["abdomen", "upright", "Abdomen"], region: "ABDOMEN", common: false, shortcut: false },
  { id: 5, procedure: "ABDOMEN, KUB PORTABLE", anatomy: "ABDOMEN", views: "AP (PORTABLE)", alias: ["abdomen", "kub", "portable", "Abdomen"], region: "ABDOMEN", common: false, shortcut: false },
  { id: 6, procedure: "ABDOMEN KUB, FLAT PLATE", anatomy: "ABDOMEN", views: "AP (SUPINE)", alias: ["abdomen", "kub", "flat plate", "supine", "Abdomen"], region: "ABDOMEN", common: false, shortcut: false },

  // ANKLE
  { id: 7, procedure: "ANKLE LEFT 2 VIEW", anatomy: "ANKLE", views: "AP, LATERAL", alias: ["ankle", "left", "lt", "l ankle", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 8, procedure: "ANKLE LEFT 3 VIEW", anatomy: "ANKLE", views: "AP, OBLIQUE, LATERAL", alias: ["ankle", "left", "lt", "l ankle", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 9, procedure: "ANKLE RIGHT 2 VIEW", anatomy: "ANKLE", views: "AP, LATERAL", alias: ["ankle", "right", "rt", "r ankle", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 10, procedure: "ANKLE RIGHT 3 VIEW", anatomy: "ANKLE", views: "AP, OBLIQUE, LATERAL", alias: ["ankle", "right", "rt", "r ankle", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: true, shortcut: false },

  // HIPS/PELVIS
  { id: 11, procedure: "AP HIPS", anatomy: "HIPS", views: "AP BILATERAL", alias: ["hips", "bilateral", "Pelvis/Hips"], region: "PELVIS", common: false, shortcut: false },

  // CERVICAL
  { id: 12, procedure: "CERVICAL ONE VIEW", anatomy: "CERVICAL SPINE", views: "LATERAL", alias: ["c-spine", "cervical", "lat csp", "Cervical Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 13, procedure: "CERVICAL SPINE", anatomy: "CERVICAL SPINE", views: "AP, LATERAL, ODONTOID", alias: ["c-spine", "cervical", "Cervical Spine"], region: "SPINE", common: true, shortcut: false },
  { id: 14, procedure: "CERVICAL-5 VIEW", anatomy: "CERVICAL SPINE", views: "AP, LATERAL, OBLIQUES, ODONTOID", alias: ["c-spine", "cervical", "5 view", "Cervical Spine"], region: "SPINE", common: false, shortcut: false },

  // CHEST
  { id: 15, procedure: "CHEST 2 VIEW FNRT-LAT W/APICAL LORDOTIC", anatomy: "CHEST", views: "PA, LATERAL, APICAL LORDOTIC", alias: ["chest", "pa", "lat", "lordotic", "Chest"], region: "CHEST", common: false, shortcut: false },
  { id: 16, procedure: "CHEST DECUBITUS", anatomy: "CHEST", views: "LEFT/RIGHT LATERAL DECUBITUS", alias: ["chest", "decub", "Chest"], region: "CHEST", common: false, shortcut: false },
  { id: 17, procedure: "CHEST EMPLOYEE", anatomy: "CHEST", views: "PA OR AP", alias: ["chest", "employee", "screening", "Chest"], region: "CHEST", common: false, shortcut: false },
  { id: 18, procedure: "CHEST PA AND LAT 2 VIEW", anatomy: "CHEST", views: "PA, LATERAL", alias: ["chest", "pa lat", "2 view", "Chest"], region: "CHEST", common: false, shortcut: false },
  { id: 19, procedure: "CHEST PORTABLE", anatomy: "CHEST", views: "AP (PORTABLE)", alias: ["chest", "portable", "ap", "Chest"], region: "CHEST", common: true, shortcut: false },
  { id: 20, procedure: "CHEST-1 VIEW", anatomy: "CHEST", views: "PA OR AP", alias: ["chest", "single view", "Chest"], region: "CHEST", common: false, shortcut: false },

  // CALCANEUS
  { id: 21, procedure: "CALCANEUS LEFT 2 VIEW", anatomy: "CALCANEUS", views: "AXIAL, LATERAL", alias: ["calc", "heel", "left", "lt", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 22, procedure: "CALCANEUS RIGHT 2 VIEW", anatomy: "CALCANEUS", views: "AXIAL, LATERAL", alias: ["calc", "heel", "right", "rt", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },

  // CLAVICLE
  { id: 23, procedure: "CLAVICLE LEFT 2 VIEW", anatomy: "CLAVICLE", views: "AP, AXIAL", alias: ["clavicle", "collarbone", "left", "lt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 24, procedure: "CLAVICLE RIGHT 2 VIEW", anatomy: "CLAVICLE", views: "AP, AXIAL", alias: ["clavicle", "collarbone", "right", "rt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: false, shortcut: false },

  // ELBOW
  { id: 25, procedure: "ELBOW 2 VIEW LEFT", anatomy: "ELBOW", views: "AP, LATERAL", alias: ["elbow", "left", "lt", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 26, procedure: "ELBOW 2 VIEW RIGHT", anatomy: "ELBOW", views: "AP, LATERAL", alias: ["elbow", "right", "rt", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 27, procedure: "ELBOW LEFT 3V OR MORE", anatomy: "ELBOW", views: "AP, OBLIQUE, LATERAL (+/- ADD'L)", alias: ["elbow", "left", "lt", "3v", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 28, procedure: "ELBOW RIGHT 3V OR MORE", anatomy: "ELBOW", views: "AP, OBLIQUE, LATERAL (+/- ADD'L)", alias: ["elbow", "right", "rt", "3v", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: true, shortcut: false },

  // FEMUR
  { id: 29, procedure: "FEMUR LEFT AP/LATERAL", anatomy: "FEMUR", views: "AP, LATERAL", alias: ["femur", "left", "lt", "Femur"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 30, procedure: "FEMUR RIGHT AP/LATERAL", anatomy: "FEMUR", views: "AP, LATERAL", alias: ["femur", "right", "rt", "Femur"], region: "LOWER EXTREMITY", common: true, shortcut: false },

  // FINGERS (LEFT)
  { id: 31, procedure: "FINGER L DIGIT 1-THUMB", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "thumb", "left", "lt", "digit 1", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 32, procedure: "FINGER L DIGIT 3", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "left", "lt", "digit 3", "middle finger", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 33, procedure: "FINGER L DIGIT 4", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "left", "lt", "digit 4", "ring finger", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 34, procedure: "FINGER L DIGIT 5", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "left", "lt", "digit 5", "pinky", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },

  // FINGERS (RIGHT)
  { id: 35, procedure: "FINGER R DIGIT 1-THUMB", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "thumb", "right", "rt", "digit 1", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 36, procedure: "FINGER R DIGIT 2", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "right", "rt", "digit 2", "index", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 37, procedure: "FINGER R DIGIT 3", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "right", "rt", "digit 3", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 38, procedure: "FINGER R DIGIT 4", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "right", "rt", "digit 4", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 39, procedure: "FINGER R DIGIT 5", anatomy: "FINGER", views: "AP, OBLIQUE, LATERAL", alias: ["finger", "right", "rt", "digit 5", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },

  // FEET
  { id: 40, procedure: "FOOT AP BI LATERAL", anatomy: "FEET", views: "AP BILATERAL", alias: ["feet", "bilateral", "both", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 41, procedure: "FOOT LEFT 2V", anatomy: "FOOT", views: "AP, LATERAL", alias: ["foot", "left", "lt", "2v", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 42, procedure: "FOOT LEFT 3V", anatomy: "FOOT", views: "AP, OBLIQUE, LATERAL", alias: ["foot", "left", "lt", "3v", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 43, procedure: "FOOT RIGHT 2V", anatomy: "FOOT", views: "AP, LATERAL", alias: ["foot", "right", "rt", "2v", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 44, procedure: "FOOT RIGHT 3V", anatomy: "FOOT", views: "AP, OBLIQUE, LATERAL", alias: ["foot", "right", "rt", "3v", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },

  // FOREARM
  { id: 45, procedure: "FOREARM LEFT 2 VIEWS OR MORE", anatomy: "FOREARM", views: "AP, LATERAL (+/- ADD'L)", alias: ["forearm", "left", "lt", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 46, procedure: "FOREARM RIGHT 2 VIEWS OF MORE", anatomy: "FOREARM", views: "AP, LATERAL (+/- ADD'L)", alias: ["forearm", "right", "rt", "Elbow/Forearm"], region: "UPPER EXTREMITY", common: true, shortcut: false },

  // HANDS
  { id: 47, procedure: "HAND LEFT 2V", anatomy: "HAND", views: "PA, LATERAL", alias: ["hand", "left", "lt", "2v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 48, procedure: "HAND LEFT 3V OR MORE", anatomy: "HAND", views: "PA, OBLIQUE, LATERAL (+/- ADD'L)", alias: ["hand", "left", "lt", "3v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 49, procedure: "HAND RIGHT 2V", anatomy: "HAND", views: "PA, LATERAL", alias: ["hand", "right", "rt", "2v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 50, procedure: "HAND RIGHT 3V OR MORE", anatomy: "HAND", views: "PA, OBLIQUE, LATERAL (+/- ADD'L)", alias: ["hand", "right", "rt", "3v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 51, procedure: "HANDS AP BI LATERAL", anatomy: "HANDS", views: "PA BILATERAL", alias: ["hands", "bilateral", "both", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },

  // HIPS
  { id: 52, procedure: "HIP LEFT 2V OR MORE", anatomy: "HIP", views: "AP, LATERAL (+/- PELVIS)", alias: ["hip", "left", "lt", "2v", "Pelvis/Hips"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 53, procedure: "HIP RIGHT 2V OR MORE", anatomy: "HIP", views: "AP, LATERAL (+/- PELVIS)", alias: ["hip", "right", "rt", "2v", "Pelvis/Hips"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 54, procedure: "HIPS BILAT W/ AP PELVIS", anatomy: "HIPS", views: "AP PELVIS + AP BOTH HIPS", alias: ["hips", "bilateral", "ap pelvis", "Pelvis/Hips"], region: "PELVIS", common: false, shortcut: false },

  // HUMERUS
  { id: 55, procedure: "HUMERUS LEFT 2V OR MORE", anatomy: "HUMERUS", views: "AP, LATERAL (+/- ADD'L)", alias: ["humerus", "left", "lt", "Humerus"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 56, procedure: "HUMERUS RIGHT 2V OR MORE", anatomy: "HUMERUS", views: "AP, LATERAL (+/- ADD'L)", alias: ["humerus", "right", "rt", "Humerus"], region: "UPPER EXTREMITY", common: true, shortcut: false },

  // KNEE
  { id: 57, procedure: "KNEE PATELLA LEFT 3 VIEW", anatomy: "KNEE", views: "AP, LATERAL, SUNRISE", alias: ["knee", "patella", "left", "lt", "sunrise", "Knee"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 58, procedure: "KNEE PATELLA RIGHT 3 VIEW", anatomy: "KNEE", views: "AP, LATERAL, SUNRISE", alias: ["knee", "patella", "right", "rt", "sunrise", "Knee"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 59, procedure: "KNEE-2 VIEW LEFT", anatomy: "KNEE", views: "AP, LATERAL", alias: ["knee", "left", "lt", "2v", "Knee"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 60, procedure: "KNEE-2 VIEW RIGHT", anatomy: "KNEE", views: "AP, LATERAL", alias: ["knee", "right", "rt", "2v", "Knee"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 61, procedure: "KNEE-3 VIEW LEFT", anatomy: "KNEE", views: "AP, OBLIQUE, LATERAL", alias: ["knee", "left", "lt", "3v", "Knee"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 62, procedure: "KNEE-3 VIEW RIGHT", anatomy: "KNEE", views: "AP, OBLIQUE, LATERAL", alias: ["knee", "right", "rt", "3v", "Knee"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 63, procedure: "KNEE-4 VIEW LEFT", anatomy: "KNEE", views: "AP, LATERAL, TUNNEL, SUNRISE", alias: ["knee", "left", "lt", "4v", "tunnel", "sunrise", "Knee"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 64, procedure: "KNEE-4 VIEW RIGHT", anatomy: "KNEE", views: "AP, LATERAL, TUNNEL, SUNRISE", alias: ["knee", "right", "rt", "4v", "tunnel", "sunrise", "Knee"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 65, procedure: "STANDING KNEES", anatomy: "KNEES", views: "AP STANDING BILATERAL", alias: ["knees", "weightbearing", "standing"], region: "LOWER EXTREMITY", common: false, shortcut: false },

  // LUMBAR
  { id: 66, procedure: "LUMBAR 5 VIEW", anatomy: "LUMBAR SPINE", views: "AP, OBLIQUES, LATERAL, SPOT", alias: ["lumbar", "l-spine", "5 view", "Lumbar Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 67, procedure: "LUMBAR COMPLETE FLEX-EXT", anatomy: "LUMBAR SPINE", views: "LATERAL FLEXION, LATERAL EXTENSION", alias: ["lumbar", "flex ext", "l-spine", "Lumbar Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 68, procedure: "LUMBAR ONE VIEW", anatomy: "LUMBAR SPINE", views: "LATERAL", alias: ["lumbar", "l-spine", "single view", "Lumbar Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 69, procedure: "LUMBAR SPINE", anatomy: "LUMBAR SPINE", views: "AP, LATERAL, SPOT", alias: ["lumbar", "l-spine", "Lumbar Spine"], region: "SPINE", common: true, shortcut: false },

  // HEAD / ENT
  { id: 70, procedure: "MANDIBLE COMP 4 VIEW", anatomy: "MANDIBLE", views: "PA, OBLIQUES, TOWNE", alias: ["mandible", "jaw", "4 view", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 71, procedure: "MASTOIDS COMP 4 VIEW", anatomy: "MASTOIDS", views: "TOWNES, LAW, STENVER, LATERAL", alias: ["mastoid", "temporal bone", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 72, procedure: "NASAL BONES COMPLETE", anatomy: "NASAL BONES", views: "WATERS, LATERAL", alias: ["nasal", "nose", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 73, procedure: "ORBITS COMP", anatomy: "ORBITS", views: "WATERS, CALDWELL, LATERAL", alias: ["orbits", "facial", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 74, procedure: "SINUSES 3 VIEWS", anatomy: "SINUSES", views: "WATERS, CALDWELL, LATERAL", alias: ["sinus", "paranasal", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 75, procedure: "SKULL 4 VIEW", anatomy: "SKULL", views: "PA (CALDWELL), LATERAL, AP (TOWNE), SUBMENTOVERTEX", alias: ["skull", "series", "Skull"], region: "HEAD", common: false, shortcut: false },
  { id: 76, procedure: "SKULL LESS THAN 4 VIEWS", anatomy: "SKULL", views: "LIMITED (SPECIFY)", alias: ["skull", "limited", "Skull"], region: "HEAD", common: false, shortcut: false },
  { id: 77, procedure: "SOFT TISSUE STUDY NECK", anatomy: "NECK SOFT TISSUE", views: "AP, LATERAL", alias: ["soft tissue neck", "airway", "stn", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },
  { id: 78, procedure: "T-M JOINTS BI LATERAL", anatomy: "TM JOINTS", views: "OPEN/CLOSED BILATERAL", alias: ["tmj", "temporomandibular", "bilateral", "Facial/ENT"], region: "HEAD", common: false, shortcut: false },

  // PELVIS / SI / SC / STERNUM / RIBS
  { id: 79, procedure: "PELVIS", anatomy: "PELVIS", views: "AP", alias: ["pelvis", "Pelvis/Hips"], region: "PELVIS", common: true, shortcut: false },
  { id: 80, procedure: "PELVIS 3 VIEWS", anatomy: "PELVIS", views: "AP, INLET, OUTLET", alias: ["pelvis", "inlet", "outlet", "Pelvis/Hips"], region: "PELVIS", common: false, shortcut: false },
  { id: 81, procedure: "PELVIS STAND COMP", anatomy: "PELVIS", views: "AP STANDING", alias: ["pelvis", "standing", "weightbearing", "Pelvis/Hips"], region: "PELVIS", common: false, shortcut: false },
  { id: 82, procedure: "SACRO-ILLIAC JOINTS", anatomy: "SI JOINTS", views: "AP, OBLIQUES", alias: ["si joints", "sacroiliac", "Sacrum/Other"], region: "PELVIS", common: false, shortcut: false },
  { id: 83, procedure: "SACRUM AND COCCYX", anatomy: "SACRUM & COCCYX", views: "AP SACRUM, AP COCCYX, LATERAL", alias: ["sacrum", "coccyx", "tailbone", "Sacrum/Other"], region: "SPINE", common: true, shortcut: false },
  { id: 84, procedure: "STERNO-CLAV JOINTS", anatomy: "STERNOCLAVICULAR JOINTS", views: "AP, SERENDIPITY", alias: ["sc joints", "sternoclavicular", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 85, procedure: "STERNUM", anatomy: "STERNUM", views: "RAO, LATERAL", alias: ["sternum", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 86, procedure: "RIBS BILATERAL", anatomy: "RIBS", views: "AP UPPER/LOWER BILATERAL", alias: ["ribs", "bilateral", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 87, procedure: "RIBS BILATERAL W/ CHEST 1V", anatomy: "RIBS", views: "BILATERAL RIBS + CHEST AP/PA", alias: ["ribs", "bilateral", "with chest", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 88, procedure: "RIBS UNILATERAL LEFT W/ CHEST 1V", anatomy: "RIBS", views: "LEFT RIBS + CHEST AP/PA", alias: ["ribs", "left", "lt", "with chest", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 89, procedure: "RIBS UNILATERAL LT", anatomy: "RIBS", views: "LEFT RIBS SERIES", alias: ["ribs", "left", "lt", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 90, procedure: "RIBS UNILATERAL RIGHT W/ CHEST 1V", anatomy: "RIBS", views: "RIGHT RIBS + CHEST AP/PA", alias: ["ribs", "right", "rt", "with chest", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },
  { id: 91, procedure: "RIBS UNILATERAL RT", anatomy: "RIBS", views: "RIGHT RIBS SERIES", alias: ["ribs", "right", "rt", "Ribs/Sternum/SC Joints"], region: "CHEST", common: false, shortcut: false },

  // SCAPULA
  { id: 92, procedure: "SCAPULA LEFT 2 VIEW", anatomy: "SCAPULA", views: "AP, LATERAL (Y)", alias: ["scapula", "left", "lt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 93, procedure: "SCAPULA RIGHT 2 VIEW", anatomy: "SCAPULA", views: "AP, LATERAL (Y)", alias: ["scapula", "right", "rt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: true, shortcut: false },

  // SCOLIOSIS / THORACIC
  { id: 94, procedure: "SCOLIOSIS SERIES", anatomy: "SPINE", views: "PA/LAT FULL SPINE", alias: ["scoliosis", "full spine", "long cassette", "Sacrum/Other"], region: "SPINE", common: false, shortcut: false },
  { id: 95, procedure: "T-SPINE ONE VIEW", anatomy: "THORACIC SPINE", views: "LATERAL", alias: ["t-spine", "thoracic", "Thoracic Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 96, procedure: "THORACIC 2 VIEW", anatomy: "THORACIC SPINE", views: "AP, LATERAL", alias: ["t-spine", "thoracic", "2 view", "Thoracic Spine"], region: "SPINE", common: false, shortcut: false },
  { id: 97, procedure: "THORACIC SPINE", anatomy: "THORACIC SPINE", views: "AP, LATERAL (+/- SWIMMERS)", alias: ["t-spine", "thoracic", "Thoracic Spine"], region: "SPINE", common: true, shortcut: false },

  // SHOULDER
  { id: 98, procedure: "SHOULDER LEFT 1 VIEW", anatomy: "SHOULDER", views: "AP", alias: ["shoulder", "left", "lt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 99, procedure: "SHOULDER LEFT 2 VIEW", anatomy: "SHOULDER", views: "AP, LATERAL/Y", alias: ["shoulder", "left", "lt", "2v", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 100, procedure: "SHOULDER RIGHT 1 VIEW", anatomy: "SHOULDER", views: "AP", alias: ["shoulder", "right", "rt", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 101, procedure: "SHOULDER RIGHT 2 VIEW", anatomy: "SHOULDER", views: "AP, LATERAL/Y", alias: ["shoulder", "right", "rt", "2v", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 102, procedure: "SHOULDER WT BEARING BILATERAL", anatomy: "SHOULDERS", views: "AP BILATERAL WEIGHTBEARING", alias: ["shoulders", "weightbearing", "bilateral", "Shoulder/Clavicle/Scapula"], region: "UPPER EXTREMITY", common: false, shortcut: false },

  // WRIST
  { id: 103, procedure: "WRIST LEFT 2 VIEW", anatomy: "WRIST", views: "PA, LATERAL", alias: ["wrist", "left", "lt", "2v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 104, procedure: "WRIST LEFT 3V OR MORE", anatomy: "WRIST", views: "PA, OBLIQUE, LATERAL (+/- NAVICULAR)", alias: ["wrist", "left", "lt", "3v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: true, shortcut: false },
  { id: 105, procedure: "WRIST PA BILATERAL", anatomy: "WRISTS", views: "PA BILATERAL", alias: ["wrist", "wrists", "bilateral", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 106, procedure: "WRIST RIGHT 2 VIEW", anatomy: "WRIST", views: "PA, LATERAL", alias: ["wrist", "right", "rt", "2v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: false, shortcut: false },
  { id: 107, procedure: "WRIST RIGHT 3V OR MORE", anatomy: "WRIST", views: "PA, OBLIQUE, LATERAL (+/- NAVICULAR)", alias: ["wrist", "right", "rt", "3v", "Wrist/Hand/Fingers"], region: "UPPER EXTREMITY", common: true, shortcut: false },

  // TIB/FIB
  { id: 108, procedure: "TIBIA AND FIBULA LEFT 2 VIEW", anatomy: "TIB-FIB", views: "AP, LATERAL", alias: ["tib-fib", "left", "lt", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: true, shortcut: false },
  { id: 109, procedure: "TIBIA AND FIBULA RIGHT 2 VIEW", anatomy: "TIB-FIB", views: "AP, LATERAL", alias: ["tib-fib", "right", "rt", "TibFib/Ankle"], region: "LOWER EXTREMITY", common: true, shortcut: false },

  // TOES (LEFT)
  { id: 110, procedure: "TOES L DIGIT 1 GREAT", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "great toe", "left", "lt", "digit 1", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 111, procedure: "TOES L DIGIT 2", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "left", "lt", "digit 2", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 112, procedure: "TOES L DIGIT 3", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "left", "lt", "digit 3", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 113, procedure: "TOES L DIGIT 4", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "left", "lt", "digit 4", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 114, procedure: "TOES L DIGIT 5", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "left", "lt", "digit 5", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },

  // TOES (RIGHT)
  { id: 115, procedure: "TOES R DIGIT 1 GREAT", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "great toe", "right", "rt", "digit 1", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 116, procedure: "TOES R DIGIT 2", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "right", "rt", "digit 2", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 117, procedure: "TOES R DIGIT 3", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "right", "rt", "digit 3", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 118, procedure: "TOES R DIGIT 4", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "right", "rt", "digit 4", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
  { id: 119, procedure: "TOES R DIGIT 5", anatomy: "TOE", views: "AP, OBLIQUE, LATERAL", alias: ["toe", "right", "rt", "digit 5", "Foot/Toes"], region: "LOWER EXTREMITY", common: false, shortcut: false },
];

export default ExamsData;
