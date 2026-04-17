// helpers/getQuestionsForComplaint.js

import { RespModule } from '../modules/RespModule';
import { GUModule } from '../modules/GuModule';
import { BackModule } from '../modules/BackModule';
import { LimbModule } from '../modules/LimbModule';
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


export const getQuestionsForComplaint = (answers) => {
  let questions = [];

  const complaints = answers.chiefComplaints || [];

  let currentComplaint = null;

  const setComplaint = (c, callback) => {
    currentComplaint = c;
    callback();
    currentComplaint = null;
  };

  const findQuestion = (id) => {
    return (
      FeverModule.find(x => x.id === id) ||
      RespModule.find(x => x.id === id) ||
      GIModule.find(x => x.id === id) ||
      NeuroModule.find(x => x.id === id) ||
      SkinModule.find(x => x.id === id) ||
      SysModule.find(x => x.id === id) ||
      HeadModule.find(x => x.id === id) ||
      ChestModule.find(x => x.id === id) ||
      GUModule.find(x => x.id === id) ||
      EntModule.find(x => x.id === id) ||
      EyeModule.find(x => x.id === id) ||
      LimbModule.find(x => x.id === id) ||
      BackModule.find(x => x.id === id) ||
      DizzyModule.find(x => x.id === id) ||
      SyncopeModule.find(x => x.id === id) ||
      GynModule.find(x => x.id === id) ||
      NVModule.find(x => x.id === id) ||
      MedModule.find(x => x.id === id) ||
      SocialModule.find(x => x.id === id)
    );
  };

  const add = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "general",
      complaint: currentComplaint
    });
  };

  const add1 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module1",
      complaint: currentComplaint
    });
  };

  const add2 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module2",
      complaint: currentComplaint
    });
  };

  const add3 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module3",
      complaint: currentComplaint
    });
  };

  const add4 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module4",
      complaint: currentComplaint
    });
  };

  const add5 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module5",
      complaint: currentComplaint
    });
  };

  const add6 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module6",
      complaint: currentComplaint
    });
  };

  const add7 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "medical",
      complaint: "global"
    });
  };

  const add8 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "social",
      complaint: "global"
    });
  };

  // Fever
  if (complaints.includes("Fever")) {
    setComplaint("Fever", () => {
    //General
    add("fever_002");
    add("fever_003");
      if (Number(answers.fever_002) >= 14){
    add("fever_004");}
    add("fever_005");
      if (answers.fever_005 === "Yes"){ 
    add("fever_005a");}
    //Module1
    add1("resp_001");
    add1("resp_002");
    add1("ent_001");
    add1("resp_003");
      if (answers.resp_003 === "Yes"){ 
    add1("resp_004");
        if (answers.resp_004 === "Yes"){
    add1("resp_005");
    add1("resp_006");
    add1("resp_007");
    add1("resp_008");}}
    add1("ent_002");
    add1("ent_003");
    //Module2
    add2("gu_001");
    add2("gu_002");
    add2("gu_005");
    //Module3
    add3("gi_001");
      if (answers.gi_001 === "Yes"){
    add3("gi_002");
    add3("gi_003");
    add3("gi_004");
    add3("gi_005");}
    add3("gi_006");
      if (answers.gi_006 === "Yes"){
    add3("gi_007");}
    add3("gi_008");
      if (answers.gi_008 === "Yes"){
    add3("gi_009");}
    //Module4
    add4("skin_001");
      if (answers.skin_001 === "Yes"){
    add4("skin_002");
    add4("skin_003");}
    add4("skin_004");
      if (answers.skin_004 === "Yes"){
    add4("skin_005");}
    //Module5
    add5("head_001");
    add5("neuro_001");
    add5("neuro_002");
    add5("neuro_003");
    add5("neuro_004");
    //Module6
    add6("sys_001");
    add6("sys_002");
    add6("fever_004");
    //Medical
    add7("med_001");
      if (answers.med_001 === "Yes"){
    add7("med_003");
    add7("med_004");
    add7("med_005");
    add7("med_006");
    add7("med_007");
    add7("med_008");
    add7("med_009");}
    add7("med_010");
    add7("med_011");
      if (answers.med_011 === "Yes"){
    add7("med_012");
    add7("med_013");
    add7("med_014");}
    add7("med_016");
    add7("med_019");
    add7("med_020");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occassionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Headache
  if (complaints.includes("Headache")) {
    setComplaint("Headache", () => {
    //General
    add("head_002");
    add("head_003");
    add("head_004");
      if (answers.head_004 === "No"){ 
    add("head_005");}
    add("head_006");
    add("head_007");
    add("head_008");
    add("head_009");
    add("head_010");
    add("head_011");
    add("head_012");
    add("head_013");
    add("head_014");
    add("head_015");
    add("head_016");
    //Module1
    add1("fever_001");
      if (answers.fever_001 === "Yes"){ 
    add1("fever_003");}
    add1("neuro_001");
    add1("neuro_003");
    add1("neuro_004");
    add1("neuro_005");
    add1("neuro_006");
    add1("eye_001");
    add1("neuro_007");
    add1("neuro_008");
    add1("neuro_009");
    add1("gi_010");
    add1("gi_008");
    add1("eye_002");
    add1("eye_003");
    add1("eye_004");
    add1("head_017");
    add1("head_018");
    //Medical
    add7("med_001");
      if (answers.med_001 === "Yes"){
    add7("med_003");
    add7("med_004");
    add7("med_005");
    add7("med_006");
    add7("med_007");
    add7("med_008");
    add7("med_009");}
    add7("med_011");
      if (answers.med_011 === "Yes"){
    add7("med_012");
    add7("med_013");
    add7("med_014");}
    add7("med_015");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occassionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Chest Pain
  if (complaints.includes("Chest pain")) {
  }

  // Dizziness
  if (complaints.includes("Dizziness")) {
  }

  // Fainting/Blackout
  if (complaints.includes("Fainting/Blackout")) {
  }

  // Nausea/Vomiting
  if (complaints.includes("Nausea/Vomiting")) {
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