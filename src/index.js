const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname + './../.env') });
const express = require("express");
const bodyParser = require('body-parser');
const router = require("./routes");
const serverless = require('serverless-http');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.use("/api", router);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

module.exports.handler = serverless(app);