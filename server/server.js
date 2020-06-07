const express = require("express");
const app = express();
const config = require("../twit_config/config");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const Twit = require("twit");

const T = new Twit(config);

app.post("/search", function (req, res) {
  T.get("search/tweets", { q: `%23${req.body}`, count: 20 }, function (
    err,
    data,
    response
  ) {
    res.send(data.statuses);
  });
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
