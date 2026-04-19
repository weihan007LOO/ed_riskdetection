# ED Risk Detection - Medical History Taking System

A smart, interactive health assessment system designed to guide users through a structured medical history interview. This application helps capture patient symptoms, medical history, and demographic information efficiently and intuitively.

## 🚀 Overview

The **ED Risk Detection** app is built to bridge the gap between patient arrival and clinical assessment. By using intelligent branching logic and interactive visual aids, it ensures that doctors receive structured, high-quality data before the initial consultation.

### Key Features

✨ **Core Features:**
- **Dynamic Triage Logic**: Questions adapt in real-time based on the patient's selected chief complaints and previous answers.
- **Interactive Body Maps**: Clinical maps (Silhouette, Head, Abdomen, Chest) allow patients to precisely locate pain points.
- **Systematic Symptom Review**: Associated symptoms are organized by physiological systems (Respiratory, GI, Neuro, etc.).
- **Voice Integration**: Supports hands-free input for additional notes using the Web Speech API.
- **Medical UI Components**: Custom-built components for clinical data such as pain scales (1-10), color indicators (vomit/phlegm), and multi-select medical checklists.
- **Welcome Screen**: Patient consent and privacy information.
- **Detail Page**: Comprehensive view of collected information.
- **Export Capabilities**: Utility to export the entire clinical question bank to Excel format for auditing and review.

## 🛠️ Tech Stack

- **Frontend**: React 19 (Vite)
- **Styling**: Vanilla CSS
- **Icons**: Lucide React
- **Data Handling**: Axios
- **Parsing**: PapaParse (CSV), SheetJS (XLSX)

## 📁 Project Structure

```text
ed_riskdetection/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Custom Medical UI components (Maps, Inputs, etc.)
│   │   ├── pages/          # Layouts for Welcome and Detail pages
│   │   ├── questionBank/   # Data definitions for triage logic (Modular JS)
│   │   └── App.jsx         # Main application flow and state management
│   ├── General.js          # Export script for Question Bank to Excel
│   └── GeneralQuestions.xlsx # Generated question bank documentation
└── vercel.json             # Deployment configuration
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

1. **Start the development server:**
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

### Exporting Question Bank

To update the `GeneralQuestions.xlsx` file based on the latest JavaScript question definitions:
1. Ensure the `General.js` file is updated.
2. Run the script using Node:
   ```bash
   node General.js
   ```

## 🔒 Security & Privacy

This application is designed for history-taking. In a production environment, ensure that:
- API endpoints are secured with appropriate keys.
- Patient data is handled in compliance with local healthcare regulations (e.g., HIPAA).

---

Built with ❤️ by the IDP Risk Detection Team.
