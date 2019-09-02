// const db = require("../database");
// console.log("db:", db.l);

// let getVidoes = cb => {
//   db.V.find({}, (err, data) => {
//     if (err) {
//       cb(err);
//     } else {
//       console.log("data:", data);
//       cb(data);
//     }
//   });
// };

// module.exports = {
//   getVidoes
// };

const db = require("../database");
let getMaterial = cb => {
  db.Material.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
};

module.exports = {
  getMaterial
};
