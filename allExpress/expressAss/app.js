const express = require("express");
const routes = express.Router();
const routes2 = express.Router();

const app = express();

routes.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("Well Come To The Home Page!");
});

routes.get("/about", (req, res) => {
  res.send("About Page!");
});

routes2.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("User Home");
});

routes2.get("/profile", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("User Profile!");
});

routes2.get("/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`User Id: ${userID}`);
});

function FirstHandler(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  console.log("Accessing Setings");
  next();
}

function SecondHandler(req, res) {
  console.log(`${req.method} ${req.url}`);
  res.send("User Setinggs!");
}

routes2.get("/settings", [FirstHandler, SecondHandler]);

routes.use("/users", routes2);
app.use("/", routes);

const PORT = 4004;

app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
