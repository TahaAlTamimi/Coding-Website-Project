const express = require("express");
var router = express.Router();
const mongo = require("../database/events");

router.get("/", (req, res) => {
  res.send("Events Router Working Fine");
});

module.exports = router;
