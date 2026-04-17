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
import { ComoModule } from '../modules/ComoModule';
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
      ComoModule.find(x => x.id === id) ||
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
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
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
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Chest Pain
  if (complaints.includes("Chest pain")) {
    setComplaint("Chest pain", () => {
    //General
    add("chest_001");
      if (answers.chest_001 === "Yes"){
    add("chest_002");
    add("chest_003");
    add("chest_004");
    add("chest_005");
        if (answers.chest_005 === "Yes"){
    add("chest_006");}
    add("chest_007");
    add("chest_008");
    add("chest_009");}
      else if (answers.chest_001 === "No"){
    add("chest_002p");
    add("chest_003");
    add("chest_004");
    add("chest_005p");
        if (answers.chest_005 === "Yes"){
    add("chest_006p");}
    add("chest_007p");
    add("chest_008");
    add("chest_009p");}

    add("chest_010");
      if (answers.chest_010 === "Multiple episodes"){
    add("chest_011");
    add("chest_012");}
      if (answers.chest_001 === "Yes"){
    add("chest_013");}
      else if (answers.chest_001 === "No"){
    add("chest_013p");}

    add("chest_014");
    add("chest_015");
    add("chest_016");
    add("chest_017");
    add("chest_018");
    add("chest_019");
    add("chest_020");
    add("chest_021");
    add("chest_022");
    add("chest_023");
    //Module1
    add1("chest_024");
    add1("gi_010");
    add1("gi_008");
    //Module2
    add2("resp_001");
    add2("chest_025");
    add2("chest_026");
    //Module3
    add3("resp_003");
    add3("resp_006");
    add3("fever_001");
    add3("neuro_005");
    //Module4
    add4("gi_011");
    add4("gi_012");
    add4("gi_013");
    add4("gi_014");
    //Medical
    add7("med_001");
      if (answers.med_001 === "Yes"){
    add7("med_003");
    add7("med_004");
    add7("med_005");
    add7("med_006");}
    add7("med_011");
      if (answers.med_011 === "Yes"){
    add7("med_012");
    add7("med_013");
    add7("med_014");}
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Dizziness
  if (complaints.includes("Dizziness")) {
    setComplaint("Dizziness", () => {
    //General
    add("dizzy_001");
    add("dizzy_002");
    add("dizzy_003");
    add("dizzy_004");
    add("dizzy_005");
    add("dizzy_006");
    add("dizzy_007");
    add("dizzy_008");
    add("dizzy_009");
    add("dizzy_010");
    add("dizzy_011");
    add("dizzy_012");
    add("dizzy_013");
    add("dizzy_014");
    //Module1
    add1("dizzy_015");
    add1("dizzy_016");
    add1("dizzy_017");
    add1("dizzy_018");
    add1("eye_003");
    add1("neuro_006");
    add1("neuro_010");
    add1("neuro_005");
    add1("neuro_008");
    add1("neuro_009");
    add1("head_001");
    add1("head_011");
    add1("gi_010");
    add1("gi_008");
    add1("dizzy_019");
    add1("dizzy_020");
    add1("syncope_042");
    add1("chest_025");
    add1("chest_027");
    add1("resp_001");
    add1("syncope_001");
    add1("fever_001");
    add1("resp_003");
    add1("dizzy_021");
    add1("head_015");
    add1("head_016");
    add1("dizzy_022");
    add1("dizzy_023"); 
    add1("dizzy_024");
    //Medical
    add7("med_002");
    add7("med_021");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Fainting/Blackout
  if (complaints.includes("Fainting/Blackout")) {
    setComplaint("Fainting/Blackout", () => {
    //General
    add("syncope_001");
    add("syncope_002");
    add("syncope_003");
    add("syncope_004");
    add("syncope_005");
    add("syncope_006");
    add("syncope_007");
    add("syncope_008");
    add("syncope_009");
    add("syncope_010");
    add("syncope_011");
    add("syncope_012");
    add("syncope_013");
    add("syncope_014");
    add("syncope_015");
    add("syncope_016");
    add("syncope_017");
    add("syncope_018");
    add("syncope_019");
    add("syncope_020");
    add("syncope_021");
    add("syncope_022");
    add("syncope_023");
    add("syncope_024");
    add("syncope_025");
    add("syncope_026");
    add("syncope_027");
    add("syncope_028");
    add("syncope_029");
    add("syncope_030");
    add("syncope_031");
    add("syncope_032");
    add("syncope_033");
    add("syncope_034");
    add("syncope_035");
    add("syncope_036");
    add("syncope_037");
    add("syncope_038");
    add("syncope_039");
    //Module1
    add1("chest_027");
    add1("chest_025");
    add1("resp_001");
    add1("chest_028");
    add1("chest_029");
    add1("neuro_007");
    add1("neuro_006");
    add1("neuro_003");
    add1("neuro_009");
    add1("fever_001");
    add1("syncope_040");
    add1("gyn_001");
    add1("syncope_041");
    //Medical
    add7("med_005");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Nausea/Vomiting
  if (complaints.includes("Nausea/Vomiting")) {
    setComplaint("Nausea/Vomiting", () => {
    //General
    add("gi_008");
      if (answers.gi_008 === "Yes"){
    add("gi_015");}
    add("gi_009");
    add("git_016");
    add("gi_017");
    add("gi_018");
    //Module1
    add1("gi_001");
    add1("fever_001");
    add1("fever_002");
    add1("fever_003");
    add1("fever_005");
      if (answers.fever_005 === "Yes"){
    add1("fever_005a");}
    //Medical
    add7("med_001");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Abdominal pain
  if (complaints.includes("Stomach/Abdominal pain")) {
    setComplaint("Stomach/Abdominal pain", () => {
    //General
    add("gi_002");
    add("gi_019");
    add("gi_003");
    add("gi_020");
    add("gi_004");
    add("gi_005");
    add("gi_021");
    add("gi_022");
      if (answers.gi_022 === "Yes"){
    add("gi_023");}
    add("gi_024");
    add("gi_025");
    add("gi_026");
    add("gi_027");
    //Module1
    add1("gi_010");
    add1("gi_008");
    add1("gi_015");
      if (answers.gi_015 === "Yes"){
    add1("gi_009");
    add1("gi_016");}
    add1("gi_028");
      if (answers.gi_028 === "Loose or watery"){
    add1("gi_029");
    add1("gi_007");
    add1("gi_030");
    add1("gi_031");}
    add1("gi_032");
    add1("gi_033");
    add1("gi_034");
    add1("gi_035");
    //Module2
    add2("gi_036");
    add2("gi_037");
    add2("gi_038");
    add2("gi_039");
    add2("gi_040");
    add2("gi_041");
    //Module3
    add3("gu_001");
    add3("gu_002");
    add3("gu_003");
    add3("gu_004");
    //Module4
    add4("fever_001");
      if (answers.fever_001 === "Yes"){
    add4("fever_002");
    add4("fever_003");
    add4("fever_005");
        if (answers.fever_005 === "Yes"){
    add4("fever_005a");}}
    //Module5
    add5("sys_001");
    add5("sys_002");
    add5("risk_004");
    //Medical
    add7("med_001");
    add7("med_015");
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
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Problem with passing urine
  if (complaints.includes("Problem with passing urine")) {
    setComplaint("Problem with passing urine", () => {
    //General
    add("gu_001");
    add("gu_002");
    add("gu_003");
    add("gu_006");
    add("gu_004");
    add("gu_005");
    //Module1
    add1("fever_001");
      if (answers.fever_001 === "Yes"){
    add1("fever_002");
    add1("fever_003");
    add1("fever_005");
        if (answers.fever_005 === "Yes"){
    add1("fever_005a");}}
    add1("gi_001");
    //Medical
    add7("med_001");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Shortness of breath
  if (complaints.includes("Shortness of breath")) {
    setComplaint("Shortness of breath", () => {
    //General
    add("resp_009");
    add("resp_010");
    add("resp_011");
    add("resp_012");
    add("resp_013");
    add("resp_014");
    add("resp_015");
    add("resp_016");
    add("resp_017");
    add("resp_002");
    //Module1
    add1("resp_003");
      if (answers.resp_003 === "Yes"){ 
    add1("resp_004");
        if (answers.resp_004 === "Yes"){
    add1("resp_005");
    add1("resp_006");
    add1("resp_007");
    add1("resp_008");}}
    add1("ent_001");
    add1("ent_004");
    add1("ent_002");
    add1("chest_027");
    add1("chest_025");
    add1("syncope_001");
    add1("limb_001");
    add1("limb_002");
    add1("ent_003");
    //Medical
    add7("como_005");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Eye pain or redness
  if (complaints.includes("Eye pain or redness")) {
    setComplaint("Eye pain or redness", () => {
    //General
    add("eye_002");
    add("eye_003");
    add("eye_001");
    add("eye_004");
    add("eye_005");
    add("eye_006");
    add("eye_007");
    add("eye_008");
    add("eye_009");
    add("eye_010");
    add("eye_011");
    add("eye_012");
    add("eye_013");
    add("eye_014");
    add("eye_015");
    add("eye_016");
    add("eye_017");
    add("eye_018");
    add("eye_019");
    add("eye_020");
    add("eye_021");
    add("eye_022");
    add("eye_023");
    add("eye_024");
    add("eye_025");
    add("eye_026");
    add("eye_027");
      if (answers.eye_027 === "Yes"){
    add("eye_028");
    add("eye_029");
    add("eye_030");}
    //Module1
    add1("fever_001");
    add1("resp_018");
    add1("eye_031");
    add1("head_001");
    add1("gi_010");
    add1("gi_008");
    add1("eye_032");
    add1("eye_033");
    add1("head_018");
    add1("head_017");
    add1("eye_034");
    //Medical
    add7("med_001");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

  // Back pain
  if (complaints.includes("Back pain")) {
    setComplaint("Back pain", () => {
    //General
    add("back_001");
    add("back_002");
    add("back_003");
    add("back_004");
    add("back_005");
    add("back_006");
    add("back_007");
    add("back_008");
    add("back_009");
    add("back_010");
    add("back_011");
    add("back_012");
    add("back_013");
    add("back_014");
    add("back_015");
    add("back_016");
      if (answers.back_016 === "Yes"){
    add("back_017");}
    add("back_018");
    add("back_019");
    add("back_020");
    add("back_021");
    add("back_022");
    add("back_023");
    add("back_024");
    add("back_025");
    //Module1
    add1("neuro_011");
    add1("neuro_012");
    add1("back_026");
    add1("back_027");
    add1("gu_007");
    add1("back_028");
    add1("back_029");
    add1("neuro_009");
    add1("fever_001");
    add1("sys_002");
    add1("back_030");
    add1("back_031");
    add1("back_032");
    add1("chest_027");
    add1("gi_001");
    add1("chest_026");
    add1("gi_010");
    add1("gi_008");
    add1("gu_005");
    add1("gu_001");
    add1("gu_008");
    add1("back_033");
    add1("back_034");
    add1("back_035");
    //Medical
    add7("como_006");
    add7("como_007");
    add7("como_008");
    //Social
    add8("soc_001");
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_002");}
      if (answers.soc_001 === "Used to smoke"){
    add8("soc_003");}
      if (answers.soc_001 === "Used to smoke" || answers.soc_001 === "Currently smoke"){
    add8("soc_004");}
    add8("soc_005");
      if (answers.soc_005 === "Occasionally" || answers.soc_005 === "Regularly"){
    add8("soc_006");}
    add8("soc_007");
    add8("soc_008");
  });}

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