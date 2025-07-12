const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/submit", (req, res) => {
  const { firstName, lastName, email, password, age, sex, location } = req.body;

  console.log("Form Data Received Succesfully:");
  console.log(req.body);

  res.send(`
        <h2>thank you for registering,${firstName}</h2>
        <p><strong>FullName:</strong>${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Sex:</strong> ${sex}</p>
        <p><strong>Location:</strong>${location}</p>
    `);
});

app.get("/submit", (req, res) => {
  const data = req.query;
  res.send(`you send this use get methood: $(JSON.stringify(data))`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
