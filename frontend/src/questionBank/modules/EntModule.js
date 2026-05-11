// EarNoseThroat Module
export const EntModule = [
  { id: "prom_ent", type: "yes_no_toggle", required: true },
  { id: "confirm_ent", type: "radio_group", options: ["Remove", "Proceed"], required: true },

  { id: "ent_00", type: "radio_group", options: ["Ear or hearing problem", "Nose problem", "Throat problem"] },

  // Ear
  { id: "ent_ear01", type: "checkbox_group", options: ["Ear pain", "Discharge from the ear", "Reduced or muffled hearing", "Complete hearing loss", "Ringing sound in the ear", "Feeling of blockage or fullness", "Something entered or got stuck in the ear"] },
  { id: "ent_ear02", type: "number" },
  { id: "ent_ear03", type: "radio_group", options: ["Left", "Right", "Both"] },
  { id: "ent_ear04", type: "radio_group", options: ["Suddenly", "Gradually over time", "Comes and goes"] },
  { id: "ent_ear05", type: "radio_group", options: ["Object", "Insect", "Not sure"] },
  { id: "ent_ear06", type: "radio_group", options: ["Yes or possibly", "No"] },

  // Nose
  { id: "ent_nose01", type: "checkbox_group", options: ["Blocked nose", "Runny nose", "Nosebleed", "Pain in the nose", "Reduced or lost sense of smell", "Something entered or got stuck in the nose"] },
  { id: "ent_nose02", type: "number" },
  { id: "ent_nose03", type: "radio_group", options: ["Left", "Right", "Both"] },
  { id: "ent_nose04", type: "radio_group", options: ["Spontaneously", "After an injury"] },
  { id: "ent_nose05", type: "radio_group", options: ["Yes", "No"] },
  { id: "ent_nose06", type: "radio_group", options: ["Object", "Insect", "Not sure"] },

  // Throat
  { id: "ent_throat01", type: "checkbox_group", options: ["Sore throat", "Pain when swallowing", "Difficulty swallowing", "Feeling of something stuck in the throat", "Hoarse voice"] },
  { id: "ent_throat02", type: "number" },
  { id: "ent_throat03", type: "radio_group", options: ["Suddenly", "Gradually over time", "Comes and goes"] },
  { id: "ent_throat04", type: "radio_group", options: ["Fish bone", "Chicken bone", "Other object", "Not sure"] },
  { id: "ent_throat05", type: "radio_group", options: ["Able to swallow saliva", "Drooling saliva"] },
  { id: "ent_throat06", type: "radio_group", options: ["Liquids", "Solids"] },
  { id: "ent_throat07", type: "yes_no_toggle" }
];