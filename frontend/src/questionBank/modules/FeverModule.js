// Fever Module
export const FeverModule = [
  { id: "prom_fever", type: "yes_no_toggle", required: true },
  { id: "confirm_fever", type: "radio_group", options: ["Remove", "Proceed"], required: true },
  { id: "fever_01", type: "date" },          
  { id: "fever_02", type: "number" },          
  { id: "fever_03", type: "yes_no_toggle" },   
  { id: "fever_04", type: "yes_no_toggle" },  
  { id: "fever_041", type: "number" },        
  { id: "fever_05", type: "yes_no_toggle" },  
  { id: "fever_06", type: "yes_no_toggle" },  
  { id: "fever_07", type: "yes_no_toggle" },   
  { id: "fever_08", type: "yes_no_toggle" },   
];