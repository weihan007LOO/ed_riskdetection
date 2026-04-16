// GastroIntestinal Module
export const GIModule = [
  { id: "gi_abdomenpain", label: "Do you have stomach or abdominal pain?", type: "yes_no_toggle"},
  { id: "gi_abdomenpainlocation", label: "Where is the pain?", type: "abdomen_map" ,
    showIf: (a) => a.gi_abdomenpain === "Yes"
  },
  { id: "gi_stools", label: "Have you had loose or watery stools?", type: "yes_no_toggle"},
  { id: "gi_vomiting", label: "Have you been vomiting?", type: "yes_no_toggle"},
  { id: "gi_nausea", label: "Do you feel nauseated?", type: "yes_no_toggle"},
  { id: "gi_acidreflux", label: "Do you feel acid or food coming up into your throat?", type: "yes_no_toggle"},
  { id: "gi_epigastricpain", label: "Do you have pain in your upper abdomen?", type: "yes_no_toggle"},
  { id: "gi_dysphagia", label: "Do you have difficulty swallowing?", type: "yes_no_toggle"},
  { id: "gi_odynophagia", label: "Do you have pain when swallowing?", type: "yes_no_toggle"},
  { id: "gi_abdominaldistension", label: "Does your abdomen feel bloated or swollen?", type: "yes_no_toggle"},
  { id: "gi_flatus", label: "Are you able to pass gas (wind)?", type: "yes_no_toggle"},
  { id: "gi_bowelmovements", label: "What are your bowel movements like?", type: "radio_group", options:["Normal", "Loose or watery", "Difficult to pass motion"]},
  { id: "gi_diarrhoeafreq", label: "How many times have you passed loose or watery stools?", type: "number" ,
    showIf: (a) => a.gi_bowelmovements === "Loose or watery"
  },
  { id: "gi_prbleed", label: "Have you passed fresh blood in your stool?", type: "yes_no_toggle"},
  { id: "gi_melena", label: "Have your stools been black in colour?", type: "yes_no_toggle"},
];
