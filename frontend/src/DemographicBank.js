export const DemographicQuestions = [
  { id: "age", label: "Age", type: "number", placeholder: "e.g. 25" },
  { id: "gender", label: "Gender", type: "radio_group", options: ["Male", "Female"] },
  { id: "lmp", label: "Last Menstrual Period (LMP)", type: "date", condition: "Female" }, // We can hide this if male
  { id: "comorbids", label: "Do you have a history of any of the following medical conditions?", type: "checkbox_group", options: ["Asthma", "COPD or chronic lung disease","High blood pressure","Heart disease (previous heart attack, angina)","Heart failure", "Diabetes", "Previous stroke", "Cancer", "Kidney disease","None of these"] },
  { id: "kidney_dialysis", label: "Are you on kidney dialysis treatment?", type: "yes_no_toggle", condition: "Kidney disease"},
  { id: "kidney_last", label: "When was your last dialysis session?", type: "radio_group", options: ["Today", "Yesterday", "Number of days ago"], condition: "Yes" },
  { id: "surgical_history", label: "Have you had any surgery within the last 3 months?", type: "yes_no_toggle"},
];