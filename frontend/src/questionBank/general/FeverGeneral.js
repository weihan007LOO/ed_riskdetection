// FeverGeneral.js
export const FeverGeneral = [
  { id: "fever_onset", label: "When did your fever start?", type: "date",
  },
  { id: "fever_temperature", label: "Have you measured your temperature at home?", type: "yes_no_toggle",
  },
  { id: "fever_maxtemperature", label: "What was the highest reading?", type: "number",
    showIf: (a) => a.fever_temperature === "Yes"
  },
  { id: "fever_nightsweat", label: "Have you been sweating a lot at night?", type: "yes_no_toggle",
  },
];