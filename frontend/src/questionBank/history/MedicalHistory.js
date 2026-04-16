// Medical History
export const MedicalHistory = [
  { id: "medic", label: "Are you currently taking any regular medications?", type: "yes_no_toggle" },
  { id: "medic_new", label: "Have you started any new medications in the last 2 weeks?", type: "yes_no_toggle",
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_highbloodpressure", label: "Are you taking medication for high blood pressure?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_anticoagulant", label: "Are you taking medications like warfarin, dabigatran, or apixaban?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_antiplatelet", label: "Are you taking medications like aspirin or clopidogrel?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_steroids", label: "Are you taking steroid medications like prednisolone or hydrocortisone?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_chemotherapy", label: "Are you receiving chemotherapy or cancer treatment?", type: "yes_no_toggle",
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_nsaids", label: "Have you been taking painkillers like ibuprofen or diclofenac regularly?", type: "yes_no_toggle",
    showIf: (a) => a.medic === "Yes"
  },
  { id: "medic_antibiotics", label: "Have you taken antibiotics in the past 2 weeks?", type: "yes_no_toggle"},
  { id: "medic_allergy", label: "Do you have any allergies to medications?", type: "radio_group", options: ["Yes", "No", "Not sure"]},
  { id: "medic_allergydrug", label: "Which medication are you allergic to?", type: "text",
    showIf: (a) => a.medic_allergy === "Yes"
  },
  { id: "medic_allergyreaction", label: "What reaction did you have?", type: "radio_group", options: ["Rash", "Swelling", "Breathing difficulty", "Dizziness", "Not sure", "Other"],
    showIf: (a) => a.medic_allergy === "Yes"
  },
  { id: "medic_allergyseverity", label: "Did you need hospital treatment for this reaction?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    showIf: (a) => a.medic_allergy === "Yes"
  },
  { id: "medic_painkiller", label: "Have you taken any painkillers for this problem?", type: "yes_no_toggle"},
  { id: "medic_fever", label: "Have you taken fever medication such as paracetamol since the fever started?", type: "yes_no_toggle"},
  { id: "medic_trigger", label: "Did this problem start after taking any medication?", type: "yes_no_toggle"},
  { id: "medic_herbal", label: "Do you take any herbal or traditional medications?", type: "yes_no_toggle"},
  { id: "medic_vaccine", label: "Have you received any vaccination in the past 1 month?", type: "yes_no_toggle"},
  { id: "medic_transfusion", label: "Have you received a blood transfusion in the past 1 month?", type: "yes_no_toggle"},
];