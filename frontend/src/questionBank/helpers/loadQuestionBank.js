// helpers/loadQuestionBank.js
import Papa from "papaparse";

export const loadQuestionBank = () => {
  return new Promise((resolve, reject) => {
    Papa.parse("/question.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const map = {};

        result.data.forEach(row => {
          if (!row.id) return;

          map[row.id] = row.label; // ✅ FIXED
        });

        resolve(map);
      },
      error: reject
    });
  });
};