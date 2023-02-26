const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h2>API Base, you got no data!</h2>`);
});

router.route("/mathsteps").get((req, res) => {
  res.send(`<h2>Hello from API Mathesteps, working on expression</h2>`);
});

module.exports = router;