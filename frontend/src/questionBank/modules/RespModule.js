// Respiratory Module
export const RespModule = [
  { id: "resp_cough", label: "Do you have cough?", type: "yes_no_toggle"},
  { id: "resp_sputum", label: "Are you coughing up phlegm?", type: "yes_no_toggle" ,
    showIf: (a) => a.resp_cough === "Yes"
  },
  { id: "resp_sputumcolour", label: "What colour is the phlegm?", type: "colour", colourType: "sputum", options: ["Clear", "Yellow","Green","White","Pinkish"],
    showIf: (a) => a.resp_sputum === "Yes"
  },
  { id: "resp_blood", label: "Is there blood in the phlegm or are you coughing up blood?", type: "yes_no_toggle",
    showIf: (a) => a.resp_cough === "Yes"
  },
  { id: "resp_sputumvolume", label: "If you usually have phlegm, is the amount more than usual?", type: "yes_no_toggle",
    showIf: (a) => a.resp_sputum === "Yes"
  },
  { id: "resp_sputumcolourchange", label: "If you usually have phlegm, has it changed in colour?", type: "yes_no_toggle",
    showIf: (a) => a.resp_sputum === "Yes"
  },
  { id: "resp_chestpain", label: "Do you feel pain in your chest when you breathe in or when you cough?", type: "yes_no_toggle",
    showIf: (a) => a.resp_cough === "Yes"
  },
  { id: "resp_sob", label: "Are you feeling short of breath?", type: "yes_no_toggle"},
  { id: "resp_dyspnoea", label: "Are you struggling to breathe or unable to speak in full sentences?", type: "yes_no_toggle"},
];