const mathsteps = require('mathsteps');

const solve = (expression) => {
  let solutions = '';
  const steps = mathsteps.solveEquation(expression);
  steps.forEach(step => {
      solutions = step.newEquation.ascii();
  });
  return solutions;
}

const simplify = (expression) => {
  let simplified = '';
  const steps = mathsteps.simplifyExpression(expression);
  steps.forEach(step => {
    simplified = step.newNode.toString();
  });
  return simplified;
}

module.exports = { solve, simplify };