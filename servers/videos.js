const express = require("express");
const cors = require("cors");
var router = express.Router();

const mongo = require("../database/videos");
// console.log("vid:", mongo);

router.get("/", (req, res) => {
  res.send("Videos Router Working Fine");
});

router.get("/all", (req, res) => {
  mongo.getVidoes(result => {
    res.json(result);
  });
});

module.exports = router;
