export const GUModule = [
  // ======================
  // GENERAL URINARY
  // ======================
  { id: "prom_gu", type: "yes_no_toggle" },
  { id: "confirm_gu", type: "radio_group", options: ["Remove", "Proceed"] },
  { id: "gu_01", type: "yes_no_toggle" },
  { id: "gu_02", type: "yes_no_toggle" },
  { id: "gu_021", type: "number" },
  { id: "gu_03", type: "radio_group", options: ["More often", "Less amount", "About the same"] },
  { id: "gu_031", type: "number" },
  { id: "gu_04", type: "yes_no_toggle" },
  { id: "gu_041", type: "number" },
  { id: "gu_05", type: "yes_no_toggle" },
  { id: "gu_051", type: "number" },
  { id: "gu_06", type: "yes_no_toggle" },
  { id: "gu_061", type: "number" },
  { id: "gu_07", type: "radio_group", options: ["Yes (left side)", "Yes (right side)", "No"] },
  { id: "gu_071", type: "radio_group", options: ["Constant", "Comes in waves"] },
  { id: "gu_072", type: "yes_no_toggle" },
  { id: "gu_08", type: "yes_no_toggle" },
  { id: "gu_09", type: "yes_no_toggle" },
  { id: "gu_091", type: "text" },
  { id: "gu_10", type: "yes_no_toggle" },
  { id: "gu_11", type: "yes_no_toggle" },

  // ======================
  // CATHETER (CBD)
  // ======================
  { id: "gu_cbd01", type: "yes_no_toggle" },
  { id: "gu_cbd011", type: "number" },
  { id: "gu_cbd02", type: "radio_group", options: ["More", "Less", "Same", "Not sure"] },
  { id: "gu_cbd021", type: "number" },
  { id: "gu_cbd03", type: "yes_no_toggle" },
  { id: "gu_cbd031", type: "number" },
  { id: "gu_cbd04", type: "yes_no_toggle" },
  { id: "gu_cbd041", type: "number" },

  // ======================
  // TESTICULAR PAIN
  // ======================
  { id: "gu_tes01", type: "yes_no_toggle" },
  { id: "gu_tes011", type: "radio_group", options: ["Right side", "Left side", "Both sides"] },
  { id: "gu_tes012", type: "radio_group", options: ["Sudden", "Gradual"] },
  { id: "gu_tes013", type: "number" },
  { id: "gu_tes014", type: "range" },
  { id: "gu_tes015", type: "radio_group", options: ["Sudden", "Gradual"] },

  // ======================
  // TESTICULAR SWELLING
  // ======================
  { id: "gu_tes02", type: "yes_no_toggle" },
  { id: "gu_tes021", type: "radio_group", options: ["Right side", "Left side", "Both sides"] },
  { id: "gu_tes022", type: "radio_group", options: ["Sudden", "Gradual"] }
];
