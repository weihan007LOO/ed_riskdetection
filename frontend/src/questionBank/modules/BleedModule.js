export const BleedModule = [
  { id: "prom_bleeding", type: "yes_no_toggle", required: true },
  { id: "confirm_bleeding", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "bleed_01", type: "radio_group", options: ["Nosebleed", "Mouth or gums", "Vomiting blood", "When passing motion (stools)", "In the urine", "Vaginal bleeding", "From a wound or cut", "From a skin ulcer or sore", "Not sure"] },
  { id: "bleed_02", type: "radio_group", options: ["After an injury or cut", "After a medical or dental procedure", "From an existing wound or skin ulcer", "Started on its own", "Not sure"] },
  { id: "bleed_03", type: "number" },
  { id: "bleed_04", type: "radio_group", options: ["Stopped", "Still bleeding", "Not sure"] },

  { id: "bleed_screen01", type: "yes_no_toggle" },
  { id: "bleed_screen02", type: "yes_no_toggle" },
  { id: "bleed_screen03", type: "yes_no_toggle" },
  { id: "bleed_screen04", type: "radio_group", options: ["Yes", "No", "Not applicable"] },
  { id: "bleed_screen05", type: "yes_no_toggle" },
  { id: "bleed_screen06", type: "yes_no_toggle" },
  { id: "bleed_screen07", type: "yes_no_toggle" },
  { id: "bleed_screen08", type: "yes_no_toggle" }
];