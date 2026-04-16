// PainGeneral.js
export const PainGeneral = [
  { id: "pain", label: "Are you still having pain right now?", type: "yes_no_toggle" },
  { id: "pain_location", label: "Where do you feel the pain?", type: "body_map",
    showIf: (a) => a.pain === "Yes"
  },
  { id: "pain_duration", label: "How long have you had this pain?", type: "radio_group", options: ["Hours", "Days"],
    showIf: (a) => a.pain === "Yes"
  },
  { id: "pain_score", label: "How bad is the pain now?", type: "range",
    showIf: (a) => a.pain === "Yes"
  },
  { id: "pain_onset", label: "Did the pain start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"]},
  { id: "pain_character", label: "Can you describe the pain?", type: "radio_group", options: ["Sharp", "Dull", "Burning", "Cramping", "Like a heavy pressure", "Not sure"]},
  { id: "pain_timecourse", label: "Is the pain constant, or does it come and go?", type: "radio_group", options: ["Constant", "Comes and goes"]},
  { id: "pain_colicky", label: "Does the pain come in waves?", type: "yes_no_toggle"},
  { id: "pain_radiation", label: "Does the pain spread anywhere else?", type: "yes_no_toggle"},
  { id: "pain_radiationlocation", label: "Where does the pain spread to?", type: "body_map",
    showIf: (a) => a.pain_radiation === "Yes"
  },
  { id: "pain_radiationback", label: "Does the pain go through to your back?", type: "yes_no_toggle"},
  { id: "pain_episodes", label: "Have you had one episode of pain, or multiple episodes?", type: "radio_group", options: ["One continuous episode", "Multiple episodes"]},
  { id: "pain_episodenum", label: "How many episodes have you had?", type: "number",
    showIf: (a) => a.pain_episodes === "Multiple episodes"
  },
  { id: "pain_episodeduration", label: "How long does each episode usually last?", type: "radio_group", options: ["Minutes", "Hours"],
    showIf: (a) => a.pain_episodes === "Multiple episodes"
  },
  { id: "pain_worst", label: "How bad was the pain at its worst?", type: "range",},
  { id: "pain_locationstop", label: "Where did you feel the pain?", type: "body_map",},
  { id: "pain_durationstop", label: "How long did the pain last?", type: "radio_group", options: ["Minutes", "Hours"]},
  { id: "pain_pastscore", label: "How bad was the pain?", type: "range",},
  { id: "pain_activityonset", label: "What were you doing when the pain started?", type: "radio_group", options: ["Resting", "Physical activity", "Eating"]},

  //Cardiac
  { id: "pain_cardiac1", label: "When did the pain first start?", type: "text"},
  { id: "pain_cardiac2", label: "Does sitting forward make the pain better?", type: "yes_no_toggle"},
  { id: "pain_cardiac3", label: "Does the pain improve with rest?", type: "yes_no_toggle"},

  //Resp
  { id: "pain_resp", label: "Does deep breathing or coughing make the pain worse?", type: "yes_no_toggle"},

  //GI
  { id: "pain_gi1", label: "Does eating make the pain worse?", type: "yes_no_toggle"},
  { id: "pain_gi2", label: "Does the pain come after eating oily or fatty food?", type: "yes_no_toggle"},
  { id: "pain_gi3", label: "Does coughing or moving make the pain worse?", type: "yes_no_toggle"},
];