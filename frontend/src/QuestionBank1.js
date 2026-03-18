const sharedQuestions =  [
  { id: "p_onset_type", label: "1. When did the pain start?", type: "radio_group", options: ["Within the last 1 hour", "[X] hours ago", "[X] days ago"] },
  { id: "p_current", label: "2. Are you still having pain right now?", type: "yes_no_toggle" },
  { id: "p_overall_duration", label: "3. How long did the pain last overall?", type: "radio_group", options: ["A few minutes", "About half an hour or less", "Hours", "Days","Weeks"] },
  { id: "p_pattern", label: "4. Is the pain constantly there or does it come and go?", type: "radio_group", options: ["It is there all the time", "Comes and goes"] },
  { id: "p_score", label: "5. How bad is the pain? (1 (Very mild) -10 (Worst pain))", type: "range" },
  { id: "p_progression", label: "6. Is the pain getting better or worse?", type: "radio_group", options: ["Getting worse", "About the same", "Getting better", "Comes and goes","Not sure"] },
  { id: "p_speed", label: "7. Did the pain start suddenly or slowly?", type: "radio_group", options: ["Suddenly", "Slowly", "None"] },
  { id: "p_character", label: "8. What does the pain feel like?", type: "checkbox_group", options: ["Sharp/Stabbing", "Dull", "Cramping", "Burning"] },
  { id: "p_spread", label: "9. Does the pain spread anywhere else?", type: "yes_no_toggle" },
];

const specificModules = {
  "Abdomen": [
    { id: "abd_meal", label: "1. What happens to the pain after eating?", type: "radio_group", options: ["Gets worse", "Gets better", "No change"]},
    { id: "abd_posture", label: "2. Does the pain improve when you lean forward?", type: "yes_no_toggle"},
    { id: "abd_assoc", label: "3. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Nausea/Vomiting", "Vomiting blood", "Diarrhea","Constipation","Blood in stool","Pain or changes when passing urine (blood, burning, frequent urination)","Vaginal bleeding, discharge, or passing tissue","Loss of appetite or weight loss","Yellowing of eyes or skin","Abdominal swelling or lump",,"Ate outside or suspicious food recently"]},
    { id: "abd_med", label: "4. Have you had any previous abdominal surgery?", type: "yes_no_toggle"},
  ],
  "Chest": [
    { id: "cp_precipitate", label: "1. When does the pain usually start or get worse? (Select all that apply)", type: "checkbox_group", options: ["During physical activity", "While resting", "After eating","When stressed or anxious"] },
    { id: "cp_factor", label: "2. What makes the pain better?", type: "radio_group", options: ["Resting", "Medication given under the tongue", "Nothing helps"]},
    { id: "cp_assoc", label: "3. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Shortness of breath", "Cold sweats", "Fast or irregular heartbeat","Nausea/Vomiting","Cough","Upper abdominal pain","Sour taste or acid coming up to the throat","Pain worsens when pressing on the chest"] },
  ],
  "Head": [
    { id: "h_assoc", label: "1. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Nausea/Vomiting", "Blurred/Double vision", "Discomfort with bright light","Visual warning signs before headache (e.g. flashing lights, zig-zag lines)","Weakness, numbness, slurred speech, or face drooping","Fever","Facial pain/Runny nose","Recent head injury or fall","Feeling confused or unusually drowsy","Seizure or fits"] },
  ]
};

export const getPainModule = () => sharedQuestions;

export const getSpecificQuestions = (category) => {
  return specificModules[category] || [];
};