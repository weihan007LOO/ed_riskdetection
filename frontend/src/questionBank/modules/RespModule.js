// Respiratory Module
export const RespModule = [
  // ======================
  // SOB (Shortness of Breath)
  // ======================
  { id: "prom_sob", type: "yes_no_toggle", required: true },
  { id: "confirm_sob", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "resp_sob01", type: "radio_group", options: ["Sudden", "Gradual"] },
  { id: "resp_sob02", type: "radio_group", options: ["Hours", "Days"] },
  { id: "resp_sob03", type: "radio_group", options: ["At rest", "When doing activity (like walking)", "Both"] },
  { id: "resp_sob04", type: "yes_no_toggle" },
  { id: "resp_sob05", type: "yes_no_toggle" },
  { id: "resp_sob06", type: "yes_no_toggle" },
  { id: "resp_sob07", type: "yes_no_toggle" },
  { id: "resp_sob08", type: "yes_no_toggle" },
  { id: "resp_sob09", type: "yes_no_toggle" },

  // ======================
  // COUGH
  // ======================
  { id: "prom_cough", type: "yes_no_toggle", required: true },
  { id: "confirm_cough", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "resp_cou01", type: "number" },
  { id: "resp_cou02", type: "yes_no_toggle" },
  { id: "resp_cou021", type: "colour", colourType: "sputum", options: ["Clear", "Yellow","Green","White","Pinkish"],},
  { id: "resp_cou022", type: "yes_no_toggle" },
  { id: "resp_cou023", type: "yes_no_toggle" },
  { id: "resp_cou03", type: "yes_no_toggle" },
  { id: "resp_cou04", type: "yes_no_toggle" },
  { id: "resp_cou05", type: "yes_no_toggle" },
];