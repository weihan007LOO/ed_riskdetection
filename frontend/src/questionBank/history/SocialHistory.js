// Social History
export const SocialHistory = [
  { id: "social_smoke", label: "Do you smoke or have you smoked cigarettes before?", type: "radio_group", options: ["Never", "Used to smoke", "Currently smoke"] },
  { id: "social_smokeamount", label: "About how many cigarettes per day?", type: "number",
    showIf: (a) => a.social_smoke === "Used to smoke" && a.social_smoke === "Current smoke"
  },
  { id: "social_smokestop", label: "When did you stop smoking?", type: "number",
    showIf: (a) => a.social_smoke === "Used to smoke"
  },
  { id: "social_smokeyears", label: "For how many years have you smoked?", type: "number",
    showIf: (a) => a.social_smoke === "Used to smoke" && a.social_smoke === "Current smoke"
  },
  { id: "social_alcohol", label: "Do you drink alcohol?", type: "radio_group", options: ["No", "Occasionally", "Regularly"] },
  { id: "social_alcoholfrequency", label: "How often do you usually drink alcohol?", type: "radio_group", options: ["Once a month or less", "2-4 times a month", "2-3 times a week", "4 or more times a week"],
    showIf: (a) => a.social_alcohol === "Occasionally" && a.social_smoke === "Regularly"
  },
  { id: "social_livingsituation", label: "Who do you live with?", type: "radio_group", options: ["Alone", "With family", "With friends or others"] },
  { id: "social_functionalstatus", label: "Which of the following best describes you before this illness?", type: "radio_group", options: ["I am very fit and active. I exercise regularly", "I am well and active, but do not exercise regularly", "I manage well but sometimes feel slowed down or tired", "I need help with some activities (e.g. shopping, housework)", "I need help with most daily activities (e.g. bathing, dressing)", "I am mostly dependent on others for my care", "I am completely dependent or bedbound"] },
];