import * as XLSX from "xlsx";

// 1. Your data
const FeverGeneral = [
  { id: "fever_onset", label: "When did your fever start?", type: "date" },
  { id: "fever_duration", label: "How many days have you had the fever?", type: "number" },
  { id: "fever_temperature", label: "Have you measured your temperature at home?", type: "yes_no_toggle" },
  { id: "fever_maxtemperature", label: "What was the highest reading?", type: "number", showIf: (a) => a.fever_temperature === "Yes" },
  { id: "fever_nightsweat", label: "Have you been sweating a lot at night?", type: "yes_no_toggle" },
];

const ChestPainGeneral = [
  { id: "chestpain_now", label: "Are you still having pain right now?", type: "yes_no_toggle",
  },
  { id: "chestpain_firststart", label: "When did the pain first start?", type: "number",
  },
  { id: "chestpain_timesinceonset", label: "When did the pain start?", type: "radio_group", options: ["<3h", "3-6h", "6-12h", ">12h"],
  },
  { id: "chestpain_duration", label: "How long have you had this pain?", type: "number",
  },
  { id: "chestpain_timecourse", label: "Is the pain constant, or does it come and go?", type: "radio_group", options: ["Constant", "Comes and goes"],
  },
  { id: "chestpain_episodes", label: "Have you had one episode of pain, or multiple episodes?", type: "radio_group", options: ["One continuous episode", "Multiple episodes"],
  },
  { id: "chestpain_episodenum", label: "How many episodes have you had?", type: "number",
    showIf: (a) => a.chestpain_episodes === "Multiple episodes"
  },
  { id: "chestpain_episodeduration", label: "How long does each episode usually last?", type: "radio_group", options: ["Minutes", "Hours"],
    showIf: (a) => a.chestpain_episodes === "Multiple episodes"
  },
  { id: "chestpain_onset", label: "Did the pain start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
  },
  { id: "chestpain_maxatonset", label: "Did the pain become very severe right away when it started?", type: "yes_no_toggle",
  },
  { id: "chestpain_location", label: "Where do you feel the pain?", type: "body_map",
  },
  { id: "chestpain_radiation", label: "Does the pain spread anywhere else?", type: "yes_no_toggle",
  },
  { id: "chestpain_radiationlocation", label: "Where does the pain spread to?", type: "body_map",
    showIf: (a) => a.chestpain_radiation === "Yes"
  },
  { id: "chestpain_classicradiation", label: "Does the pain spread to your arm, jaw, or back?", type: "yes_no_toggle",
    showIf: (a) => a.chestpain_radiation === "Yes"
  },
  { id: "chestpain_character", label: "Can you describe the pain?", type: "radio_group", options: ["Sharp", "Dull", "Burning", "Cramping", "Like a heavy pressure", "Not sure"],
  },
  { id: "chestpain_score", label: "How bad is the pain now?", type: "range",
  },
  { id: "chestpain_worst", label: "Is this the worst chest pain you have ever had?", type: "yes_no_toggle",
  },
  { id: "chestpain_activityonset", label: "What were you doing when the pain started?", type: "radio_group", options: ["Resting", "Physical activity", "Eating"],
  },
  { id: "chestpain_exertional", label: "Did it start or worsen with physical activity?", type: "yes_no_toggle",
  },
  { id: "chestpain_atrest", label: "Did it happen while resting?", type: "yes_no_toggle",
  },
  { id: "chestpain_gi1", label: "Does eating make the pain worse?", type: "yes_no_toggle",
  },
  { id: "chestpain_resp", label: "Does deep breathing or coughing make the pain worse?", type: "yes_no_toggle",
  },
  { id: "chestpain_gi3", label: "Does coughing or moving make the pain worse?", type: "yes_no_toggle",
  },
  { id: "chestpain_positional", label: "Does changing position affect the pain?", type: "yes_no_toggle",
  },
  { id: "chestpain_cardiac2", label: "Does sitting forward make the pain better?", type: "yes_no_toggle",
  },
  { id: "chestpain_cardiac3", label: "Does the pain improve with rest?", type: "yes_no_toggle",
  },
  { id: "chestpain_antacidrelief", label: "Does taking antacids help the pain?", type: "yes_no_toggle",
  },
  { id: "chestpain_palpation", label: "Does pressing on the chest make the pain worse?", type: "yes_no_toggle",
  },
];

const DizzinessGeneral = [
  { id: "dizziness_symptomtype", label: "Which best describes your dizziness?", type: "radio_group", options: ["Spinning sensation (like the room is moving)", "Feeling like you might faint", "Unsteady when walking","Just feel “off” or not well"],
  },
  { id: "dizziness_onsettype", label: "Did the dizziness start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "dizziness_onsettime", label: "When did it start?", type: "radio_group", options: ["Today", "Yesterday", "Days ago"],
    
  },
  { id: "dizziness_episodeduration", label: "How long does each episode last?", type: "radio_group", options: ["Seconds", "Minutes", "Hours", "Days", "Constant"],
    
  },
  { id: "dizziness_pattern", label: "Is it a single episode or does it come and go?", type: "radio_group", options: ["Single", "Recurrent"],
    
  },
  { id: "dizziness_progression", label: "Is it getting better, worse, or staying the same?", type: "radio_group", options: ["Better", "Same", "Worse"],
    
  },
  { id: "dizziness_continuous", label: "Is the dizziness present all the time?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_headmovement", label: "Does turning your head trigger the dizziness?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_rollinginbed", label: "Does it happen when you turn in bed?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_lookingup", label: "Does looking up trigger it?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_standingup", label: "Does it happen when you stand up?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_crowds", label: "Does it happen in crowded places or with lots of movement around you?", type: "yes_no_toggle",
    
  },
  { id: "dizziness_no trigger", label: "Does it happen without any clear trigger?", type: "yes_no_toggle",
    
  },
];

const HeadacheGeneral = [
  { id: "headache_onsettime", label: "When did your headache start?", type: "radio_group", options: ["Today", "Yesterday", "Days ago"],
    
  },
  { id: "headache_onsettype", label: "Did the headache start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "headache_firstepisode", label: "Is this your first time having this type of headache?", type: "yes_no_toggle",
    
  },
  { id: "headache_usualchange", label: "Is this headache different from your usual headaches?", type: "yes_no_toggle",
    showIf: (a) => a.head_firstepisode === "No"
  },
  { id: "headache_duration", label: "How long has this headache lasted?", type: "radio_group", options: ["Minutes", "Hours", "Days", "Constant"],
    
  },
  { id: "headache_pattern", label: "Is it a single episode or does it come and go?", type: "radio_group", options: ["Single", "Recurrent"],
    
  },
  { id: "headache_progression", label: "Is it getting better, worse, or staying the same?", type: "radio_group", options: ["Better", "Same", "Worse"],
    
  },
  { id: "headache_location", label: "Where is the headache located?", type: "head_map",
    
  },
  { id: "headache_character", label: "Can you describe the headache?", type: "radio_group", options: ["Throbbing", "Pressure", "Tight", "Sharp", "Not sure"],
    
  },
  { id: "headache_score", label: "How bad is the headache now?", type: "range",
    
  },
  { id: "headache_worst", label: "Is this the worst headache you have ever had?", type: "yes_no_toggle",
    
  },
  { id: "headache_thunderclap", label: "Did the headache become so much worse right away after it started?", type: "yes_no_toggle",
    
  },
];

const NauseaVomitGeneral = [
  { id: "nauseavomit_vomiting", label: "Have you vomited?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_onset", label: "Did the nausea or vomiting start suddenly or gradually?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "nauseavomit_duration", label: "How long have you had nausea or vomiting?", type: "radio_group", options: ["<24hours", "1-7days", "More than 1 week", "Comes and goes"],
    
  },
  { id: "nauseavomit_firstepisode", label: "Is this your first time having this problem?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_similarpastepisodes", label: "Have you had similar episodes before?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_continuousvsepisodic", label: "Is it there all the time, or does it come and go?", type: "radio_group", options: ["Continuous", "Comes and goes"],
    
  },
  { id: "nauseavomit_fluidsdown", label: "Are you able to keep down fluids or water?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_morningpredominance", label: "Is it worse in the morning?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_aftermeals", label: "Does it happen after eating?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_delayedaftermeals", label: "Does it happen more than 1 hour after eating?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_movementtrigger", label: "Is it triggered or worsened by movement or changing position?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_smelltrigger", label: "Is it triggered by certain smells or sights?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_medicationtrigger", label: "Did it start after taking any medication?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_alcoholtrigger", label: "Did it start after alcohol intake?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_cannabisuse", label: "Have you been using cannabis?", type: "radio_group", options: ["Yes", "No", "Prefer not to say"],
    
  },
  { id: "nauseavomit_stresstrigger", label: "Does stress or anxiety make it worse?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_frequency", label: "How many times have you vomited?", type: "number",
    
  },
  { id: "nauseavomit_lastvomit", label: "When was the last time you vomited?", type: "radio_group", options: ["Just now", "Within 1 hour", "Today", "Yesterday"],
    
  },
  { id: "nauseavomit_amount", label: "How much do you usually vomit each time?", type: "radio_group", options: ["Small", "Moderate", "Large"],
    
  },
  { id: "nauseavomit_intractable", label: "Have you been vomiting repeatedly and unable to keep anything down?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_projectile", label: "Does the vomit come out forcefully?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_preceded", label: "Do you feel nauseated before vomiting?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_content", label: "What does the vomit look like?", type: "colour", colourType: "vomit", options: ["Food", "Clear fluid","Yellow-green","Dark like coffee grounds","Fresh blood", "Not sure"],
    
  },
  { id: "nauseavomit_haematemesis", label: "Have you vomited fresh blood?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_coffeeground", label: "Did your vomit look dark or like coffee grounds?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_feculent", label: "Did the vomit smell or look like stool?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_oldfood", label: "Have you vomited food eaten many hours earlier?", type: "yes_no_toggle",
    
  },
  { id: "nauseavomit_hotshowersrelief", label: "Does taking a hot shower help the nausea or vomiting?", type: "yes_no_toggle",
    
  },
];

// SyncopeGeneral.js
const SyncopeGeneral = [
  { id: "syncopegen_firstepisodes", label: "Is this your first episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_similarepisodes", label: "Have you had similar episodes before?", type: "yes_no_toggle",
    showIf: (a) => a.syncopegen_firstepisodes == "No"
  },
  { id: "syncopegen_timesinceevent", label: "When did this happen?", type: "radio_group", options: ["<3h", "3-6h", "6-12h", ">12h"],
    
  },
  { id: "syncopegen_onsettype", label: "When did this happen?", type: "radio_group", options: ["Sudden", "Gradual"],
    
  },
  { id: "syncopegen_lossduration", label: "About how long were you unconscious?", type: "radio_group", options: ["Seconds", "Minutes", ">5minutes"],
    
  },
  { id: "syncopegen_recovery", label: "Did you recover quickly or take time to recover?", type: "radio_group", options: ["Rapid", "Took time"],
    
  },
  { id: "syncopegen_posteventconfusion", label: "Were you confused after waking up?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_position", label: "What were you doing when it happened?", type: "radio_group", options: ["Standing", "Sitting", "Lying down"],
    
  },
  { id: "syncopegen_activity", label: "What were you doing just before it happened?", type: "radio_group", options: ["Resting", "Physical activity", "After activity"],
    
  },
  { id: "syncopegen_postmicturition", label: "Did it happen after passing urine?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_defecation", label: "Did it happen during or after passing stool?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_coughtrigger", label: "Did it happen after coughing or sneezing?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_swallowtrigger", label: "Did it happen during swallowing?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_emotionaltrigger", label: "Did it happen during stress, pain, or emotional distress?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_heatexposure", label: "Were you in a hot environment?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_prolongedstanding", label: "Had you been standing for a long time?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_neckmovement", label: "Did it happen when turning your neck or shaving?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_lightheadedness", label: "Did you feel dizzy or lightheaded before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_visionchange", label: "Did your vision become blurred or dark before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_nausea", label: "Did you feel nauseated before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_sweating", label: "Did you have sweating before fainting?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_palpitations", label: "Did you feel your heart racing before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_chestpainpresence", label: "Did you have chest pain before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_weresob", label: "Were you short of breath before it happened?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_nowarning", label: "Did it happen suddenly without any warning?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_jerkingmovements", label: "Did your body jerk or shake during the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_tonguebiting", label: "Did you bite your tongue?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_incontinence", label: "Did you lose control of urine or stool?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_pallor", label: "Did you look pale during the episode?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    
  },
  { id: "syncopegen_cyanosis", label: "Did you turn blue during the episode?", type: "radio_group", options: ["Yes", "No", "Not sure"],
    
  },
  { id: "syncopegen_injury", label: "Did you injure yourself when you fell?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_headinjury", label: "Did you hit your head?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_fullrecovery", label: "Did you return to normal quickly?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_drowseeness", label: "Did you feel very sleepy afterwards?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_headache", label: "Did you have a headache after the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_weaknesswaking", label: "Did you notice any weakness after waking up?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_epispeechdifficulty", label: "Did you have difficulty speaking after the episode?", type: "yes_no_toggle",
    
  },
  { id: "syncopegen_visionloss", label: "Did you have any vision problems after the episode?", type: "yes_no_toggle",
    
  },
];

function convertToWorkbook(datasets, fileName) {
  const wb = XLSX.utils.book_new();

  Object.entries(datasets).forEach(([sheetName, data]) => {
    const formatted = data.map(q => ({
      ID: q.id,
      Label: q.label,
      Type: q.type,
      Options: q.options ? q.options.join(" | ") : "",
      ShowIf: q.showIf ? q.showIf.toString() : "",
      Extra: q.colourType || ""
    }));

    const ws = XLSX.utils.json_to_sheet(formatted);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  });

  XLSX.writeFile(wb, fileName);
}

// 🚀 Run ALL in one Excel file
convertToWorkbook(
  {
    FeverGeneral,
    ChestPainGeneral,
    DizzinessGeneral,
    HeadacheGeneral,
    NauseaVomitGeneral,
    SyncopeGeneral
  },
  "GeneralQuestions.xlsx"
);