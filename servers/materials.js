const express = require("express");
var router = express.Router();
const mongo = require("../database/materials");

router.get("/", (req, res) => {
  res.send("Materials Router Working Fine");
});

router.get("/all", (req, res) => {
  mongo.getMaterial(result => {
    res.json(result);
  });
});
module.exports = router;
