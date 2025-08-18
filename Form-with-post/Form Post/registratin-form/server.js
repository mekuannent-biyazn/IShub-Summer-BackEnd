const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const users = [];

app.post("/submit", (req, res) => {
  const { firstName, lastName, email, password, age, sex, location } = req.body;

  const user = { firstName, lastName, email, password, age, sex, location };
  users.push(user);

  console.log("Form Data Received Succesfully:", user);
  console.log(req.body);

  res.send(`
        <h2>thank you for registering,${firstName}</h2>
    `);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    console.log(`Well come back: ${user.firstName}`);
    res.send(`Welcome back: ${user.firstName}`);
  } else {
    res.send(
      `please try again you have password or email is incorect <a href="http://127.0.0.1:5500/login.html">try again</a>`
    );
  }
});

app.get("/", (req, res) => {
  const data = req.query;
  res.send(`you send this use get methood: ${JSON.stringify(data)}`);
});

app.get("/", (req, res) => {
  console.log("logdin success fully!");
  res.send(`well come back! to home page `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
