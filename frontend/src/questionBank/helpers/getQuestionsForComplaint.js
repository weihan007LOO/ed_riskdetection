// helpers/getQuestionsForComplaint.js

import { RespModule } from '../modules/RespModule';
import { GUModule } from '../modules/GuModule';
import { BleedModule } from '../modules/BleedModule';
import { MskModule } from '../modules/MskModule';
import { InjuryModule } from '../modules/InjuryModule';
import { GIModule } from '../modules/GIModule';
import { SkinModule } from '../modules/SkinModule';
import { NeuroModule } from '../modules/NeuroModule';
import { EntModule } from '../modules/EntModule';
import { EyeModule } from '../modules/EyeModule';
import { CardiacModule } from '../modules/CardiacModule';
import { PainModule } from '../modules/PainModule';
import { GynModule } from '../modules/GynModule';
import { MedModule } from '../modules/MedModule';
import { ComoModule } from '../modules/ComoModule';
import { FeverModule } from '../modules/FeverModule';
import { SocialModule } from '../modules/SocialModule';
import { SysModule } from '../modules/SysModule';


export const getQuestionsForComplaint = (answers) => {
  let questions = [];

  const complaints = answers.chiefComplaints || [];

  let currentComplaint = null;
  let currentSectionTitle = null;

  const withSectionTitle = (title, fn) => {
    currentSectionTitle = title;
    fn();
    currentSectionTitle = null; // optional reset
  };

  const setComplaint = (c, callback) => {
    currentComplaint = c;
    callback();
    currentComplaint = null;
  };

  const findQuestion = (id) => {
    return (
      FeverModule.find(x => x.id === id) ||
      PainModule.find(x => x.id === id) ||
      RespModule.find(x => x.id === id) ||
      GIModule.find(x => x.id === id) ||
      NeuroModule.find(x => x.id === id) ||
      SkinModule.find(x => x.id === id) ||
      SysModule.find(x => x.id === id) ||
      CardiacModule.find(x => x.id === id) ||
      MskModule.find(x => x.id === id) ||
      GUModule.find(x => x.id === id) ||
      EntModule.find(x => x.id === id) ||
      EyeModule.find(x => x.id === id) ||
      InjuryModule.find(x => x.id === id) ||
      BleedModule.find(x => x.id === id) ||
      GynModule.find(x => x.id === id) ||
      ComoModule.find(x => x.id === id) ||
      MedModule.find(x => x.id === id) ||
      SocialModule.find(x => x.id === id)
    );
  };

  const add0 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "comorbid",
      complaint: "global"
    });
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      tag: "module7",
      complaint: "global",
      sectionTitle: currentSectionTitle
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
      tag: "module8",
      complaint: "global",
      sectionTitle: currentSectionTitle
    });
  };

  const add9 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module9",
      complaint: "global",
      sectionTitle: currentSectionTitle
    });
  };

  const add10 = (id) => {
    const q = findQuestion(id);

    if (!q) {
      console.warn("Missing question:", id);
      return;
    }

    questions.push({
      ...q,
      tag: "module10",
      complaint: "global",
      sectionTitle: currentSectionTitle
    });
  };

  const addmed = (id) => {
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

  const addsoc = (id) => {
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
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Fever", () => {
    add("confirm_fever","Fever");
      if (answers.confirm_fever === "Proceed"){
    add("fever_01");
    add("fever_02");
    add("fever_03");
    add("fever_04");
        if (answers.fever_04 === "Yes"){
    add("fever_041");}
    add("fever_05");
    add("fever_06");
    add("fever_07");
    add("fever_08");}})
    //Module1
    withSectionTitle("Shortness of Breath", () => {
    add1("prom_sob");
      if (answers.prom_sob === "Yes"){
    add1("resp_sob01");
    add1("resp_sob02");
    add1("resp_sob03");
    add1("resp_sob04");
    add1("resp_sob05");
    add1("resp_sob06");
    add1("resp_sob07");
    add1("resp_sob08");
    add1("resp_sob09");}})
    //Module2
    withSectionTitle("Cough", () => {
    add2("prom_cough");
      if (answers.prom_cough === "Yes"){
    add2("resp_cou01");
    add2("resp_cou02");
      if (answers.resp_cou02 === "Yes"){
    add2("resp_cou021");
    add2("resp_cou022");
    add2("resp_cou023");}
    add2("resp_cou03");
    add2("resp_cou04");
    add2("resp_cou05");}})
    //Module3
    withSectionTitle("Vomiting", () => {
    add3("prom_vomiting");
      if (answers.prom_vomiting === "Yes"){
    add3("git_vom02");
    add3("git_vom03");
    add3("git_vom04");
    add3("git_vom05");}
      if (answers.prom_vomiting === "No"){
    add3("git_vom01");}})
    //Module4
    withSectionTitle("Diarrhoea", () => {
    add4("prom_diarrhoea");
      if (answers.prom_diarrhoea === "Yes"){
    add4("git_dia01");
    add4("git_dia02");
    add4("git_dia03");
        if (answers.git_dia03 === "Yes"){
    add4("git_dia021");}
    add4("git_02");
    add4("git_03");
    add4("git_04");}})
    //Module5
    withSectionTitle("Abdominal pain", () => {
    add5("prom_abdopain");
      if (answers.prom_abdopain === "Yes"){
    add5("pain_git_01");
    add5("pain_git_02");
    add5("pain_git_03");
      if (answers.pain_git_03 === "Yes"){
    add5("pain_git_031A");}
      if (answers.pain_git_03 === "No"){
    add5("pain_git_031B");}
    add5("pain_git_04");
    add5("pain_git_05");
      if (answers.pain_git_05 === "Multiple episodes"){
    add5("pain_git_051");
    add5("pain_git_052");
    add5("pain_git_053");}
    add5("pain_git_06");
      if (answers.pain_git_03 === "Yes"){
    add5("pain_git_07A");}
      if (answers.pain_git_03 === "No"){
    add5("pain_git_07B");}}})
    //Module6
    withSectionTitle("Abdominal pain", () => {
      if (answers.prom_abdopain === "Yes"){
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_pain01");}
      if (answers.pain_git_01?.includes("Epi")){
    add6("git_pain02");
    add6("git_pain03");}
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_pain04");
    add6("git_pain05");
    add6("git_pain06");}
      if (answers.pain_git_01?.includes("RIF")){
    add6("git_pain07");}
    add6("git_pain08");
    add6("git_06");
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_07");}}})
    //Module7
    withSectionTitle("Urinary problem", () => {
    add7("prom_gu");
      if (answers.prom_gu === "Yes"){
        if (!answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add7("gu_01");
      if (answers.gu_01 === "Yes"){
    add7("gu_02");
      if (answers.gu_02 === "Yes"){
    add7("gu_021");}
    add7("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add7("gu_031");}
    add7("gu_04");
      if (answers.gu_04 === "Yes"){
    add7("gu_041");}}
      if (answers.gu_01 === "No"){
    add7("gu_05");
        if (answers.gu_05 === "Yes"){
    add7("gu_051");}}
    add7("gu_06");
      if (answers.gu_06 === "Yes"){
    add7("gu_061");}
    add7("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add7("gu_071");
    add7("gu_072");}
    add7("gu_08");
    add7("gu_09");
      if (answers.gu_09 === "Yes"){
    add7("gu_091");}
    add7("gu_10");}
      if (answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add7("gu_cbd01");
        if (answers.gu_cbd01 === "Yes"){
    add7("gu_cbd011");}
    add7("gu_cbd02");
        if (answers.gu_cbd02 === "Yes"){
    add7("gu_cbd021");}
    add7("gu_cbd03");
        if (answers.gu_cbd03 === "Yes"){
    add7("gu_cbd031");}
    add7("gu_cbd04");
        if (answers.gu_cbd04 === "Yes"){
    add7("gu_cbd041");}}}})
    //Module8
    withSectionTitle("Headache", () => {
    add8("prom_headache");
      if (answers.prom_headache === "Yes"){
    add8("neuro_head01");
    add8("neuro_head02");
    add8("neuro_head03");
    add8("neuro_head04");
    add8("neuro_head05");
    add8("neuro_head06");
        if (answers.neuro_head06 === "No"){
    add8("neuro_head061");}
    add8("neuro_head07");
    add8("neuro_head08");}})
    //Module9
    withSectionTitle("Skin problem", () => {
    add9("prom_skin");
      if (answers.prom_skin === "Yes"){
    add9("skin_01");
    add9("skin_02");
    add9("skin_03");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");
    add10("sys_05");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_fever01");
    addmed("med_fever02");
    addmed("med_fever03");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Cough/Sore throat
  if (complaints.includes("Cough/Sore throat")) {
    setComplaint("Cough/Sore throat", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    //General
    withSectionTitle("Cough or Sore throat", () => {
    add("confirm_cough");
      if (answers.confirm_cough === "Proceed"){
    add("resp_cou01");
    add("resp_cou02");
      if (answers.resp_cou02 === "Yes"){
    add("resp_cou021");
    add("resp_cou022");
    add("resp_cou023");}
    add("resp_cou03");
    add("resp_cou04");
    add("resp_cou05");}})
    //Module1
    withSectionTitle("Shortness of breath", () => {
    add1("prom_sob");
      if (answers.prom_sob === "Yes"){
    add1("resp_sob01");
    add1("resp_sob02");
    add1("resp_sob03");
    add1("resp_sob04");
    add1("resp_sob05");
    add1("resp_sob06");
    add1("resp_sob07");
    add1("resp_sob08");
    add1("resp_sob09");}})
    //Module2
    withSectionTitle("Fever", () => {
    add2("prom_fever");
      if (answers.prom_fever === "Yes"){
    add2("fever_01");
    add2("fever_02");
    add2("fever_03");
    add2("fever_04");
        if (answers.fever_04 === "Yes"){
    add2("fever_041");}
    add2("fever_05");
    add2("fever_06");
    add2("fever_07");
    add2("fever_08");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_fever03");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Shortness of breath
  if (complaints.includes("Shortness of breath")) {
    setComplaint("Shortness of breath", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Shortness of breath", () => {
    add("confirm_sob");
      if (answers.confirm_sob === "Proceed"){
    add("resp_sob01");
    add("resp_sob02");
    add("resp_sob03");
    add("resp_sob04");
    add("resp_sob05");
    add("resp_sob06");
    add("resp_sob07");
    add("resp_sob08");
    add("resp_sob09");}})
    //Module1
    withSectionTitle("Chest pain", () => {
    add1("prom_cardpain");
      if (answers.prom_cardpain === "Yes"){
    add1("pain_card_01");
    add1("pain_card_02");
    add1("pain_card_03");
      if (answers.pain_card_03 === "Yes"){
    add1("pain_card_031A");}
      if (answers.pain_card_03 === "No"){
    add1("pain_card_031B");}
    add1("pain_card_04");
    add1("pain_card_05");
      if (answers.pain_card_05 === "Multiple episodes"){
    add1("pain_card_051");
    add1("pain_card_052");
    add1("pain_card_053");}
    add1("pain_card_06");
      if (answers.pain_card_03 === "Yes"){
    add1("pain_card_07A");}
      if (answers.pain_card_03 === "No"){
    add1("pain_card_07B");}}})
    //Module2
    withSectionTitle("Chest pain", () => {
      if (answers.prom_cardpain === "Yes"){
    add2("card_pain01");
      if (answers.pain_card_03 === "Yes"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add2("card_pain02A");}
    add2("card_pain03A");
    add2("card_pain04A");
    add2("card_pain05A");
    add2("card_pain06A");
    add2("card_pain07A");
    add2("card_pain08A");
    add2("card_pain09A");
    add2("card_pain10A");
    add2("card_pain11A");}
      if (answers.pain_card_03 === "No"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add2("card_pain02B");}
    add2("card_pain03B");
    add2("card_pain04B");
    add2("card_pain05B");
    add2("card_pain06B");
    add2("card_pain07B");
    add2("card_pain08B");
    add2("card_pain09B");
    add2("card_pain10B");
    add2("card_pain11B");}}})
    //Module3
    withSectionTitle("Chest pain", () => {
    add3("card_01");
      if (answers.card_01 === "Yes"){
    add3("card_011");
        if (answers.card_011 === "One side"){
    add3("card_012");
    add3("card_013");
    add3("card_014");
    add3("card_015");
    add3("card_016");}}
    add3("card_02");
    add3("card_03");})
    //Module4
    withSectionTitle("Fever", () => {
    add4("prom_fever");
      if (answers.prom_fever === "Yes"){
    add4("fever_01");
    add4("fever_02");
    add4("fever_03");
    add4("fever_04");
        if (answers.fever_04 === "Yes"){
    add4("fever_041");}
    add4("fever_05");
    add4("fever_06");
    add4("fever_07");
    add4("fever_08");}})
    //Module5
    withSectionTitle("Cough", () => {
    add5("prom_cough");
      if (answers.prom_cough === "Yes"){
    add5("resp_cou01");
    add5("resp_cou02");
      if (answers.resp_cou02 === "Yes"){
    add5("resp_cou021");
    add5("resp_cou022");
    add5("resp_cou023");}
    add5("resp_cou03");
    add5("resp_cou04");
    add5("resp_cou05");}})
    //Module6
    withSectionTitle("Urinary problem", () => {
      if (!answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add6("gu_01");
        if (answers.gu_01 === "Yes"){
    add6("gu_02");
          if (answers.gu_02 === "Yes"){
    add6("gu_021");}
    add6("gu_03");
          if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add6("gu_031");}}}})
    //Module7
    withSectionTitle("Bleeding", () => {
    add7("bleed_screen01");
    add7("bleed_screen02");
    add7("bleed_screen03");
      if (Number(answers.age) < 60 && answers.gender === "Female"){
    add7("bleed_screen04");}
    add7("bleed_screen05");})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");
    add10("sys_05");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Nausea/Vomiting
  if (complaints.includes("Nausea/Vomiting")) {
    setComplaint("Nausea/Vomiting", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Nausea or Vomiting", () => {
    add("confirm_vomiting");
      if (answers.confirm_vomiting === "Proceed"){
    add("git_vom02");
    add("git_vom03");
    add("git_vom04");
    add("git_vom05");}})
    //Module1
    withSectionTitle("Diarrhoea", () => {
    add1("prom_diarrhoea");
      if (answers.prom_diarrhoea === "Yes"){
    add1("git_dia01");
    add1("git_dia02");
    add1("git_dia03");
        if (answers.git_dia03 === "Yes"){
    add1("git_dia021");}}})
    //Module2
    withSectionTitle("Abdominal pain", () => {
    add2("prom_abdopain");
      if (answers.prom_abdopain === "Yes"){
    add2("pain_git_01");
    add2("pain_git_02");
    add2("pain_git_03");
      if (answers.pain_git_03 === "Yes"){
    add2("pain_git_031A");}
      if (answers.pain_git_03 === "No"){
    add2("pain_git_031B");}
    add2("pain_git_04");
    add2("pain_git_05");
      if (answers.pain_git_05 === "Multiple episodes"){
    add2("pain_git_051");
    add2("pain_git_052");
    add2("pain_git_053");}
    add2("pain_git_06");
      if (answers.pain_git_03 === "Yes"){
    add2("pain_git_07A");}
      if (answers.pain_git_03 === "No"){
    add2("pain_git_07B");}}
    //Module3
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add3("git_pain01");}
      if (answers.pain_git_01?.includes("Epi")){
    add3("git_pain02");
    add3("git_pain03");}
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add3("git_pain04");
    add3("git_pain05");
    add3("git_pain06");}
      if (answers.pain_git_01?.includes("RIF")){
    add3("git_pain07");}
    add3("git_pain08");})
    //Module4
    withSectionTitle("Abdominal pain", () => {
      if (answers.prom_diarrhoea === "No"){
    add4("git_01");}
    add4("git_02");
    add4("git_03");
    add4("git_04");
    add4("git_05");
    add4("git_06");
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add4("git_07");}
    add4("git_08");
    add4("git_09");})
    //Module5
    withSectionTitle("Headache", () => {
    add5("prom_headache");
      if (answers.prom_headache === "Yes"){
    add5("neuro_head01");
    add5("neuro_head02");
    add5("neuro_head03");
    add5("neuro_head04");
    add5("neuro_head05");
    add5("neuro_head06");
        if (answers.neuro_head06 === "No"){
    add5("neuro_head061");}
    add5("neuro_head07");
    add5("neuro_head08");
    add5("neuro_head09");
    add5("neuro_head10");
    add5("neuro_head11");
    add5("neuro_head12");
    add5("neuro_head13");
    add5("neuro_head14");
    add5("neuro_head15");
    add5("neuro_head16");
        if (answers.neuro_head16 === "Yes"){
    add5("neuro_head161");
    add5("neuro_head162");}}})
    //Module6
    withSectionTitle("Dizziness", () => {
    add6("prom_dizziness");
      if (answers.prom_dizziness === "Yes"){
    add6("neuro_dizz01");
    add6("neuro_dizz02");
    add6("neuro_dizz03");
    add6("neuro_dizz04");
    add6("neuro_dizz05");
    add6("neuro_dizz06");
    add6("neuro_dizz07");
    add6("neuro_dizz08");
        if (answers.neuro_dizz08 === "Yes"){
    add6("neuro_dizz081");}}})
    //Module7
    withSectionTitle("Pregnancy", () => {
      if (Number(answers.age) < 51 && answers.gender === "Female"){
    add7("og_01");
        if (answers.og_01 === "Yes"){
    add7("og_011");}
        if (answers.og_01 === "Not sure"){
    add7("og_012");}
        if (answers.og_01 === "Yes"){
    add7("og_013");}
          if (answers.og_013 === "Yes"){
    add7("og_0131");}}})
    //Module8
    withSectionTitle("Urinary problem", () => {
    add8("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add8("gu_031");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_01");
    addmed("med_02");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Diarrhoea
  if (complaints.includes("Diarrhoea")) {
    setComplaint("Diarrhoea", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Diarrhoea", () => {
    add("confirm_diarrhoea");
      if (answers.confirm_diarrhoea === "Proceed"){
    add("git_dia01");
    add("git_dia02");
    add("git_dia03");
        if (answers.git_dia03 === "Yes"){
    add("git_dia021");}}
    //Module1
    add1("git_02");
    add1("git_03");
    add1("git_04");})
    //Module2
    withSectionTitle("Vomiting", () => {
    add2("prom_vomiting");
      if (answers.prom_vomiting === "Yes"){
    add2("git_vom02");
    add2("git_vom03");
    add2("git_vom04");
    add2("git_vom05");}
      if (answers.prom_vomiting === "No"){
    add2("git_vom01");}})
    //Module3
    withSectionTitle("Abdominal pain", () => {
    add3("prom_abdopain");
      if (answers.prom_abdopain === "Yes"){
    add3("pain_git_01");
    add3("pain_git_02");
    add3("pain_git_03");
      if (answers.pain_git_03 === "Yes"){
    add3("pain_git_031A");}
      if (answers.pain_git_03 === "No"){
    add3("pain_git_031B");}
    add3("pain_git_04");
    add3("pain_git_05");
      if (answers.pain_git_05 === "Multiple episodes"){
    add3("pain_git_051");
    add3("pain_git_052");
    add3("pain_git_053");}
    add3("pain_git_06");
      if (answers.pain_git_03 === "Yes"){
    add3("pain_git_07A");}
      if (answers.pain_git_03 === "No"){
    add3("pain_git_07B");}}})
    //Module4
    withSectionTitle("Abdominal pain", () => {
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add4("git_pain01");}
      if (answers.pain_git_01?.includes("Epi")){
    add4("git_pain02");
    add4("git_pain03");}
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add4("git_pain04");
    add4("git_pain05");
    add4("git_pain06");}
      if (answers.pain_git_01?.includes("RIF")){
    add4("git_pain07");}
    add4("git_pain08");})
    //Module5
    withSectionTitle("Fever", () => {
    add5("prom_fever");
      if (answers.prom_fever === "Yes"){
    add5("fever_01");
    add5("fever_02");
    add5("fever_03");
    add5("fever_04");
        if (answers.fever_04 === "Yes"){
    add5("fever_041");}
    add5("fever_05");
    add5("fever_06");
    add5("fever_07");
    add5("fever_08");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_fever02");
    addmed("med_01");
    addmed("med_02");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Headache
  if (complaints.includes("Headache")) {
    setComplaint("Headache", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Headache", () => {
    add("confirm_headache");
      if (answers.confirm_headache === "Proceed"){
    add("neuro_head01");
    add("neuro_head02");
    add("neuro_head03");
    add("neuro_head04");
    add("neuro_head05");
    add("neuro_head06");
        if (answers.neuro_head06 === "No"){
    add("neuro_head061");}
    add("neuro_head07");
    add("neuro_head08");
    add("neuro_head09");
    add("neuro_head10");
    add("neuro_head11");
    add("neuro_head12");
    add("neuro_head13");
    add("neuro_head14");
    add("neuro_head15");
    add("neuro_head16");
        if (answers.neuro_head16 === "Yes"){
    add("neuro_head161");
    add("neuro_head162");}}})
    //Module1
    withSectionTitle("Dizziness", () => {
    add1("prom_dizziness");
      if (answers.prom_dizziness === "Yes"){
    add1("neuro_dizz01");
    add1("neuro_dizz02");
    add1("neuro_dizz03");
    add1("neuro_dizz04");
    add1("neuro_dizz05");
    add1("neuro_dizz06");
    add1("neuro_dizz07");
    add1("neuro_dizz08");
        if (answers.neuro_dizz08 === "Yes"){
    add1("neuro_dizz081");}
    add1("neuro_dizz09");}})
    //Module2
    withSectionTitle("Weakness", () => {
    add2("prom_weakness");
      if (answers.prom_weakness === "Yes"){
    add2("neuro_weak01");
        if (answers.neuro_weak01 === "Weak in certain parts of body"){
    add2("neuro_weak011");
    add2("neuro_weak012");}
    add2("neuro_weak02");
    add2("neuro_weak03");
        if (Number(answers.neuro_weak03) === 1){
    add2("neuro_weak031");}
    add2("neuro_weak04");
    add2("neuro_weak05");
        if (answers.neuro_weak05 === "Yes (left side)" || answers.neuro_weak05 === "Yes (right side)"){
    add2("neuro_weak051");}
    add2("neuro_weak06");
    add2("neuro_weak07");
    add2("neuro_weak08");
    add2("neuro_weak09");}})
    //Module3
    withSectionTitle("Neurological problem", () => {
    add3("neuro_01");
    add3("neuro_02");
    add3("neuro_03");
      if (answers.neuro_03 === "Yes"){
    add3("neuro_031");
        if (answers.neuro_031 === "Multiple episodes"){
    add3("neuro_032");}
    add3("neuro_033");}})
    //Module4
    withSectionTitle("Fever", () => {
    add4("prom_fever");
      if (answers.prom_fever === "Yes"){
    add4("fever_01");
    add4("fever_02");
    add4("fever_03");
    add4("fever_04");
        if (answers.fever_04 === "Yes"){
    add4("fever_041");}
    add4("fever_05");
    add4("fever_06");
    add4("fever_07");
    add4("fever_08");}})
    //Module5
    withSectionTitle("Eye problem", () => {
    add5("prom_eye");
      if (answers.prom_eye === "Yes"){
    add5("eye_01");
    add5("eye_02");
    add5("eye_03");
    add5("eye_04");
    add5("eye_05");
    add5("eye_06");
    add5("eye_07");
    add5("eye_08");
        if (answers.eye_06 !== "Yes"){
    add5("eye_09");
    add5("eye_10");}
    add5("eye_11");
    add5("eye_12");
    add5("eye_13");
    add5("eye_14");
    add5("eye_15");
    add5("eye_16");
    add5("eye_17");
    add5("eye_18");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_06");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Dizziness
  if (complaints.includes("Dizziness")) {
    setComplaint("Dizziness", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Dizziness", () => {
    add("confirm_dizziness");
      if (answers.confirm_dizziness === "Proceed"){
    add("neuro_dizz01");
    add("neuro_dizz02");
    add("neuro_dizz03");
    add("neuro_dizz04");
    add("neuro_dizz05");
    add("neuro_dizz06");
    add("neuro_dizz07");
    add("neuro_dizz08");
        if (answers.neuro_dizz08 === "Yes"){
    add("neuro_dizz081");}
    add("neuro_dizz09");}})
    //Module1
    withSectionTitle("Weakness", () => {
    add1("prom_weakness");
      if (answers.prom_weakness === "Yes"){
    add1("neuro_weak01");
        if (answers.neuro_weak01 === "Weak in certain parts of body"){
    add1("neuro_weak011");
    add1("neuro_weak012");}
    add1("neuro_weak02");
    add1("neuro_weak03");
        if (Number(answers.neuro_weak03) === 1){
    add1("neuro_weak031");}
    add1("neuro_weak04");
    add1("neuro_weak05");
        if (answers.neuro_weak05 === "Yes (left side)" || answers.neuro_weak05 === "Yes (right side)"){
    add1("neuro_weak051");}
    add1("neuro_weak06");
    add1("neuro_weak07");
    add1("neuro_weak08");
    add1("neuro_weak09");}})
    //Module2
    withSectionTitle("Ear problem", () => {
      if (answers.neuro_dizz09 === "Yes"){
    add2("ent_ear01");
    add2("ent_ear02");
    add2("ent_ear03");
    add2("ent_ear04");}})
    //Module3
    withSectionTitle("Fainting problem", () => {
    add3("prom_syncope");
      if (answers.prom_syncope === "Yes"){
    add3("neuro_sync01");
    add3("neuro_sync02");
        if (answers.neuro_sync02 === "Completely lost conciousness"){
    add3("neuro_sync021");}
    add3("neuro_sync03");
        if (answers.neuro_sync03 === "Standing"){
    add3("neuro_sync031");}
    add3("neuro_sync04");
    add3("neuro_sync05");
    add3("neuro_sync06");
    add3("neuro_sync07");
    add3("neuro_sync08");
    add3("neuro_sync09");
    add3("neuro_sync10");
    add3("neuro_sync11");
    add3("neuro_sync12");
    add3("neuro_sync13");
    add3("neuro_sync14");
    add3("neuro_sync15");
    add3("neuro_sync16");
    add3("neuro_sync17");
    add3("neuro_sync18");
    add3("neuro_sync19");
    add3("neuro_sync20");
    add3("neuro_sync21");}})
    //Module4
    withSectionTitle("Fever", () => {
    add4("prom_fever");
      if (answers.prom_fever === "Yes"){
    add4("fever_01");
    add4("fever_02");
    add4("fever_03");
    add4("fever_04");
        if (answers.fever_04 === "Yes"){
    add4("fever_041");}
    add4("fever_05");
    add4("fever_06");
    add4("fever_07");
    add4("fever_08");}})
    //Module5
    withSectionTitle("Bleeding", () => {
    add5("bleed_screen01");
    add5("bleed_screen02");
    add5("bleed_screen03");
      if (Number(answers.age) < 60 && answers.gender === "Female"){
    add5("bleed_screen04");}
    add5("bleed_screen05");})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Fainting/Blackout
  if (complaints.includes("Fainting/Blackout")) {
    setComplaint("Fainting/Blackout", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Fainting or Blackout", () => {
    add("confirm_syncope");
      if (answers.confirm_syncope === "Proceed"){
    add("neuro_sync01");
    add("neuro_sync02");
        if (answers.neuro_sync02 === "Completely lost conciousness"){
    add("neuro_sync021");}
    add("neuro_sync03");
        if (answers.neuro_sync03 === "Standing"){
    add("neuro_sync031");}
    add("neuro_sync04");
    add("neuro_sync05");
    add("neuro_sync06");
    add("neuro_sync07");
    add("neuro_sync08");
    add("neuro_sync09");
    add("neuro_sync10");
    add("neuro_sync11");
    add("neuro_sync12");
    add("neuro_sync13");
    add("neuro_sync14");
    add("neuro_sync15");
    add("neuro_sync16");
    add("neuro_sync17");
    add("neuro_sync18");
    add("neuro_sync19");
    add("neuro_sync20");
    add("neuro_sync21");}})
    //Module1
    withSectionTitle("Weakness", () => {
      if (answers.neuro_sync19 === "Yes"){
    add1("neuro_weak01");
        if (answers.neuro_weak01 === "Weak in certain parts of body"){
    add1("neuro_weak011");
    add1("neuro_weak012");}
    add1("neuro_weak04");
    add1("neuro_weak05");
        if (answers.neuro_weak05 === "Yes (left side)" || answers.neuro_weak05 === "Yes (right side)"){
    add1("neuro_weak051");}
    add1("neuro_weak06");
    add1("neuro_weak07");
    add1("neuro_weak08");}})
    //Module2
    withSectionTitle("Chest pain", () => {
      if (answers.neuro_sync07 === "Yes"){
    add2("pain_card_01");
    add2("pain_card_02");
    add2("pain_card_03");
      if (answers.pain_card_03 === "Yes"){
    add2("pain_card_031A");}
      if (answers.pain_card_03 === "No"){
    add2("pain_card_031B");}
    add2("pain_card_04");
    add2("pain_card_05");
      if (answers.pain_card_05 === "Multiple episodes"){
    add2("pain_card_051");
    add2("pain_card_052");
    add2("pain_card_053");}
    add2("pain_card_06");
      if (answers.pain_card_03 === "Yes"){
    add2("pain_card_07A");}
      if (answers.pain_card_03 === "No"){
    add2("pain_card_07B");}}
    //Module3
      if (answers.neuro_sync07 === "Yes"){
    add3("card_pain01");
      if (answers.pain_card_03 === "Yes"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add3("card_pain02A");}
    add3("card_pain03A");
    add3("card_pain04A");
    add3("card_pain05A");
    add3("card_pain06A");
    add3("card_pain07A");
    add3("card_pain08A");
    add3("card_pain09A");
    add3("card_pain10A");
    add3("card_pain11A");}
      if (answers.pain_card_03 === "No"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add3("card_pain02B");}
    add3("card_pain03B");
    add3("card_pain04B");
    add3("card_pain05B");
    add3("card_pain06B");
    add3("card_pain07B");
    add3("card_pain08B");
    add3("card_pain09B");
    add3("card_pain10B");
    add3("card_pain11B");}}})
    //Module4
    withSectionTitle("Fever", () => {
    add4("prom_fever");
      if (answers.prom_fever === "Yes"){
    add4("fever_01");
    add4("fever_02");
    add4("fever_03");
    add4("fever_04");
        if (answers.fever_04 === "Yes"){
    add4("fever_041");}
    add4("fever_05");
    add4("fever_06");
    add4("fever_07");
    add4("fever_08");}})
    //Module5
    
    //Module6
    withSectionTitle("Pregnancy", () => {
      if (Number(answers.age) < 51 && answers.gender === "Female"){
    add6("og_01");
        if (answers.og_01 === "Yes"){
    add6("og_011");}
        if (answers.og_01 === "Not sure"){
    add6("og_012");}
        if (answers.og_01 === "Yes"){
    add6("og_013");}
          if (answers.og_013 === "Yes"){
    add6("og_0131");}}})
    //Module7
    withSectionTitle("Bleeding", () => {
    add7("bleed_screen01");
    add7("bleed_screen02");
    add7("bleed_screen03");
      if (Number(answers.age) < 60 && answers.gender === "Female"){
    add7("bleed_screen04");}
    add7("bleed_screen05");})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Stomach/Abdominal pain
  if (complaints.includes("Stomach/Abdominal pain")) {
    setComplaint("Stomach/Abdominal pain", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Abdominal pain", () => {
    add("confirm_abdopain");
      if (answers.confirm_abdopain === "Proceed"){
    add("pain_git_01");
    add("pain_git_02");
    add("pain_git_03");
      if (answers.pain_git_03 === "Yes"){
    add("pain_git_031A");}
      if (answers.pain_git_03 === "No"){
    add("pain_git_031B");}
    add("pain_git_04");
    add("pain_git_05");
      if (answers.pain_git_05 === "Multiple episodes"){
    add("pain_git_051");
    add("pain_git_052");
    add("pain_git_053");}
    add("pain_git_06");
      if (answers.pain_git_03 === "Yes"){
    add("pain_git_07A");}
      if (answers.pain_git_03 === "No"){
    add("pain_git_07B");}}})
    //Module1
    withSectionTitle("Abdominal pain", () => {
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add1("git_pain01");}
      if (answers.pain_git_01?.includes("Epi")){
    add1("git_pain02");
    add1("git_pain03");}
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add1("git_pain04");
    add1("git_pain05");
    add1("git_pain06");}
      if (answers.pain_git_01?.includes("RIF")){
    add1("git_pain07");}
    add1("git_pain08");})
    //Module2
    withSectionTitle("Vomiting", () => {
    add2("prom_vomiting");
      if (answers.prom_vomiting === "Yes"){
    add2("git_vom02");
    add2("git_vom03");
    add2("git_vom04");
    add2("git_vom05");}
      if (answers.prom_vomiting === "No"){
    add2("git_vom01");}})
    //Module3
    withSectionTitle("Diarrhoea", () => {
    add3("prom_diarrhoea");
      if (answers.prom_diarrhoea === "Yes"){
    add3("git_dia01");
    add3("git_dia02");
    add3("git_dia03");
        if (answers.git_dia03 === "Yes"){
    add3("git_dia021");}}})
    //Module4
    withSectionTitle("Gastrointestinal problem", () => {
      if (answers.prom_diarrhoea === "No"){
    add4("git_01");}
    add4("git_02");
    add4("git_03");
    add4("git_04");
    add4("git_05");
    add4("git_06"); 
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add4("git_07");}
    add4("git_08");
    add4("git_09");})
    //Module5
    withSectionTitle("Fever", () => {
    add5("prom_fever");
      if (answers.prom_fever === "Yes"){
    add5("fever_01");
    add5("fever_02");
    add5("fever_03");
    add5("fever_04");
        if (answers.fever_04 === "Yes"){
    add5("fever_041");}
    add5("fever_05");
    add5("fever_06");
    add5("fever_07");
    add5("fever_08");}})
    //Module6
    withSectionTitle("Urinary problem", () => {
    add6("prom_gu");
      if (answers.prom_gu === "Yes"){
        if (!answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add6("gu_01");
      if (answers.gu_01 === "Yes"){
    add6("gu_02");
      if (answers.gu_02 === "Yes"){
    add6("gu_021");}
    add6("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add6("gu_031");}
    add6("gu_04");
      if (answers.gu_04 === "Yes"){
    add6("gu_041");}}
      if (answers.gu_01 === "No"){
    add6("gu_05");
        if (answers.gu_05 === "Yes"){
    add6("gu_051");}}
    add6("gu_06");
      if (answers.gu_06 === "Yes"){
    add6("gu_061");}
    add6("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add6("gu_071");
    add6("gu_072");}
    add6("gu_08");
    add6("gu_09");
      if (answers.gu_09 === "Yes"){
    add6("gu_091");}
    add6("gu_10");}
      if (answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add6("gu_cbd01");
        if (answers.gu_cbd01 === "Yes"){
    add6("gu_cbd011");}
    add6("gu_cbd02");
        if (answers.gu_cbd02 === "Yes"){
    add6("gu_cbd021");}
    add6("gu_cbd03");
        if (answers.gu_cbd03 === "Yes"){
    add6("gu_cbd031");}
    add6("gu_cbd04");
        if (answers.gu_cbd04 === "Yes"){
    add6("gu_cbd041");}}}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_03");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Chest pain
  if (complaints.includes("Chest pain")) {
    setComplaint("Chest pain", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Chest pain", () => {
    add("confirm_cardpain");
      if (answers.confirm_cardpain === "Proceed"){
    add("pain_card_01");
    add("pain_card_02");
    add("pain_card_03");
      if (answers.pain_card_03 === "Yes"){
    add("pain_card_031A");}
      if (answers.pain_card_03 === "No"){
    add("pain_card_031B");}
    add("pain_card_04");
    add("pain_card_05");
      if (answers.pain_card_05 === "Multiple episodes"){
    add("pain_card_051");
    add("pain_card_052");
    add("pain_card_053");}
    add("pain_card_06");
      if (answers.pain_card_03 === "Yes"){
    add("pain_card_07A");}
      if (answers.pain_card_03 === "No"){
    add("pain_card_07B");}}})
    //Module1
    withSectionTitle("Chest pain", () => {
    add1("card_pain01");
      if (answers.pain_card_03 === "Yes"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add1("card_pain02A");}
    add1("card_pain03A");
    add1("card_pain04A");
    add1("card_pain05A");
    add1("card_pain06A");
    add1("card_pain07A");
    add1("card_pain08A");
    add1("card_pain09A");
    add1("card_pain10A");
    add1("card_pain11A");}
      if (answers.pain_card_03 === "No"){
        if (answers.pain_card_01?.includes("UCC") || answers.pain_card_01?.includes("LCC")){
    add1("card_pain02B");}
    add1("card_pain03B");
    add1("card_pain04B");
    add1("card_pain05B");
    add1("card_pain06B");
    add1("card_pain07B");
    add1("card_pain08B");
    add1("card_pain09B");
    add1("card_pain10B");
    add1("card_pain11B");}})
    //Module2
    withSectionTitle("Shortness of breath", () => {
    add2("prom_sob");
      if (answers.prom_sob === "Yes"){
    add2("resp_sob01");
    add2("resp_sob02");
    add2("resp_sob03");
    add2("resp_sob04");
    add2("resp_sob05");
    add2("resp_sob06");
    add2("resp_sob07");
    add2("resp_sob08");
    add2("resp_sob09");}})
    //Module3
    withSectionTitle("Cardiac problem", () => {
    add3("card_01");
      if (answers.card_01 === "Yes"){
    add3("card_011");
        if (answers.card_011 === "One side"){
    add3("card_012");
    add3("card_013");
    add3("card_014");
    add3("card_015");
    add3("card_016");}}
    add3("card_02");
    add3("card_03");})
    //Module4
    withSectionTitle("Gastrointestinal problem", () => {
    add4("git_03");
    add4("git_04");
    add4("git_05");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_03");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Muscle, Back, or Joint pain
  if (complaints.includes("Muscle, Back, or Joint pain")) {
    setComplaint("Muscle, Back, or Joint pain", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Muscle, Back or Joint Pain", () => {
    add("confirm_msk");
      if (answers.confirm_msk === "Proceed"){
    add("msk_01");
    add("msk_02");
    add("msk_03");
    add("msk_04");
        if (answers.msk_04 === "No" || answers.msk_04 === "Not sure"){
    add("msk_05");
    add("msk_06");}
    add("msk_07");
    add("msk_08");
        if (answers.msk_02?.includes("Pelvis") || answers.msk_02?.includes("RightLowerLeg") || answers.msk_02?.includes("LeftLowerLeg")){
    add("msk_09");}
        if (answers.msk_02?.includes("RightLowerLeg") && answers.msk_02?.includes("LeftLowerLeg")){
    add("msk_10");}}})
    //Module1
    withSectionTitle("Injury", () => {
      if (answers.msk_04 === "Yes"){
    add1("inj_04");
    add1("inj_05");
    add1("inj_06");}})
    //Module2
    withSectionTitle("Fever", () => {
    add2("prom_fever");
      if (answers.prom_fever === "Yes"){
    add2("fever_01");
    add2("fever_02");
    add2("fever_03");
    add2("fever_04");
        if (answers.fever_04 === "Yes"){
    add2("fever_041");}
    add2("fever_05");
    add2("fever_06");
    add2("fever_07");
    add2("fever_08");}})
    //Module3
    withSectionTitle("Skin problem", () => {
    add3("prom_skin");
      if (answers.prom_skin === "Yes"){
    add3("skin_01");
    add3("skin_02");
    add3("skin_03");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
      if (answers.msk_01 === "Pain at rest" || answers.msk_01 === "Pain on movement"){
    addmed("med_06");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Eye problem
  if (complaints.includes("Eye problem")) {
    setComplaint("Eye problem", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Eye problem", () => {
    add("confirm_eye");
      if (answers.confirm_eye === "Proceed"){
    add("eye_01");
    add("eye_02");
    add("eye_03");
    add("eye_04");
    add("eye_05");
    add("eye_06");
    add("eye_07");
    add("eye_08");
        if (answers.eye_06 !== "Yes"){
    add("eye_09");
    add("eye_10");}
    add("eye_11");
    add("eye_12");
    add("eye_13");
    add("eye_14");
    add("eye_15");
    add("eye_16");
    add("eye_17");
    add("eye_18");}})
    //Module1
    withSectionTitle("Headache", () => {
    add1("prom_headache");
      if (answers.prom_headache === "Yes"){
    add1("neuro_head01");
    add1("neuro_head02");
    add1("neuro_head03");
    add1("neuro_head04");
    add1("neuro_head05");
    add1("neuro_head06");
        if (answers.neuro_head06 === "No"){
    add1("neuro_head061");}
    add1("neuro_head07");
    add1("neuro_head08");
    add1("neuro_head09");
    add1("neuro_head10");
    add1("neuro_head11");
    add1("neuro_head12");
    add1("neuro_head13");
    add1("neuro_head14");
    add1("neuro_head15");}})
    //Module2
    withSectionTitle("Fever", () => {
    add2("prom_fever");
      if (answers.prom_fever === "Yes"){
    add2("fever_01");
    add2("fever_02");
    add2("fever_03");
    add2("fever_04");
        if (answers.fever_04 === "Yes"){
    add2("fever_041");}
    add2("fever_05");
    add2("fever_06");
    add2("fever_07");
    add2("fever_08");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Feeling generally unwell
  if (complaints.includes("Feeling generally unwell")) {
    setComplaint("Feeling generally unwell", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Fever", () => {
    add("confirm_fever");
      if (answers.confirm_fever === "Proceed"){
    add("fever_01");
    add("fever_02");
    add("fever_03");
    add("fever_04");
        if (answers.fever_04 === "Yes"){
    add("fever_041");}
    add("fever_05");
    add("fever_06");
    add("fever_07");
    add("fever_08");}})
    //Module1
    withSectionTitle("Shortness of breath", () => {
    add1("prom_sob");
      if (answers.prom_sob === "Yes"){
    add1("resp_sob01");
    add1("resp_sob02");
    add1("resp_sob03");
    add1("resp_sob04");
    add1("resp_sob05");
    add1("resp_sob06");
    add1("resp_sob07");
    add1("resp_sob08");
    add1("resp_sob09");}})
    //Module2
    withSectionTitle("Cough", () => {
    add2("prom_cough");
      if (answers.prom_cough === "Yes"){
    add2("resp_cou01");
    add2("resp_cou02");
      if (answers.resp_cou02 === "Yes"){
    add2("resp_cou021");
    add2("resp_cou022");
    add2("resp_cou023");}
    add2("resp_cou03");
    add2("resp_cou04");
    add2("resp_cou05");}})
    //Module3
    withSectionTitle("Vomiting", () => {
    add3("prom_vomiting");
      if (answers.prom_vomiting === "Yes"){
    add3("git_vom02");
    add3("git_vom03");
    add3("git_vom04");
    add3("git_vom05");}
      if (answers.prom_vomiting === "No"){
    add3("git_vom01");}
    //Module4
    add4("prom_diarrhoea");
      if (answers.prom_diarrhoea === "Yes"){
    add4("git_dia01");
    add4("git_dia02");
    add4("git_dia03");
        if (answers.git_dia03 === "Yes"){
    add4("git_dia021");}
    add4("git_02");
    add4("git_03");
    add4("git_04");}})
    //Module5
    withSectionTitle("Abdominal pain", () => {
    add5("prom_abdopain");
      if (answers.prom_abdopain === "Yes"){
    add5("pain_git_01");
    add5("pain_git_02");
    add5("pain_git_03");
      if (answers.pain_git_03 === "Yes"){
    add5("pain_git_031A");}
      if (answers.pain_git_03 === "No"){
    add5("pain_git_031B");}
    add5("pain_git_04");
    add5("pain_git_05");
      if (answers.pain_git_05 === "Multiple episodes"){
    add5("pain_git_051");
    add5("pain_git_052");
    add5("pain_git_053");}
    add5("pain_git_06");
      if (answers.pain_git_03 === "Yes"){
    add5("pain_git_07A");}
      if (answers.pain_git_03 === "No"){
    add5("pain_git_07B");}}})
    //Module6
    withSectionTitle("Abdominal pain", () => {
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_pain01");}
      if (answers.pain_git_01?.includes("Epi")){
    add6("git_pain02");
    add6("git_pain03");}
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_pain04");
    add6("git_pain05");
    add6("git_pain06");}
      if (answers.pain_git_01?.includes("RIF")){
    add6("git_pain07");}
    add6("git_pain08");
    add6("git_06");
      if (answers.pain_git_01?.includes("Epi") || answers.pain_git_01?.includes("RUQ")){
    add6("git_07");}})
    //Module7
    withSectionTitle("Urinary problem", () => {
    add7("prom_gu");
      if (answers.prom_gu === "Yes"){
        if (!answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add7("gu_01");
      if (answers.gu_01 === "Yes"){
    add7("gu_02");
      if (answers.gu_02 === "Yes"){
    add7("gu_021");}
    add7("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add7("gu_031");}
    add7("gu_04");
      if (answers.gu_04 === "Yes"){
    add7("gu_041");}}}
      if (answers.gu_01 === "No"){
    add7("gu_05");
        if (answers.gu_05 === "Yes"){
    add7("gu_051");}}
    add7("gu_06");
      if (answers.gu_06 === "Yes"){
    add7("gu_061");}
    add7("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add7("gu_071");
    add7("gu_072");}
    add7("gu_08");
    add7("gu_09");
      if (answers.gu_09 === "Yes"){
    add7("gu_091");}
    add7("gu_10");
      if (answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add7("gu_cbd01");
        if (answers.gu_cbd01 === "Yes"){
    add7("gu_cbd011");}
    add7("gu_cbd02");
        if (answers.gu_cbd02 === "Yes"){
    add7("gu_cbd021");}
    add7("gu_cbd03");
        if (answers.gu_cbd03 === "Yes"){
    add7("gu_cbd031");}
    add7("gu_cbd04");
        if (answers.gu_cbd04 === "Yes"){
    add7("gu_cbd041");}}}})
    //Module8
    withSectionTitle("Headache", () => {
    add8("prom_headache");
      if (answers.prom_headache === "Yes"){
    add8("neuro_head01");
    add8("neuro_head02");
    add8("neuro_head03");
    add8("neuro_head04");
    add8("neuro_head05");
    add8("neuro_head06");
        if (answers.neuro_head06 === "No"){
    add8("neuro_head061");}
    add8("neuro_head07");
    add8("neuro_head08");}})
    //Module9
    withSectionTitle("Skin problem", () => {
    add9("prom_skin");
      if (answers.prom_skin === "Yes"){
    add9("skin_01");
    add9("skin_02");
    add9("skin_03");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");
    add10("sys_05");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Weakness or numbness
  if (complaints.includes("Weakness or numbness")) {
    setComplaint("Weakness or numbness", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Weakness or numbness", () => {
    add("confirm_weakness");
      if (answers.confirm_weakness === "Proceed"){
    add("neuro_weak01");
        if (answers.neuro_weak01 === "Weak in certain parts of body"){
    add("neuro_weak011");
    add("neuro_weak012");}
    add("neuro_weak02");
    add("neuro_weak03");
        if (Number(answers.neuro_weak03) === 1){
    add("neuro_weak031");}
    add("neuro_weak04");
    add("neuro_weak05");
        if (answers.neuro_weak05 === "Yes (left side)" || answers.neuro_weak05 === "Yes (right side)"){
    add("neuro_weak051");}
    add("neuro_weak06");
    add("neuro_weak07");
    add("neuro_weak08");
    add("neuro_weak09");}})
    //Module1
    withSectionTitle("Injury", () => {
    add1("prom_injury");
      if (answers.prom_injury === "Yes"){
    add1("inj_01");
    add1("inj_02");
    add1("inj_03");
    add1("inj_04");
    add1("inj_05");}})
    //Module2
    withSectionTitle("Fever", () => {
    add2("prom_fever");
      if (answers.prom_fever === "Yes"){
    add2("fever_01");
    add2("fever_02");
    add2("fever_03");
    add2("fever_04");
        if (answers.fever_04 === "Yes"){
    add2("fever_041");}
    add2("fever_05");
    add2("fever_06");
    add2("fever_07");
    add2("fever_08");}})
    //Module10
    withSectionTitle("Systemic problem", () => {
    add10("sys_01");
    add10("sys_02");
    add10("sys_03");
    add10("sys_04");})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Skin problem
  if (complaints.includes("Skin problem")) {
    setComplaint("Skin problem", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Skin problem", () => {
    add("confirm_skin");
      if (answers.confirm_skin === "Proceed"){
    add("skin_01");
    add("skin_02");
    add("skin_03");}})
    //Module1
    withSectionTitle("Shortness of breath", () => {
      if (answers.skin_02?.includes("Head")){
    add1("prom_sob");
      if (answers.prom_sob === "Yes"){
    add1("resp_sob01");
    add1("resp_sob02");
    add1("resp_sob03");
    add1("resp_sob04");
    add1("resp_sob05");
    add1("resp_sob06");
    add1("resp_sob07");
    add1("resp_sob08");
    add1("resp_sob09");}}})
    //Module2
    withSectionTitle("Shortness of breath", () => {
      if (answers.skin_01?.includes("Itching") || answers.skin_01?.includes("Rashes")){
    add2("prom_sob");
      if (answers.prom_sob === "Yes"){
    add2("resp_sob01");
    add2("resp_sob02");
    add2("resp_sob03");
    add2("resp_sob04");
    add2("resp_sob05");
    add2("resp_sob06");
    add2("resp_sob07");
    add2("resp_sob08");
    add2("resp_sob09");}}})
    //Module3
    withSectionTitle("Fever", () => {
    add3("prom_fever");
      if (answers.prom_fever === "Yes"){
    add3("fever_01");
    add3("fever_02");
    add3("fever_03");
    add3("fever_04");
        if (answers.fever_04 === "Yes"){
    add3("fever_041");}
    add3("fever_05");
    add3("fever_06");
    add3("fever_07");
    add3("fever_08");}})
    //Module4
    withSectionTitle("Dizziness", () => {
      if (answers.skin_01?.includes("Itching") || answers.skin_01?.includes("Rashes")){
    add4("prom_dizziness");}})
    //Module5
    withSectionTitle("Abdominal pain", () => {
      if (answers.skin_01?.includes("Itching") || answers.skin_01?.includes("Rashes")){
    add5("prom_abdopain");}})
    //Module6
    withSectionTitle("Diarrhoea", () => {
      if (answers.skin_01?.includes("Itching") || answers.skin_01?.includes("Rashes")){
    add5("prom_diarrhoea");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
      if (answers.skin_01?.includes("Itching") || answers.skin_01?.includes("Rashes")){
    addmed("med_02");}    
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Problem with passing urine
  if (complaints.includes("Problem with passing urine")) {
    setComplaint("Problem with passing urine", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Problem with Passing Urine", () => {
    add("confirm_gu");
      if (answers.confirm_gu === "Proceed"){
        if (!answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add("gu_01");
      if (answers.gu_01 === "Yes"){
    add("gu_02");
      if (answers.gu_02 === "Yes"){
    add("gu_021");}
    add("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add("gu_031");}
    add("gu_04");
      if (answers.gu_04 === "Yes"){
    add("gu_041");}}
      if (answers.gu_01 === "No"){
    add("gu_05");
        if (answers.gu_05 === "Yes"){
    add("gu_051");}}
    add("gu_06");
      if (answers.gu_06 === "Yes"){
    add("gu_061");}
    add("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add("gu_071");
    add("gu_072");}
    add("gu_08");
    add("gu_09");
      if (answers.gu_09 === "Yes"){
    add("gu_091");}
    add("gu_10");
    add("gu_11");}
      if (answers.prompt_como02?.includes("Urinary catheter (tube to pass urine)")){
    add("gu_04");
      if (answers.gu_04 === "Yes"){
    add("gu_041");}
      if (answers.gu_01 === "No"){
    add("gu_05");
        if (answers.gu_05 === "Yes"){
    add("gu_051");}}
    add("gu_06");
      if (answers.gu_06 === "Yes"){
    add("gu_061");}
    add("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add("gu_071");
    add("gu_072");}
    add("gu_08");
    add("gu_09");
      if (answers.gu_09 === "Yes"){
    add("gu_091");}
    add("gu_cbd01");
        if (answers.gu_cbd01 === "Yes"){
    add("gu_cbd011");}
    add("gu_cbd02");
        if (answers.gu_cbd02 === "Yes"){
    add("gu_cbd021");}
    add("gu_cbd03");
        if (answers.gu_cbd03 === "Yes"){
    add("gu_cbd031");}
    add("gu_cbd04");
        if (answers.gu_cbd04 === "Yes"){
    add("gu_cbd041");}}}})
    //Module1
    withSectionTitle("Testicle problem", () => {
      if (answers.gender === "Male"){
    add1("gu_tes01");
        if (answers.gu_tes01 === "Yes"){
    add1("gu_tes011");
    add1("gu_tes012");
    add1("gu_tes013");
    add1("gu_tes014");
    add1("gu_tes015");}
    add1("gu_tes02");
        if (answers.gu_tes02 === "Yes"){
    add1("gu_tes021");
    add1("gu_tes022");}}})
    //Module2
    withSectionTitle("Fever", () => {
    add2("prom_fever");
      if (answers.prom_fever === "Yes"){
    add2("fever_01");
    add2("fever_02");
    add2("fever_03");
    add2("fever_04");
        if (answers.fever_04 === "Yes"){
    add2("fever_041");}
    add2("fever_05");
    add2("fever_06");
    add2("fever_07");
    add2("fever_08");}})
    //Module3
    withSectionTitle("Weakness", () => {
      if (answers.gu_11 === "Yes"){
    add3("git_10");
    add3("prom_weakness");
      if (answers.prom_weakness === "Yes"){
    add3("neuro_weak01");
        if (answers.neuro_weak01 === "Weak in certain parts of body"){
    add3("neuro_weak011");
    add3("neuro_weak012");}
    add3("neuro_weak02");
    add3("neuro_weak03");
        if (Number(answers.neuro_weak03) === 1){
    add3("neuro_weak031");}
    add3("neuro_weak04");
    add3("neuro_weak05");
        if (answers.neuro_weak05 === "Yes (left side)" || answers.neuro_weak05 === "Yes (right side)"){
    add3("neuro_weak051");}
    add3("neuro_weak06");
    add3("neuro_weak07");
    add3("neuro_weak08");
    add3("neuro_weak09");
    add3("msk_10")}}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Bleeding
  if (complaints.includes("Bleeding")) {
    setComplaint("Bleeding", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02");
    //General
    withSectionTitle("Bleeding", () => {
    add("confirm_bleeding");
      if (answers.confirm_bleeding === "Proceed"){
    add("bleed_01");
    add("bleed_02");
    add("bleed_03");
    add("bleed_04");}})
    //Module1
    withSectionTitle("Vomiting", () => {
      if (answers.bleed_01 === "Vomiting blood"){
    add1("git_vom02");
    add1("git_vom03");
    add1("git_vom04");
    add1("prom_abdopain");}})
    //Module2
    withSectionTitle("Diarrhoea", () => {
      if (answers.bleed_01 === "When passing motion (stools)"){
    add2("prom_diarrhoea");
    add2("prom_abdopain");}})
    //Module3
    withSectionTitle("Urinary problem", () => {
      if (answers.bleed_01 === "In the urine"){
    add3("prom_gu");
        if (answers.prom_gu === "Yes"){
    add3("gu_01");
      if (answers.gu_01 === "Yes"){
    add3("gu_02");
      if (answers.gu_02 === "Yes"){
    add3("gu_021");}
    add3("gu_03");
      if (answers.gu_03 === "More often" || answers.gu_03 === "Less amount"){
    add3("gu_031");}
    add3("gu_04");
      if (answers.gu_04 === "Yes"){
    add3("gu_041");}}
      if (answers.gu_01 === "No"){
    add3("gu_05");
        if (answers.gu_05 === "Yes"){
    add3("gu_051");}}
    add3("gu_06");
      if (answers.gu_06 === "Yes"){
    add3("gu_061");}
    add3("gu_07");
      if (answers.gu_07 === "Yes (left side)" || answers.gu_07 === "Yes (right side)"){
    add3("gu_071");
    add3("gu_072");}
    add3("gu_08");
    add3("gu_09");
      if (answers.gu_09 === "Yes"){
    add3("gu_091");}
    add3("gu_10");
    add3("gu_11");}}})
    //Module4
    withSectionTitle("Injury", () => {
      if (answers.bleed_02 === "After an injury or cut"){
    add4("prom_injury");
        if (answers.prom_injury === "Yes"){
    add4("inj_01");
    add4("inj_02");
    add4("inj_03");
    add4("inj_04");
    add4("inj_05");
    add4("inj_region01");
        if (answers.inj_01?.includes("RightUpperLeg") || answers.inj_01?.includes("LeftUpperLeg") || answers.inj_01?.includes("RightLowerLeg") || answers.inj_01?.includes("LeftLowerLeg")){
    add4("inj_region02");}
        if (answers.inj_01?.includes("RightUpperLeg") || answers.inj_01?.includes("LeftUpperLeg") || answers.inj_01?.includes("RightLowerLeg") || answers.inj_01?.includes("LeftLowerLeg") || answers.inj_01?.includes("RightUpperArm") || answers.inj_01?.includes("LeftUpperArm") || answers.inj_01?.includes("RightForearm") || answers.inj_01?.includes("LeftForearm")){
    add4("inj_region03");}
        if (answers.inj_region01 === "Laceration (cut)" || answers.inj_region01 === "Open wound"){
    add4("inj_region04");}}}})
    //Module5
    withSectionTitle("Pregnancy", () => {
      if (answers.bleed_01 === "Vaginal bleeding"){
    add5("og_01");
        if (answers.og_01 === "Yes"){
    add5("og_011");}
        if (answers.og_01 === "Not sure"){
    add5("og_012");}
        if (answers.og_01 === "Yes"){
    add5("og_013");}
          if (answers.og_013 === "Yes"){
    add5("og_0131");}
        if (answers.og_01 === "Yes"){
    add5("og_03");}}})
    //Module6
    withSectionTitle("Nosebleed", () => {
      if (answers.bleed_01 === "Nosebleed"){
    add6("ent_nose02");
    add6("ent_nose03");
    add6("ent_nose04");
    add6("ent_nose05");
    add6("ent_nose06");}})
    //Module7
    withSectionTitle("Skin problem", () => {
      if (answers.bleed_01 === "From a skin ulcer or sore"){
    add3("skin_01");
    add3("skin_02");
    add3("skin_03");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Injury
  if (complaints.includes("Injury")) {
    setComplaint("Injury", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    add0("prompt_como02_lite");
    //General
    withSectionTitle("Injury", () => {
    add("confirm_injury");
        if (answers.confirm_injury === "Proceed"){
    add("inj_01");}
    //Module1
    add1("inj_region01");
        if (answers.inj_01?.includes("RightUpperLeg") || answers.inj_01?.includes("LeftUpperLeg") || answers.inj_01?.includes("RightLowerLeg") || answers.inj_01?.includes("LeftLowerLeg")){
    add1("inj_region02");}
        if (answers.inj_01?.includes("RightUpperLeg") || answers.inj_01?.includes("LeftUpperLeg") || answers.inj_01?.includes("RightLowerLeg") || answers.inj_01?.includes("LeftLowerLeg") || answers.inj_01?.includes("RightUpperArm") || answers.inj_01?.includes("LeftUpperArm") || answers.inj_01?.includes("RightForearm") || answers.inj_01?.includes("LeftForearm")){
    add1("inj_region03");}
        if (answers.inj_region01 === "Laceration (cut)" || answers.inj_region01 === "Open wound"){
    add1("inj_region04");}})
    //Module2
    withSectionTitle("Eye problem", () => {
      if (answers.inj_01?.includes("Head")){
    add2("inj_eye00");
        if (answers.inj_eye00 === "Yes"){
    add2("inj_eye01");
    add2("inj_eye02");
        if (answers.inj_eye02 === "Yes"){
    add2("inj_eye021");}
    add2("inj_eye03");
    add2("inj_eye04");}}})
    //Module3
    withSectionTitle("Shortness of breath", () => {
      if (answers.inj_01?.includes("Chest")){
    add3("prom_sob");
      if (answers.prom_sob === "Yes"){
    add3("resp_sob01");
    add3("resp_sob02");
    add3("resp_sob03");
    add3("resp_sob04");
    add3("resp_sob05");
    add3("resp_sob06");
    add3("resp_sob07");
    add3("resp_sob08");
    add3("resp_sob09");}}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    addmed("med_07");
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}

  // Ear, Nose, or Throat problem
  if (complaints.includes("Ear, Nose, or Throat problem")) {
    setComplaint("Ear, Nose, or Throat problem", () => {
    //Comorbid
    add0("prompt_como01");
      if (answers.prompt_como01?.includes("Cancer")) {
    add0("como_081");}
      if (answers.prompt_como01?.includes("Kidney disease")) {
    add0("como_091");
        if (answers.como_091 === "Yes"){
    add0("como_092");}}
    add0("como_10");
    //General
    withSectionTitle("Ear, Nose or Throat Problem", () => {
    add("confirm_ent");
        if (answers.confirm_ent === "Proceed"){
    add("ent_00");}})
    //Module1
    withSectionTitle("Ear problem", () => {
      if (answers.ent_00 === "Ear or hearing problem"){
    add1("ent_ear01");
    add1("ent_ear02");
    add1("ent_ear03");
        if (answers.ent_ear01 === "Reduced or muffled hearing" || answers.ent_ear01 === "Complete hearing loss"){
    add1("ent_ear04");}
        if (answers.ent_ear01 === "Something entered or got stuck in the ear"){
    add1("ent_ear05");}
    add1("ent_ear06");}})
    //Module2
    withSectionTitle("Nose problem", () => {
      if (answers.ent_00 === "Nose problem"){
    add2("ent_nose01");
    add2("ent_nose02");
    add2("ent_nose03");
        if (answers.ent_nose01 === "Nosebleed"){
    add2("ent_nose04");
    add2("ent_nose05");}
        if (answers.ent_nose01 === "Something entered or got stuck in the nose"){
    add2("ent_nose06");}}})
    //Module3
    withSectionTitle("Throat problem", () => {
      if (answers.ent_00 === "Throat problem"){
    add3("ent_throat01");
    add3("ent_throat02");
    add3("ent_throat03");
        if (answers.ent_throat01 === "Feeling of something stuck in the throat"){
    add3("ent_throat04");}
    add3("ent_throat05");
        if (answers.ent_throat01 === "Difficulty swallowing"){
    add3("ent_throat06");}
    add3("ent_throat07");}})
    //Module4
    withSectionTitle("Injury", () => {
      if (answers.ent_ear06 === "Yes or possibly" || answers.ent_nose04 === "After an injury"){
    add4("inj_04");
    add4("inj_05");
    add4("inj_06");
    add4("inj_region01");}})
    //Module5
    withSectionTitle("Respiratory problem", () => {
      if (answers.ent_00 === "Throat problem"){
    add5("prom_sob");
      if (answers.prom_sob === "Yes"){
    add5("resp_sob01");
    add5("resp_sob02");
    add5("resp_sob03");
    add5("resp_sob04");
    add5("resp_sob05");
    add5("resp_sob06");
    add5("resp_sob07");
    add5("resp_sob08");
    add5("resp_sob09");}
    add5("prom_cough");
      if (answers.prom_cough === "Yes"){
    add5("resp_cou01");
    add5("resp_cou02");
      if (answers.resp_cou02 === "Yes"){
    add5("resp_cou021");
    add5("resp_cou022");
    add5("resp_cou023");}
    add5("resp_cou03");}}})
    //Module6
    withSectionTitle("Fever", () => {
    add6("prom_fever");
      if (answers.prom_fever === "Yes"){
    add6("fever_01");
    add6("fever_02");
    add6("fever_03");
    add6("fever_04");
        if (answers.fever_04 === "Yes"){
    add6("fever_041");}
    add6("fever_05");
    add6("fever_06");
    add6("fever_07");
    add6("fever_08");}})
    //Medical
    addmed("med_gen01");
      if (answers.med_gen01 === "Yes"){
    addmed("med_gen011");
    addmed("med_gen012");
        if (answers.med_gen012 === "Yes"){
    addmed("med_gen0121");}
    addmed("med_gen013");
    addmed("med_gen014");
    addmed("med_gen015");}
    addmed("med_gen02");
      if (answers.med_gen02 === "Yes"){
    addmed("med_gen021");
    addmed("med_gen022");
    addmed("med_gen023");}
    //Social
    addsoc("soc_gen01");
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen011");}
      if (answers.soc_gen01 === "Used to smoke"){
    addsoc("soc_gen012");}
      if (answers.soc_gen01 === "Used to smoke" || answers.soc_gen01 === "Currently smoke"){
    addsoc("soc_gen013");}
    addsoc("soc_gen02");
      if (answers.soc_gen02 === "Occasionally" || answers.soc_gen02 === "Regularly"){
    addsoc("soc_gen021");}
    addsoc("soc_gen03");
    addsoc("soc_gen04");
  });}



  const uniqueQuestions = [];
  const seen = new Set();

  questions.forEach(q => {

    // ❌ Skip lite if full already exists
  if (q.id === "prompt_como02_lite" && seen.has("prompt_como02")) {
    return;
  }

  // ❌ Skip prom_fever if confirm_fever already exists
  if (q.id === "prom_fever" && seen.has("confirm_fever")) {
    return;
  }

  // ✅ Remove lite if full appears later
  if (q.id === "prompt_como02") {
    const liteIndex = uniqueQuestions.findIndex(x => x.id === "prompt_como02_lite");
    if (liteIndex !== -1) {
      uniqueQuestions.splice(liteIndex, 1);
      seen.delete("prompt_como02_lite");
    }
  }

  // ✅ Remove prom if confirm appears later
  if (q.id === "confirm_fever") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_fever");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_fever");
    }
  }

  if (q.id === "prom_cough" && seen.has("confirm_cough")) {
    return;
  }

  if (q.id === "confirm_cough") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_cough");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_cough");
    }
  }

  if (q.id === "prom_sob" && seen.has("confirm_sob")) {
    return;
  }

  if (q.id === "confirm_sob") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_sob");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_sob");
    }
  }

  if (q.id === "prom_vomiting" && seen.has("confirm_vomiting")) {
    return;
  }

  if (q.id === "confirm_vomiting") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_vomiting");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_vomiting");
    }
  }

  if (q.id === "prom_diarrhoea" && seen.has("confirm_diarrhoea")) {
    return;
  }

  if (q.id === "confirm_diarrhoea") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_diarrhoea");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_diarrhoea");
    }
  }

  if (q.id === "prom_headache" && seen.has("confirm_headache")) {
    return;
  }

  if (q.id === "confirm_headache") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_headache");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_headache");
    }
  }

  if (q.id === "prom_dizziness" && seen.has("confirm_dizziness")) {
    return;
  }

  if (q.id === "confirm_dizziness") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_dizziness");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_dizziness");
    }
  }

  if (q.id === "prom_syncope" && seen.has("confirm_syncope")) {
    return;
  }

  if (q.id === "confirm_syncope") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_syncope");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_syncope");
    }
  }

  if (q.id === "prom_abdopain" && seen.has("confirm_abdopain")) {
    return;
  }

  if (q.id === "confirm_abdopain") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_abdopain");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_abdopain");
    }
  }

  if (q.id === "prom_cardpain" && seen.has("confirm_cardpain")) {
    return;
  }

  if (q.id === "confirm_cardpain") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_cardpain");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_cardpain");
    }
  }

  if (q.id === "prom_msk" && seen.has("confirm_msk")) {
    return;
  }

  if (q.id === "confirm_msk") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_msk");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_msk");
    }
  }

  if (q.id === "prom_eye" && seen.has("confirm_eye")) {
    return;
  }

  if (q.id === "confirm_eye") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_eye");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_eye");
    }
  }

  if (q.id === "prom_weakness" && seen.has("confirm_weakness")) {
    return;
  }

  if (q.id === "confirm_weakness") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_weakness");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_weakness");
    }
  }

  if (q.id === "prom_skin" && seen.has("confirm_skin")) {
    return;
  }

  if (q.id === "confirm_skin") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_skin");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_skin");
    }
  }

  if (q.id === "prom_gu" && seen.has("confirm_gu")) {
    return;
  }

  if (q.id === "confirm_gu") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_gu");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_gu");
    }
  }

  if (q.id === "prom_bleeding" && seen.has("confirm_bleeding")) {
    return;
  }

  if (q.id === "confirm_bleeding") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_bleeding");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_bleeding");
    }
  }

  if (q.id === "prom_injury" && seen.has("confirm_injury")) {
    return;
  }

  if (q.id === "confirm_injury") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_injury");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_injury");
    }
  }

  if (q.id === "prom_ent" && seen.has("confirm_ent")) {
    return;
  }

  if (q.id === "confirm_ent") {
    const promIndex = uniqueQuestions.findIndex(x => x.id === "prom_ent");
    if (promIndex !== -1) {
      uniqueQuestions.splice(promIndex, 1);
      seen.delete("prom_ent");
    }
  }

    if (!seen.has(q.id)) {
      seen.add(q.id);
      uniqueQuestions.push(q);
    }
  });

  return uniqueQuestions;
};