// DizzinessGeneral.js
export const DizzinessGeneral = [
  { id: "dizziness_symptomtype", label: "Which best describes your dizziness?", type: "radio_group", options: ["Spinning sensation (like the room is moving)", "Feeling like you might faint", "Unsteady when walking","Just feel “off” or not well"],
  },
  { id: "dizziness_onsettype", label: "Did the dizziness start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "dizziness_onsettime", label: "When did it start?", type: "radio_group", options: ["Today", "Yesterday", "Days ago"],
    
  },
  { id: "dizziness_episodeduration", label: "How long does each episode last?", type: "radio_group", options: ["Seconds", "Minutes", "Hours", "Days", "Constant"],
    
  },
  { id: "dizziness_pattern", label: "Is it a single episode or does it come and go?", type: "radio_group", options: ["Single", "Recurrent"],
    
  },
  { id: "dizziness_progression", label: "Is it getting better, worse, or staying the same?", type: "radio_group", options: ["Better", "Same", "Worse"],
    
  },
  { id: "dizziness_continuous", label: "Is the dizziness present all the time?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_headmovement", label: "Does turning your head trigger the dizziness?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_rollinginbed", label: "Does it happen when you turn in bed?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_lookingup", label: "Does looking up trigger it?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_standingup", label: "Does it happen when you stand up?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_crowds", label: "Does it happen in crowded places or with lots of movement around you?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_no trigger", label: "Does it happen without any clear trigger?", type: "yes_no_toggle",
    
  },
];