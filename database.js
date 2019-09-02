const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codingWebsite", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection failed");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

let vidoesSchema = new mongoose.Schema({
  title: String,
  dis: String
});

let materialSchema = new mongoose.Schema({
  title: String,
  dis: String
});

let Videos = mongoose.model("vidoes", vidoesSchema);
let Material = mongoose.model("material", materialSchema);

module.exports = {
  Videos,
  Material
};
// let getVidoes = cb => {
//   Vidoes.find({}, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       cb(data);
//     }
//   });
// };

// let createVideo = (add, cb) => {
//   // console.log("Add", add);
//   // console.log("cb", cb);

//   Vidoes.create(add, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       getVidoes(cb);
//     }
//   });
// };

// module.exports = {
//   getVidoes,
//   createVideo
// };
