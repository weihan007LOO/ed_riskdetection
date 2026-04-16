export const ChiefComplaints1 = [
  { name: "Fever", icon: "🤒" },
  { name: "Shortness of breath", icon: "🌬️" },
  { name: "Headache", icon: "🤕" },
  { name: "Chest pain", icon: "❤️" },
  { name: "Dizziness", icon: "😵" },
  { name: "Eye pain or redness", icon: "👁️" },
  { name: "Nausea/Vomiting", icon: "🤮" },
  { name: "Cough/Sore throat", icon: "😷" },
  { name: "Diarrhoea", icon: "🚽" },
  { name: "Stomach/Abdominal pain", icon: "🤢" },
  { name: "Back pain", icon: "🧘" },
  { name: "Fainting/Blackout", icon: "😴" },
  { name: "Limb pain (arm/leg pain)", icon: "🦵" },
  { name: "Feeling generally unwell", icon: "🤧" },
  { name: "Skin rashes", icon: "🧼" },
  { name: "Problem with passing urine", icon: "💧" },
];

import { 
  Thermometer, 
  Wind,          // instead of Lungs
  Brain, 
  HeartPulse,
  Orbit,
  Eye,
  Activity,
  Accessibility,
  Moon,
  Bone,
  Frown,
  Grid,
  Droplet
} from 'lucide-react';

export const ChiefComplaints = [
  { name: "Fever", icon: Thermometer },
  { name: "Shortness of breath", icon: Wind },
  { name: "Headache", icon: Brain },
  { name: "Chest pain", icon: HeartPulse },
  { name: "Dizziness", icon: Orbit },
  { name: "Eye pain or redness", icon: Eye },
  { name: "Nausea/Vomiting", icon: Activity },
  { name: "Cough/Sore throat", icon: Wind },
  { name: "Diarrhoea", icon: Droplet },
  { name: "Stomach/Abdominal pain", icon: Activity },
  { name: "Back pain", icon: Accessibility },
  { name: "Fainting/Blackout", icon: Moon },
  { name: "Limb pain (arm/leg pain)", icon: Bone },
  { name: "Feeling generally unwell", icon: Frown },
  { name: "Skin rashes", icon: Grid },
  { name: "Problem with passing urine", icon: Droplet }
];