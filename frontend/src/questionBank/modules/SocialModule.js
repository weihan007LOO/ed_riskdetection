// Social Module
export const SocialModule = [
  { id: "soc_gen01", type: "radio_group", options: ["Never", "Used to smoke", "Currently smoke"] },
  { id: "soc_gen011", type: "number" },
  { id: "soc_gen012", type: "number" },
  { id: "soc_gen013", type: "number" },

  { id: "soc_gen02", type: "radio_group", options: ["No", "Occasionally", "Regularly"] },
  { id: "soc_gen021", type: "radio_group", options: ["Once a month or less", "2-4 times a month", "2-3 times a week", "4 or more times a week"] },

  { id: "soc_gen03", type: "radio_group", options: ["Alone", "With family", "With friends or others"] },
  { id: "soc_gen04", type: "radio_group", options: [
    "I am very fit and active. I exercise regularly.",
    "I am well and active, but do not exercise regularly.",
    "I manage well but sometimes feel slowed down or tired.",
    "I need help with some activities (e.g. shopping, housework).",
    "I need help with most daily activities (e.g. bathing, dressing).",
    "I am mostly dependent on others for my care.",
    "I am completely dependent or bedbound."
  ] }
];