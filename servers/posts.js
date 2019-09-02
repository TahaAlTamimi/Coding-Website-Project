const express = require("express");
var router = express.Router();
const mongo = require("../database/posts");

router.get("/", (req, res) => {
  res.send("Posts Router Working Fine");
});
module.exports = router;
