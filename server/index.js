const express = require("express");
const app = express();
app.use(express.json());
const cors=require("cors");
const db = require("./models");
app.use(cors());
const postrouter = require("./routes/Posts");
const commentrouter = require("./routes/Comments");
const userrouter=require("./routes/Users");

app.use("/posts",postrouter);
app.use("/comments",commentrouter);
app.use("/auth",userrouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});