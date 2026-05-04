export const DemographicQuestions = [
  { id: "id", label: "RN number", type: "text", placeholder: "e.g. RN12345678", required: true },
  { id: "age", label: "Age", type: "number", placeholder: "e.g. 25", required: true },
  { id: "gender", label: "Gender", type: "radio_group", options: ["Male", "Female"], required: true },
  { id: "lmp", label: "Last Menstrual Period (LMP)", type: "date", condition: "Female" }, // We can hide this if male
];