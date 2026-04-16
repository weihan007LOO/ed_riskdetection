// helpers/buildQuestions.js

export const buildQuestions = (questionList, answers) => {
  return questionList.filter(q => {
    if (!q.showIf) return true;
    try {
      return q.showIf(answers);
    } catch {
      return false;
    }
  });
};