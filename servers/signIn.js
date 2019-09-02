const express = require("express");
var router = express.Router();
const mongo = require("../database/signIn");

router.get("/", (req, res) => {
  res.send("signIn Router Working Fine");
});
module.exports = router;
