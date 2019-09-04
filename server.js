const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/videos", require("./servers/videos"));
app.use("/signIn", require("./servers/signIn"));
app.use("/signUp", require("./servers/signUp"));
app.use("/materials", require("./servers/materials"));
app.use("/posts", require("./servers/posts"));
app.use("/events", require("./servers/events"));


// app.get("/", (req, res) => {
//   res.json("server is working");
// });
// app.get("/Vidoes", (req, res) => {
//   mongo.createVideo({ title: "Video1", dis: "html" }, result => {
//     res.json(result);
//   });
// });
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
