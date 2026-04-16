// Social Module
export const SocialModule = [
    { id: "soc_recentadmission", label: "Have you been admitted to hospital within the last 1 month?", type: "yes_no_toggle"},
    { id: "soc_sickcontact", label: "Have you been in contact with anyone who is unwell within last 2 weeks?", type: "yes_no_toggle"},
    { id: "soc_travel", label: "Have you travelled overseas in the last 1 month?", type: "yes_no_toggle"},
    { id: "soc_swimming", label: "Have you been swimming in a lake or river in the last 1 month?", type: "yes_no_toggle"},
    { id: "soc_devices", label: "Do you have any of the following medical devices in your body?", type: "checkbox_group", options: ["Urinary catheter (tube to pass urine)", "Feeding tube","Line or tube for medication or dialysis","Prosthetic heart valve","Implanted pacemaker", "None of these"] },
];