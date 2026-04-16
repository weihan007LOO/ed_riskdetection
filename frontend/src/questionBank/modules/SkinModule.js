// Skin Module
export const SkinModule = [
  { id: "skin_redness", label: "Do you have any red or swollen areas on your skin?", type: "yes_no_toggle"},
  { id: "skin_rednesslocation", label: "Where is the redness or swelling?", type: "body_map" ,
    showIf: (a) => a.skin_redness === "Yes"
  },
  { id: "skin_abscess", label: "Do you notice any swelling with pus?", type: "yes_no_toggle" ,
    showIf: (a) => a.skin_redness === "Yes"
  },
  { id: "skin_rash", label: "Do you notice any rash?", type: "yes_no_toggle"},
  { id: "skin_rashlocation", label: "Where is the rash?", type: "body_map" ,
    showIf: (a) => a.skin_rash === "Yes"
  },
];