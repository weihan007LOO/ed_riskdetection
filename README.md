# ED Risk Detection - Medical History Taking System

A smart, interactive health assessment system designed to guide users through a structured medical history interview. This application helps capture patient symptoms, medical history, and demographic information efficiently and intuitively.

## Overview

This is an intelligent questionnaire system that:
- Guides users through a quick (~3 minute) health assessment
- Captures chief complaints and related symptoms
- Collects medical history through interactive components
- Displays anatomical body maps for precise symptom location
- Maintains patient confidentiality and data security

## Features

✨ **Core Features:**
- **Chief Complaints Selection**: 16+ common medical complaints with visual indicators
- **Dynamic Questionnaire System**: Adaptive questions based on selected complaints
- **Anatomical Mapping**: 
  - Body silhouette for general pain location
  - Head map for head/neurological symptoms
  - Chest map for respiratory/cardiac symptoms
  - Abdomen map for GI symptoms
- **Interactive Components**:
  - Multi-select checkboxes
  - Radio button groups
  - Text inputs
  - Date pickers
  - Number inputs
  - Toggle switches
  - Color indicators
- **Modular Medical Knowledge Base**: Organized by symptom category (Fever, Respiratory, Neuro, Cardiac, GI, etc.)
- **Welcome Screen**: Patient consent and privacy information
- **Detail Page**: Comprehensive view of collected information

## Tech Stack

**Frontend:**
- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool and dev server
- **Lucide React** 1.7.0 - Icon library
- **Axios** 1.13.2 - HTTP client
- **PapaParse** 5.5.3 - CSV parsing
- **XLSX** 0.18.5 - Excel file support

**Styling:**
- CSS modules and vanilla CSS

## Project Structure

```
frontend/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── AbdomenMap.jsx      # Abdomen symptom mapper
│   │   ├── ChestMap.jsx        # Chest symptom mapper
│   │   ├── HeadMap.jsx         # Head symptom mapper
│   │   ├── SilhoutteMap.jsx    # Full body silhouette
│   │   ├── MedicalCheckboxGroup.jsx
│   │   ├── MedicalRadioGroup.jsx
│   │   ├── MedicalTextInput.jsx
│   │   ├── MedicalDateInput.jsx
│   │   ├── MedicalNumberInput.jsx
│   │   ├── MedicalToggle.jsx
│   │   └── MedicalColour.jsx
│   ├── pages/                   # Page components
│   │   ├── WelcomePage.jsx     # Entry point with consent
│   │   └── DetailPage.jsx      # Assessment details
│   ├── questionBank/            # Medical knowledge base
│   │   ├── chiefComplaints.js  # List of chief complaints
│   │   ├── index.js            # Main export
│   │   ├── helpers/            # Utility functions
│   │   │   ├── buildQuestions.js
│   │   │   ├── getQuestionsForComplaint.js
│   │   │   └── loadQuestionBank.js
│   │   └── modules/            # Symptom-specific modules
│   │       ├── FeverModule.js
│   │       ├── RespModule.js   # Respiratory
│   │       ├── ChestModule.js
│   │       ├── HeadModule.js
│   │       ├── DizzyModule.js  # Dizziness
│   │       ├── GIModule.js     # GI tract
│   │       ├── EyeModule.js
│   │       ├── EntModule.js    # ENT
│   │       ├── NVModule.js     # Nausea/Vomiting
│   │       ├── LimbModule.js
│   │       ├── BackModule.js
│   │       ├── SyncopeModule.js # Fainting
│   │       ├── SkinModule.js
│   │       ├── NeuroModule.js
│   │       ├── MedModule.js    # General medical
│   │       ├── ComoModule.js   # General unwellness
│   │       ├── GynModule.js    # Gynecological
│   │       ├── SysModule.js    # Systemic
│   │       ├── GuModule.js     # Genitourinary
│   │       └── SocialModule.js # Social history
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── DemographicBank.js      # Demographic questions
├── public/
│   └── question.csv             # Question data (CSV)
└── package.json

```

## Chief Complaints Supported

- 🤒 Fever
- 🌬️ Shortness of breath
- 🤕 Headache
- ❤️ Chest pain
- 😵 Dizziness
- 👁️ Eye pain or redness
- 🤮 Nausea/Vomiting
- 😷 Cough/Sore throat
- 🚽 Diarrhoea
- 🤢 Stomach/Abdominal pain
- 🧘 Back pain
- 😴 Fainting/Blackout
- 🦵 Limb pain (arm/leg pain)
- 🤧 Feeling generally unwell
- 🧼 Skin rashes
- 💧 Problem with passing urine

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd "IDP 2.3"
```

2. **Navigate to frontend:**
```bash
cd frontend
```

3. **Install dependencies:**
```bash
npm install
```

## Available Scripts

In the `frontend` directory, you can run:

### Development Server
```bash
npm run dev
```
Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Lint Code
```bash
npm run lint
```
Run ESLint to check code quality.

## Configuration Files

- **`vite.config.js`** - Vite build configuration
- **`eslint.config.js`** - ESLint rules for code quality
- **`vercel.json`** - Deployment configuration (Vercel)
- **`package.json`** - Project dependencies and scripts

## Usage

1. **Start the application:**
```bash
npm run dev
```

2. **Welcome Screen:**
   - User reads privacy information and consent terms
   - Clicks "Agree & Start" to proceed

3. **Chief Complaint Selection:**
   - User selects one or more chief complaints
   - System displays relevant anatomical maps if applicable

4. **Dynamic Assessment:**
   - Questions are generated based on selected complaints
   - Interactive components collect detailed information

5. **Review:**
   - Detail page shows collected assessment data

## Key Features Breakdown

### Anatomical Body Maps
- Interactive diagrams for precise symptom location
- Clickable regions provide visual feedback
- Color-coded indicators for severity or status

### Modular Question Bank
- Questions organized by medical specialty
- Contextual questions based on symptoms
- Data-driven from CSV or JavaScript modules

### Component Library
- Pre-built medical-specific form components
- Consistent styling across the application
- Accessible and user-friendly UI

## Data Privacy

✅ All data is handled according to medical privacy standards:
- Patient confidentiality is maintained
- No data is stored without consent
- Secure transmission protocols are used

## Future Enhancements

- [ ] Backend integration for data storage
- [ ] Risk assessment scoring algorithm
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Doctor review interface
- [ ] Patient history tracking

## Contributing

Please follow the ESLint configuration and maintain code consistency with the existing codebase.

## Support

For issues or questions, please contact the development team.

---

**Version:** 0.0.0  
**Last Updated:** 2026  
**License:** [Add your license here]
