const express = require("express");
const { solve, simplify } = require('./../services/mathsteps.service')
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>API Base, you got no data!</h2>`);
});

router.route("/mathsteps").post((req, res) => {
  const { expression } = req.body;
  let result;
  if (expression.includes('=')) {
    result = solve(expression);
  } else {
    result = simplify(expression);
  }
  res.status(200);
  res.send({ data: result });
  
});

module.exports = router;