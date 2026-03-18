export const QuestionBank = {
  "Fever": [
    { id: "f_onset", label: "1. When did your fever start?", type: "date" },
    { id: "f_duration", label: "2. How many days have you had the fever?", type: "number" },
    { id: "f_pattern", label: "3. What was the highest temperature you recorded?", type: "number"},
    { id: "f_assoc", label: "4. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Feeling cold/Shivering", "Sore throat/Cough/Runny nose", "Pain or burning when passing urine/Back pain", "Skin rash/Wound/Swelling", "Night sweats", "Headache", "Stiff neck", "Confusion/Unusual behaviour", "Dizziness", "Shortness of breath", "Chest pain/Fast heartbeat", "Very tired/Weak", "Easy bruising/Bleeding", "Loss of appetite/Weight loss","Seizure"] },
    { id: "f_infect", label: "5. Have you had any recent infection, hospital stay, or do you have a weak immune system?", type: "yes_no_toggle" , hasExtraInput: true},
    { id: "f_contact", label: "6. Have you been in contact with anyone who was sick recently?", type: "yes_no_toggle" , hasExtraInput: false},
    { id: "f_travel", label: "7. Have you travelled outside your area or country recently?", type: "yes_no_toggle" , hasExtraInput: false},
    { id: "f_vaccine", label: "8. Are your vaccinations up to date?", type: "yes_no_toggle" , hasExtraInput: false},
    { id: "f_visit", label: "9. Have you seen a doctor for this fever? (If yes, did you take any medication?)", type: "yes_no_toggle" , hasExtraInput: true},
  ],

  "Headache": [
    { id: "h_onset", label: "1. When did the headache start?", type: "radio_group", options: ["Gradual", "Sudden"] },
    { id: "h_location", label: "2. Where do you feel the headache? (Select all that apply)", type: "checkbox_group", options: ["Forehead", "Sides of the head", "Back of the head", "All over the head", "Around or behind the eyes"] },
    { id: "h_feel", label: "3. What does the headache feel like?", type: "checkbox_group", options: ["Throbbing/Pulsing", "Sharp/Stabbing","Tight/Pressure-like", "Dull/Aching", "Worst headache I have ever had"] },
    { id: "h_score", label: "4. How bad is the pain right now? (1 (Very mild) -10 (Worst pain))", type: "range" },
    { id: "h_assoc", label: "5. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Nausea/Vomiting", "Blurred/Double vision", "Discomfort with bright light","Visual warning signs before headache (e.g. flashing lights, zig-zag lines)","Weakness, numbness, slurred speech, or face drooping","Fever","Facial pain/Runny nose","Recent head injury or fall","Feeling confused or unusually drowsy","Seizure or fits"] }
  ],

  "Dizziness": [
    { id: "dz_onset", label: "1. When did the dizziness start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "dz_duration", label: "2. How long have you been feeling dizzy?", type: "number" },
    { id: "dz_feel", label: "3. What does the dizziness feel like? (Select all that apply)", type: "checkbox_group", options: ["The room is spinning", "Feeling light-headed or faint","Unsteady or off-balance"] },
    { id: "dz_trigger", label: "4. When does the dizziness happen?", type: "radio_group", options: ["When moving my head", "When standing up or changing position", "It happens on its own" ] },
    { id: "dz_assoc", label: "5. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Ringing in the ears", "Reduced hearing", "Ear pain/discharge","Face drooping, slurred speech, weakness or numbness","Chest pain or fast heartbeat","Recent injury or fall","Recent fainting or passed out"] },
    { id: "dz_med", label: "6. Have you taken any medication for this problem? (if yes, please specify)", type: "yes_no_toggle" , hasExtraInput: true},
  ],

  "Chest pain": [
    { id: "cp_onset", label: "1. How did the chest pain start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "cp_duration", label: "2. How long have you had the chest pain?", type: "number" },
    { id: "cp_location", label: "3. Where do you feel the pain? (Select all that apply)", type: "checkbox_group", options: ["Middle of the chest", "Left side of the chest", "Right side of the chest",] },
    { id: "cp_rad", label: "4. Does the pain spread anywhere? (Select all that apply)", type: "checkbox_group", options: ["Jaw", "Left Arm", "Back", "It does not spread"] },
    { id: "cp_feel", label: "5. What does the pain feel like?", type: "radio_group", options: ["Sharp", "Heavy or pressure-like", "Burning","Tight or squeezing","Pricking" ] },
    { id: "cp_score", label: "6. How bad is the pain right now? (1 (Very mild) -10 (Worst pain))", type: "range" },
    { id: "cp_precipitate", label: "7. When does the pain usually start or get worse? (Select all that apply)", type: "checkbox_group", options: ["During physical activity", "While resting", "After eating","When stressed or anxious"] },
    { id: "cp_factor", label: "8. What makes the pain better?", type: "radio_group", options: ["Resting", "Medication given under the tongue", "Nothing helps"]},
    { id: "cp_assoc", label: "9. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Shortness of breath", "Cold sweats", "Fast or irregular heartbeat","Nausea/Vomiting","Cough","Upper abdominal pain","Sour taste or acid coming up to the throat","Pain worsens when pressing on the chest"] },  
],

  "Abdominal pain": [
    { id: "abd_onset", label: "1. How did the stomach pain start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "abd_location", label: "2. Where is the pain? (👉 Tap on the area of the abdomen where you feel the pain)", type: "abdomen_map" },
    { id: "abd_rad", label: "3. Does the pain spread anywhere? (Select all that apply)", type: "checkbox_group", options: ["Back", "Chest", "Shoulder", "It does not spread"] },
    { id: "abd_char", label: "4. What does the pain feel like?", type: "radio_group", options: ["Cramping (comes and goes)", "Sharp", "Dull", "Aching"] },
    { id: "abd_score", label: "5. How bad is the pain right now? (1 (Very mild) -10 (Worst pain))", type: "range" },
    { id: "abd_meal", label: "6. What happens to the pain after eating?", type: "radio_group", options: ["Gets worse", "Gets better", "No change"]},
    { id: "abd_posture", label: "7. Does the pain improve when you lean forward?", type: "yes_no_toggle"},
    { id: "abd_assoc", label: "8. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Nausea/Vomiting", "Vomiting blood", "Diarrhea","Constipation","Blood in stool","Pain or changes when passing urine (blood, burning, frequent urination)","Vaginal bleeding, discharge, or passing tissue","Loss of appetite or weight loss","Yellowing of eyes or skin","Abdominal swelling or lump",,"Ate outside or suspicious food recently"]},
    { id: "abd_med", label: "9. Have you had any previous abdominal surgery? (if yes, please state what surgery and when)", type: "yes_no_toggle" , hasExtraInput: true},
    { id: "abd_fam", label: "10. Has anyone in your family had cancer? (if yes, please state who and what type)", type: "yes_no_toggle" , hasExtraInput: true},
],

    "Fainted": [
    { id: "syn_trigger", label: "1. What were you doing just before you fainted?", type: "radio_group", options: ["Sitting or resting", "Physical activity or exercise","Emotional stress (fear, pain, seeing blood)"]},
    { id: "syn_prodrome", label: "2. Did you have any warning signs before you fainted? (Select all that apply)", type: "checkbox_group", options: ["Dizziness or light-headedness", "Nausea", "Sweating","Chest Pain","Fast or irregular heartbeat","Shortness of breath","Blurred vision or darkening of vision","After standing up or changing position","After an injury or fall","No warning signs",] },
    { id: "syn_duration", label: "3. How long were you unconscious?", type: "text"},
    { id: "syn_assoc", label: "4. Did any of the following happen during or after the episode? (Select all that apply)", type: "checkbox_group", options: ["Chest Pain", "Fast or irregular heartbeat", "Jerking or shaking movements","Bit your tongue","Eyes rolled back","Loss of urine or bowel control","Injury from the fall","Weakness, numbness, or slurred speech",]},
    { id: "syn_witnessed", label: "5. Did anyone see the episode happen?", type: "yes_no_toggle"},
    { id: "syn_episodes", label: "6. Have you fainted before? (if yes, please state how many times and when)", type: "yes_no_toggle" , hasExtraInput: true},
],

    "Body Weakness/Lethargy": [
    { id: "let_onset", label: "1. How did the weakness or tiredness start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "let_rad", label: "2. Where do you feel the weakness?", type: "radio_group", options: ["Whole body", "One side or one part of the body", "Started in the legs and is moving upwards",]},
    { id: "let_assoc", label: "3. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Fever", "Feeling very tired or sleepy", "Shortness of breath","Chest Pain","Passing urine very often or feeling very thirsty","Nausea/Vomiting","Slurred speech or face drooping","Known thyroid problem","Known diabetes","Loss of appetite or weight loss","Recent bleeding (from stool or vaginal bleeding)"]},
    { id: "let_med", label: "4. Are you currently taking any medications? (if yes, please list them)", type: "yes_no_toggle" , hasExtraInput: true},
],

    "Sore throat": [
    { id: "sore_onset", label: "1. How did the sore throat start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "sore_score", label: "2. How painful is your throat right now? (1 (Very mild) -10 (Worst pain))", type: "range" },
    { id: "sore_assoc", label: "3. Do you have any of these symptoms? (Select all that apply)", type: "checkbox_group", options: ["Fever", "Cough", "Runny Nose","Pain when swallowing","Difficulty swallowing food or drinks","Hoarse or changed voice","Drooling or difficulty handling saliva","Shortness of Breath","Something stuck in the throat (e.g. fish bone)","Neck Swelling",]},
],

    "Altered Mental Status": [
    { id: "mental_onset", label: "1. How did the change in behaviour or alertness start?", type: "radio_group", options: ["Gradual", "Sudden"]},
    { id: "mental_status", label: "2. Before this problem, what could the patient normally do? (Select all that apply)", type: "checkbox_group", options: ["Open eyes and stay awake", "Talk normally with others", "Walk with or without help","Eat and drink by themselves","Needed help with daily activities",]},
    { id: "mental_assoc", label: "3. Have you noticed any of these? (Select all that apply)", type: "checkbox_group", options: ["Fever", "Poor appetite or weight loss", "Headache","Seizure or fits","Weakness, numbness, or slurred speech","Recent fall or head injury","Alcohol or drug use / overdose","Low blood sugar (if checked)","History of cancer","Recent hospital admission",]},
    { id: "mental_history", label: "4. Does the patient have any mental health conditions? (if yes, please list the condition and medications)", type: "yes_no_toggle" , hasExtraInput: true},
],

};