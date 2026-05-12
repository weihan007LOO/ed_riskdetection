export const ChiefComplaints1 = [
  { name: "Fever", icon: "🤒" },
  { name: "Shortness of breath", icon: "🌬️" },
  { name: "Headache", icon: "🤕" },
  { name: "Chest pain", icon: "❤️" },
  { name: "Dizziness", icon: "😵" },
  { name: "Eye problem", icon: "👁️" },
  { name: "Nausea/Vomiting", icon: "🤮" },
  { name: "Cough/Sore throat", icon: "😷" },
  { name: "Diarrhoea", icon: "🚽" },
  { name: "Stomach/Abdominal pain", icon: "🤢" },
  { name: "Weakness or numbness", icon: "🧘" },
  { name: "Fainting/Blackout", icon: "😴" },
  { name: "Muscle, Back, or Joint pain", icon: "🦵" },
  { name: "Feeling generally unwell", icon: "🤧" },
  { name: "Skin problem", icon: "🧼" },
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
  Droplet,
  Droplets,
  Ear,
  Bandage,
  RotateCcw,
  ArrowDown
} from 'lucide-react';

import { Lungs, Coughing, Vomiting, Diarrhea, SkinCancerOutline, SlingOutline, BackPain, Bladder, DiabetesOutline, EarsNoseAndThroatOutline } from 'healthicons-react';

export const ChiefComplaints = [
  { name: "Fever", icon: Thermometer, type: "lucide" },
  { name: "Shortness of breath", icon: Wind, type: "lucide" },
  { name: "Headache", icon: Brain, type: "lucide" },
  { name: "Chest pain", icon: HeartPulse, type: "lucide" },
  { name: "Dizziness", icon: Orbit, type: "lucide" },
  { name: "Eye problem", icon: Eye, type: "lucide" },
  { name: "Nausea/Vomiting", icon: Vomiting, type: "health" },
  { name: "Cough/Sore throat", icon: Coughing, type: "health" },
  { name: "Diarrhoea", icon: Diarrhea, type: "health" },
  { name: "Stomach/Abdominal pain", icon: Activity, type: "lucide" },
  { name: "Weakness or numbness", icon: Accessibility, type: "lucide" },
  { name: "Fainting/Blackout", icon: Moon, type: "lucide" },
  { name: "Muscle, Back, or Joint pain", icon: BackPain, type: "health" },
  { name: "Feeling generally unwell", icon: Frown, type: "lucide" },
  { name: "Skin problem", icon: SkinCancerOutline, type: "health" },
  { name: "Problem with passing urine", icon: Bladder, type: "health" },
  { name: "Bleeding", icon: DiabetesOutline, type: "health" },
  { name: "Injury", icon: SlingOutline, type: "health" },
  { name: "Ear, Nose, or Throat problem", icon: EarsNoseAndThroatOutline, type: "health" },
];