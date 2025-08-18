const express = require("express");
const routes = express.Router();

routes.get("/", logMethodandUrlMd, (req, res) => {
  res.send("Well Come To The Home Page!");
});

routes.get("/users", logMethodandUrlMd, (req, res) => {
  res.send("User Home");
});

routes.get("/about", logMethodandUrlMd, (req, res) => {
  res.send("About Page!");
});

routes.get("/users/profile", logMethodandUrlMd, (req, res) => {
  res.send("User Profile!");
});

routes.get("/users/settings", [logMethodandUrlMd, FirstHandler, SecondHandler]);

routes.get("/users/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`User Id is: ${userID}`);
});

function FirstHandler(req, res, next) {
  console.log("Accessing Setings");
  next();
}

function logMethodandUrlMd(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function SecondHandler(req, res) {
  res.send("User Setinggs!");
}

module.exports = routes;
