export const MskModule = [
  { id: "prom_msk", type: "yes_no_toggle", required: true },
  { id: "confirm_msk", type: "radio_group", options: ["Remove", "Proceed"], required: true },

  { id: "msk_01", type: "checkbox_group", options: ["Pain at rest", "Pain on movement", "Swelling", "Stiffness", "Feels warm", "Reduced movement", "Weakness"] },
  { id: "msk_02", type: "body_map" },
  { id: "msk_03", type: "number" },
  { id: "msk_04", type: "radio_group", options: ["Yes", "No", "Not sure"] },
  { id: "msk_05", type: "yes_no_toggle" },
  { id: "msk_06", type: "yes_no_toggle" },
  { id: "msk_07", type: "radio_group", options: ["Yes", "No", "Not sure"] },
  { id: "msk_08", type: "radio_group", options: ["Yes", "No", "Not sure"] },
  { id: "msk_09", type: "radio_group", options: ["Yes", "With difficulty", "No"] },
  { id: "msk_10", type: "yes_no_toggle" }
];