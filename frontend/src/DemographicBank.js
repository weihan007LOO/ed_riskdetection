export const DemographicQuestions = [
  { id: "id", label: "RN number", type: "text", placeholder: "e.g. RN12345678" },
  { id: "age", label: "Age", type: "number", placeholder: "e.g. 25" },
  { id: "gender", label: "Gender", type: "radio_group", options: ["Male", "Female"] },
  { id: "lmp", label: "Last Menstrual Period (LMP)", type: "date", condition: "Female" }, // We can hide this if male
];