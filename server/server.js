const express = require("express");
const app = express();
const config = require("../twit_config/config");
const cors = require("cors");
// const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const Twit = require("twit");

const T = new Twit(config);

app.listen(3000, function () {
  console.log("listening on 3000");
});
