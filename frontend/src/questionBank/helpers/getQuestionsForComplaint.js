// helpers/getQuestionsForComplaint.js

import { FeverGeneral } from '../general/FeverGeneral';
import { HeadacheGeneral } from '../general/HeadacheGeneral';
import { ChestPainGeneral } from '../general/ChestPainGeneral';
import { DizzinessGeneral } from '../general/DizzinessGeneral';
import { SyncopeGeneral } from '../general/SyncopeGeneral';
import { NauseaVomitGeneral } from '../general/NauseaVomitGeneral';

import { RespModule } from '../modules/RespModule';
import { UriModule } from '../modules/UriModule';
import { GIModule } from '../modules/GIModule';
import { SkinModule } from '../modules/SkinModule';
import { NeuroModule } from '../modules/NeuroModule';
import { EntModule } from '../modules/EntModule';
import { EyeModule } from '../modules/EyeModule';
import { ChestModule } from '../modules/ChestModule';
import { DizzyModule } from '../modules/DizzyModule';
import { SyncopeModule } from '../modules/SyncopeModule';
import { GynModule } from '../modules/GynModule';
import { NVModule } from '../modules/NVModule';
import { MedModule } from '../modules/MedModule';
import { HeadModule } from '../modules/HeadModule';
import { FeverModule } from '../modules/FeverModule';
import { SocialModule } from '../modules/SocialModule';
import { SysModule } from '../modules/SysModule';
import { PainGeneral } from '../modules/PainGeneral';

import { MedicalHistory } from '../history/MedicalHistory';
import { SocialHistory } from '../history/SocialHistory';

export const getQuestionsForComplaint = (answers) => {
  let questions = [];

  const complaints = answers.chiefComplaints || [];

  // Fever
  if (complaints.includes("Fever")) {
    questions.push(...FeverGeneral);
    questions.push(...RespModule.slice(0, 6));      //Cough--
    questions.push(RespModule[7]);      //SOB
    questions.push(RespModule[8]);      //Sever dyspnoea
    questions.push(UriModule[0]);       //Dysuria
    questions.push(UriModule[1]);       //Frequency
    questions.push(UriModule[2]);       //Flank pain
    questions.push(...GIModule.slice(0, 2));        //Abdominal pain--
    questions.push(PainGeneral[3]);     //Pain score
    questions.push(PainGeneral[5]);     //Pain character
    questions.push(PainGeneral[6]);     //Pain time course
    questions.push(GIModule[2]);        //Diarrhoea
    questions.push(GIModule[3]);        //Vomiting
    questions.push(...SkinModule.slice(0, 3));      //Redness/swelling--
    questions.push(...SkinModule.slice(3, 5));      //Rash--
    questions.push(HeadModule[8]);      //Do you have headache?
    questions.push(NeuroModule[0]);     //Neck stiffness
    questions.push(NeuroModule[1]);     //Photophobia
    questions.push(NeuroModule[2]);     //Confusion
    questions.push(NeuroModule[3]);     //Seizure
    questions.push(EntModule[0]);       //Sore throat
    questions.push(EntModule[1]);       //Voice
    questions.push(EntModule[2]);       //Stridor/wheeze
    questions.push(SysModule[0]);       //Appetite
    questions.push(SysModule[1]);       //Weight loss
    questions.push(SocialModule[0]);    //Recent admission
    questions.push(SocialModule[1]);    //Sick contact
    questions.push(SocialModule[2]);    //Travel
    questions.push(SocialModule[3]);    //Swimming
    questions.push(SocialModule[4]);    //Devices
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }

  // Headache
  if (complaints.includes("Headache")) {
    questions.push(...HeadacheGeneral);
    questions.push(NeuroModule[0]);     //NeckStiffness
    questions.push(FeverModule[0]);     //Have you had a Fever?
    questions.push(NeuroModule[2]);     //Confusion
    questions.push(NeuroModule[3]);     //Seizure
    questions.push(NeuroModule[4]);     //Weakness
    questions.push(NeuroModule[5]);     //Speech Difficulty
    questions.push(EyeModule[0]);       //Vision Loss
    questions.push(HeadModule[0]);      //Wake from Sleep
    questions.push(HeadModule[1]);      //Cough/strain trigger
    questions.push(HeadModule[2]);      //Postural change
    questions.push(NeuroModule[6]);     //Body weakness
    questions.push(NeuroModule[7]);     //Numbness
    questions.push(NeuroModule[8]);     //Balance
    questions.push(HeadModule[3]);      //Photophobia
    questions.push(HeadModule[4]);      //Phonophobia
    questions.push(GIModule[4]);        //Nausea
    questions.push(GIModule[3]);        //Vomiting
    questions.push(EyeModule[1]);       //Blurred vision
    questions.push(EyeModule[2]);       //Double vision
    questions.push(EyeModule[3]);       //Eye pain
    questions.push(HeadModule[5]);      //Jaw pain chewing
    questions.push(HeadModule[6]);      //Scalp tenderness
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }

  // Chest Pain
  if (complaints.includes("Chest pain")) {
    questions.push(...ChestPainGeneral);
    questions.push(ChestModule[0]);     //Sweating
    questions.push(GIModule[4]);        //Nausea
    questions.push(GIModule[3]);        //Vomiting
    questions.push(RespModule[7]);      //SOB
    questions.push(RespModule[8]);      //Sever dyspnoea
    questions.push(ChestModule[1]);     //Palpitations
    questions.push(ChestModule[2]);     //Syncope
    questions.push(RespModule[3]);      //Blood in sputum
    questions.push(RespModule[0]);      //Cough
    questions.push(FeverModule[0]);     //Have you had a Fever?
    questions.push(NeuroModule[4]);     //Weakness
    questions.push(NeuroModule[5]);     //Speech Difficulty
    questions.push(NeuroModule[2]);     //Confusion
    questions.push(GIModule[5]);        //Acid reflux
    questions.push(GIModule[6]);        //Epigastric pain
    questions.push(GIModule[7]);        //Dysphagia
    questions.push(GIModule[8]);        //Odynophagia
    questions.push(ChestModule[3]);     //Forceful vomiting
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }

  // Dizziness
  if (complaints.includes("Dizziness")) {
    questions.push(...DizzinessGeneral);
    questions.push(DizzyModule[0]);     //Tinnitus
    questions.push(DizzyModule[1]);     //Hearing loss
    questions.push(DizzyModule[2]);     //Ear fullness
    questions.push(DizzyModule[3]);     //Ear pain
    questions.push(EyeModule[2]);       //Double vision
    questions.push(NeuroModule[5]);     //Speech Difficulty
    questions.push(NeuroModule[9]);     //Swallowing Difficulty
    questions.push(NeuroModule[4]);     //Weakness
    questions.push(NeuroModule[7]);     //Numbness
    questions.push(NeuroModule[8]);     //Balance
    questions.push(HeadModule[8]);      //Do you have headache?
    questions.push(HeadModule[7]);      //Worst Ever
    questions.push(GIModule[4]);        //Nausea
    questions.push(GIModule[3]);        //Vomiting
    questions.push(DizzyModule[4]);     //Sweating
    questions.push(DizzyModule[5]);     //Neck pain
    questions.push(SyncopeModule[0]);   //Head injury
    questions.push(ChestModule[1]);     //Palpitations
    questions.push(ChestModule[6]);     //Do you have chest pain?
    questions.push(RespModule[7]);      //SOB
    questions.push(SyncopeModule[3]);   //Did you faint or lose consciousness?
    questions.push(FeverModule[0]);     //Have you had a Fever?
    questions.push(RespModule[0]);      //Cough
    questions.push(DizzyModule[6]);     //Recent illness
    questions.push(HeadModule[3]);      //Photophobia
    questions.push(HeadModule[4]);      //Phonophobia
    questions.push(DizzyModule[7]);     //Visual aura
    questions.push(DizzyModule[8]);     //Migraine history
    questions.push(MedicalHistory[1]);  //New medications
    questions.push(DizzyModule[9]);     //Alcohol
    questions.push(MedModule[0]);       //Drug exposure
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }

  // Fainting/Blackout
  if (complaints.includes("Fainting/Blackout")) {
    questions.push(...SyncopeGeneral);
    questions.push(ChestModule[6]);     //Do you have chest pain?
    questions.push(ChestModule[1]);     //Palpitations
    questions.push(RespModule[7]);      //SOB
    questions.push(ChestModule[4]);     //Back pain
    questions.push(ChestModule[5]);     //Tearing pain
    questions.push(NeuroModule[6]);     //Body weakness
    questions.push(NeuroModule[5]);     //Speech Difficulty
    questions.push(NeuroModule[2]);     //Confusion
    questions.push(NeuroModule[8]);     //Balance
    questions.push(FeverModule[0]);     //Have you had a Fever?
    questions.push(SyncopeModule[1]);   //Hypoglycaemia symptoms
    questions.push(GynModule[0]);       //Pregnancy chance
    questions.push(SyncopeModule[2]);   //Recent trauma
    questions.push(MedModule[1]);       //Anticoagulants
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }

  // Nausea/Vomiting
  if (complaints.includes("Nausea/Vomiting")) {
    questions.push(...NauseaVomitGeneral);
    questions.push(...GIModule.slice(0, 2));        //Abdominal pain--
    questions.push(PainGeneral[5]);     //Pain character
    questions.push(PainGeneral[7]);     //Colicky
    questions.push(...GIModule.slice(8, 15));        //Abdominal distension -> Melena--
    questions.push(HeadModule[8]);      //Do you have headache?
    questions.push(HeadModule[5]);      //Worst Ever
    questions.push(NeuroModule[0]);     //Neck stiffness
    questions.push(NeuroModule[2]);     //Confusion
    questions.push(NeuroModule[4]);     //Weakness
    questions.push(NeuroModule[5]);     //Speech Difficulty
    questions.push(NVModule[0]);        //Vertigo
    questions.push(NVModule[1]);        //Unsteady balance
    questions.push(ChestModule[6]);     //Do you have chest pain?
    questions.push(RespModule[7]);      //SOB
    questions.push(ChestModule[1]);     //Palpitations
    questions.push(ChestModule[2]);     //Syncope
    questions.push(NVModule[2]);        //Polyuria
    questions.push(NVModule[3]);        //Polydipsia
    questions.push(FeverModule[0]);     //Have you had a Fever?
    questions.push(NVModule[4]);        //Chills
    questions.push(SysModule[1]);       //Weight loss
    questions.push(NVModule[5]);        //Dizziness standing
    questions.push(GynModule[0]);       //Pregnancy chance
    questions.push(GynModule[1]);       //Missed period
    questions.push(GynModule[2]);       //Pelvic pain
    questions.push(GynModule[3]);       //Vaginal bleeding
    questions.push(UriModule[0]);       //Dysuria
    questions.push(UriModule[1]);       //Frequency
    questions.push(UriModule[2]);       //Flank pain
    questions.push(GynModule[4]);       //Testicular pain
    questions.push(...MedicalHistory);
    questions.push(...SocialHistory);
  }


  // Later you can expand:
  // if (complaints.includes("Chest Pain")) { ... }

  const uniqueQuestions = [];
  const seen = new Set();

  questions.forEach(q => {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      uniqueQuestions.push(q);
    }
  });

  return uniqueQuestions;
};