// HeadacheGeneral.js
export const HeadacheGeneral = [
  { id: "headache_onsettime", label: "When did your headache start?", type: "radio_group", options: ["Today", "Yesterday", "Days ago"],
    
  },
  { id: "headache_onsettype", label: "Did the headache start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "headache_firstepisode", label: "Is this your first time having this type of headache?", type: "yes_no_toggle",
    
  },
  { id: "headache_usualchange", label: "Is this headache different from your usual headaches?", type: "yes_no_toggle",
    showIf: (a) => a.head_firstepisode === "No"
  },
  { id: "headache_duration", label: "How long has this headache lasted?", type: "radio_group", options: ["Minutes", "Hours", "Days", "Constant"],
    
  },
  { id: "headache_pattern", label: "Is it a single episode or does it come and go?", type: "radio_group", options: ["Single", "Recurrent"],
    
  },
  { id: "headache_progression", label: "Is it getting better, worse, or staying the same?", type: "radio_group", options: ["Better", "Same", "Worse"],
    
  },
  { id: "headache_location", label: "Where is the headache located?", type: "head_map",
    
  },
  { id: "headache_character", label: "Can you describe the headache?", type: "radio_group", options: ["Throbbing", "Pressure", "Tight", "Sharp", "Not sure"],
    
  },
  { id: "headache_score", label: "How bad is the headache now?", type: "range",
    
  },
  { id: "headache_worst", label: "Is this the worst headache you have ever had?", type: "yes_no_toggle",
    
  },
  { id: "headache_thunderclap", label: "Did the headache become so much worse right away after it started?", type: "yes_no_toggle",
    
  },
];