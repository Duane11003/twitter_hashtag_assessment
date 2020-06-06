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

// search tweets route

app.post("/search", function (req, res) {
  console.log(req.body, 'is the req.body')
  T.get("search/tweets", { q: `%23${req.body}`, count: 1 }, function (
    err,
    data,
    response
  ) {
    
    res.send(data.statuses)
  });
  // res.send("info from twitter");
});







app.listen(3000, function () {
  console.log("listening on 3000");
});
