export const DemographicQuestions = [
  { id: "id", label: "RN number", type: "text", placeholder: "e.g. 12345678", required: true, numeric: true, maxLength: 8 },
  { id: "age", label: "Age", type: "number", placeholder: "e.g. 25", required: true },
  { id: "gender", label: "Gender", type: "radio_group", options: ["Male", "Female"], required: true },
];