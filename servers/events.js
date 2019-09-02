const express = require("express");
var router = express.Router();
const mongo = require("../database/events");

router.get("/", (req, res) => {
  res.send("Events Router Working Fine");
});
// localhost9000/events/
// get request with database
router.post('/a', (req, res) => {
  console.log('SERVER:Get Data','get Events from server');
  mongo.createEvents((result) => {
    res.json(result);
  })
});


router.get('/Events', (req, res) => {
  console.log('SERVER:Get Data','get Events from server');
  mongo.getEvents((result) => {
    res.json(result);
  })
});
module.exports = router;
