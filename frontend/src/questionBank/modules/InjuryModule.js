export const InjuryModule = [
  { id: "prom_injury", type: "yes_no_toggle", required: true },
  { id: "confirm_injury", type: "radio_group", options: ["Remove", "Proceed"], required: true },

  { id: "inj_01", type: "body_map" },
  { id: "inj_02", type: "yes_no_toggle" },
  { id: "inj_03", type: "range" },
  { id: "inj_04", type: "number" },
  { id: "inj_05", type: "radio_group", options: ["Road accident", "Fall", "Hit by blunt object", "Sports injury", "Cut by sharp object", "Stab wound", "Burn", "Crush injury", "Other"] },
  { id: "inj_06", type: "radio_group", options: ["Yes", "No", "Not sure"] },

  { id: "inj_region01", type: "checkbox_group", options: ["Swelling", "Bruising", "Redness", "Abrasions (skin grazes)", "Loss of skin", "Laceration (cut)", "Open wound", "Puncture wound", "Bleeding", "Blisters", "Looks deformed or out of place"] },
  { id: "inj_region02", type: "yes_no_toggle" },
  { id: "inj_region03", type: "yes_no_toggle" },
  { id: "inj_region04", type: "radio_group", options: ["Yes", "No", "Not sure"] },

  { id: "inj_eye00", type: "yes_no_toggle" },
  { id: "inj_eye01", type: "radio_group", options: ["Something hit the eye", "Something entered the eye (dust, metal, etc)", "Chemical or cleaning liquid got into the eye"] },
  { id: "inj_eye02", type: "yes_no_toggle" },
  { id: "inj_eye021", type: "yes_no_toggle" },
  { id: "inj_eye03", type: "yes_no_toggle" },
  { id: "inj_eye04", type: "yes_no_toggle" }
];