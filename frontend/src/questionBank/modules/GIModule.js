// GastroIntestinal Module
export const GIModule = [
  // ======================
  // VOMITING
  // ======================
  { id: "prom_vomiting", type: "yes_no_toggle", required: true },
  { id: "git_vom01", type: "yes_no_toggle" }, // nausea
  { id: "confirm_vomiting", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "git_vom02", type: "colour", colourType: "vomit", options: ["Food", "Clear fluid", "Yellow-green", "Dark like coffee grounds", "Fresh blood", "Not sure"] },
  { id: "git_vom03", type: "number" },
  { id: "git_vom04", type: "number" },
  { id: "git_vom05", type: "yes_no_toggle" },

  // ======================
  // DIARRHOEA
  // ======================
  { id: "prom_diarrhoea", type: "yes_no_toggle", required: true },
  { id: "confirm_diarrhoea", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "git_dia01", type: "number" },
  { id: "git_dia02", type: "number" },
  { id: "git_dia03", type: "yes_no_toggle" },
  { id: "git_dia021", type: "radio_group", options: ["Yes", "No", "Not sure"] },

  // ======================
  // ABDOMINAL PAIN
  // ======================
  { id: "prom_abdopain", type: "yes_no_toggle", required: true },
  { id: "confirm_abdopain", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "git_pain01", type: "yes_no_toggle" },
  { id: "git_pain02", type: "yes_no_toggle" },
  { id: "git_pain03", type: "yes_no_toggle" },
  { id: "git_pain04", type: "yes_no_toggle" },
  { id: "git_pain05", type: "yes_no_toggle" },
  { id: "git_pain06", type: "yes_no_toggle" },
  { id: "git_pain07", type: "yes_no_toggle" },
  { id: "git_pain08", type: "yes_no_toggle" },

  // ======================
  // GENERAL GI
  // ======================
  { id: "git_01", type: "yes_no_toggle" },
  { id: "git_02", type: "radio_group", options: ["Today", "Yesterday", "Number of days ago"] },
  { id: "git_03", type: "radio_group", options: ["Normal brown", "Black like tar", "Greenish", "Pale", "Not sure"] },
  { id: "git_04", type: "yes_no_toggle" },
  { id: "git_05", type: "yes_no_toggle" },
  { id: "git_06", type: "yes_no_toggle" },
  { id: "git_07", type: "yes_no_toggle" },
  { id: "git_08", type: "yes_no_toggle" },
  { id: "git_09", type: "yes_no_toggle" },
  { id: "git_10", type: "yes_no_toggle" },
];