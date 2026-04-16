// SyncopeGeneral.js
export const SyncopeGeneral = [
  { id: "syncopegen_firstepisodes", label: "Is this your first episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_similarepisodes", label: "Have you had similar episodes before?", type: "yes_no_toggle",
    showIf: (a) => a.syncopegen_firstepisodes == "No"
  },
  { id: "syncopegen_timesinceevent", label: "When did this happen?", type: "radio_group", options: ["<3h", "3-6h", "6-12h", ">12h"],
    
  },
  { id: "syncopegen_onsettype", label: "When did this happen?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "syncopegen_lossduration", label: "About how long were you unconscious?", type: "radio_group", options: ["Seconds", "Minutes", ">5minutes"],
    
  },
  { id: "syncopegen_recovery", label: "Did you recover quickly or take time to recover?", type: "radio_group", options: ["Rapid", "Took time"],
    
  },
  { id: "syncopegen_posteventconfusion", label: "Were you confused after waking up?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_position", label: "What were you doing when it happened?", type: "radio_group", options: ["Standing", "Sitting", "Lying down"],
    
  },
  { id: "syncopegen_activity", label: "What were you doing just before it happened?", type: "radio_group", options: ["Resting", "Physical activity", "After activity"],
    
  },
  { id: "syncopegen_postmicturition", label: "Did it happen after passing urine?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_defecation", label: "Did it happen during or after passing stool?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_coughtrigger", label: "Did it happen after coughing or sneezing?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_swallowtrigger", label: "Did it happen during swallowing?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_emotionaltrigger", label: "Did it happen during stress, pain, or emotional distress?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_heatexposure", label: "Were you in a hot environment?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_prolongedstanding", label: "Had you been standing for a long time?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_neckmovement", label: "Did it happen when turning your neck or shaving?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_lightheadedness", label: "Did you feel dizzy or lightheaded before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_visionchange", label: "Did your vision become blurred or dark before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_nausea", label: "Did you feel nauseated before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_sweating", label: "Did you have sweating before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_palpitations", label: "Did you feel your heart racing before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_chestpainpresence", label: "Did you have chest pain before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_weresob", label: "Were you short of breath before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_nowarning", label: "Did it happen suddenly without any warning?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_jerkingmovements", label: "Did your body jerk or shake during the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_tonguebiting", label: "Did you bite your tongue?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_incontinence", label: "Did you lose control of urine or stool?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_pallor", label: "Did you look pale during the episode?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    
  },
  { id: "syncopegen_cyanosis", label: "Did you turn blue during the episode?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    
  },
  { id: "syncopegen_injury", label: "Did you injure yourself when you fell?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_headinjury", label: "Did you hit your head?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_fullrecovery", label: "Did you return to normal quickly?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_drowseeness", label: "Did you feel very sleepy afterwards?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_headache", label: "Did you have a headache after the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_weaknesswaking", label: "Did you notice any weakness after waking up?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_epispeechdifficulty", label: "Did you have difficulty speaking after the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_visionloss", label: "Did you have any vision problems after the episode?", type: "yes_no_toggle",
    
  },
];