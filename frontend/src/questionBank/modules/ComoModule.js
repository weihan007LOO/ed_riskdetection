// Comorbid Module
export const ComoModule = [
  { id: "prompt_como01", type: "checkbox_group", options: ["Asthma", "COPD or chronic lung disease","High blood pressure","Heart disease (previous heart attack, angina)","Heart failure", "Diabetes", "Previous stroke", "Cancer", "Kidney disease","None of these"] },
  { id: "como_081", type: "yes_no_toggle" },
  { id: "como_091", type: "yes_no_toggle" },
  { id: "como_092", type:"radio_group", options: ["Today", "Yesterday", "Number of days ago"] },
  { id: "como_10", type: "yes_no_toggle" },
  { id: "prompt_como02", type: "checkbox_group", options: ["Urinary catheter (tube to pass urine)", "Feeding tube","Line or tube for medication or dialysis","Prosthetic heart valve","Implanted heart pacemaker","None of these"] },
  { id: "prompt_como02_lite", type: "checkbox_group", options: ["Urinary catheter (tube to pass urine)", "Feeding tube","Line or tube for medication or dialysis","None of these"] },
];