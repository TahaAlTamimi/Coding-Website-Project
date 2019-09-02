const express = require("express");
var router = express.Router();
const mongo = require("../database/signUp");

router.get("/", (req, res) => {
  res.send("signUp Router Working Fine");
});
module.exports = router;
