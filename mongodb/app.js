const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./Router/Router");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

mongoose.connect(process.env.MONGODB_URI);

const PORT = 6333;
app.listen(PORT, () => {
  console.log(`server started in: ${PORT}`);
});
