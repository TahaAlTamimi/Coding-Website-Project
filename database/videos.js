const db = require("../database");
console.log("db:", db);

let getVidoes = cb => {
  db.Videos.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};

module.exports = {
  getVidoes
};
