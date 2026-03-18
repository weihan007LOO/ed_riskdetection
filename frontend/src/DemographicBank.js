export const DemographicQuestions = [
  { id: "age", label: "Age", type: "number", placeholder: "e.g. 25" },
  { id: "gender", label: "Gender", type: "radio_group", options: ["Male", "Female", "Other"] },
  { id: "lmp", label: "Last Menstrual Period (LMP)", type: "date", condition: "Female" }, // We can hide this if male
  { id: "comorbids", label: "Existing Medical Conditions (Comorbids)", type: "checkbox_group", options: ["Diabetes", "Hypertension","Hyperlipidemia","Heart Disease","Renal Disease", "Liver Disease", "Stroke", "Smoking", "Alcohol use","None of these"] },
  { id: "surgical_history", label: "Past Surgical History", type: "yes_no_toggle", hasExtraInput: true },
  { id: "allergy_history", label: "Allergy History", type: "yes_no_toggle", hasExtraInput:true },
  { id: "medications", label: "Current Medications", type: "yes_no_toggle", hasExtraInput:true }
];