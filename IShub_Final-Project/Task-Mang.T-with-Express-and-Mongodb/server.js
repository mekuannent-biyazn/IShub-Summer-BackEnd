const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routers = require("./routes/taskRoutes");

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("mongoDB connected success fully!");
  })
  .catch((err) => {
    console.error("mongoDB connection faailed!", err.message);
  });

app.use("/", routers);
app.get("/", (req, res) => {
  res.send("The Task Manager is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
