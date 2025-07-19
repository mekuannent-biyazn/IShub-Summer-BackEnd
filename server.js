const express = require("express");
const cores = require("coores");

const app = express();
app.use(cores());
const PORT = 5000;

const data = {
  name: "mekuannent",
  city: "Addis Abeba",
  job: "Student",
};

app.get("/info", (req, res) => {
  app.json(data);
});

app.listen(PORT, (req, res) => console.log(`server started on port :${PORT}`));
