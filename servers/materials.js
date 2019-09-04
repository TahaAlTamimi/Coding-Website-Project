const express = require("express");
var router = express.Router();
const mongo = require("../database/materials");

// By Tamimi

router.get("/", (req, res) => {
  
  res.send("Materials Router Working Fine");

});


//By Tamimi post data from data base

router.post("/a", (req, res) => {

  mongo.myMaterial(result => {

    res.json(result);

  });

});



router.get("/all", (req, res) => {

  mongo.getMaterial(result => {

    res.json(result);

  });

});


module.exports = router;