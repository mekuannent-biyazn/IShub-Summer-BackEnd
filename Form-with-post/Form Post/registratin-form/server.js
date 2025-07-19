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
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // Temporary user store (in-memory)
// const users = [];

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname)); // Serve static files (html/css)

// // Serve registration form at root (optional)
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "registration.html"));
// });

// // Serve login page (optional)
// app.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "login.html"));
// });

// // Handle registration submission
// app.post("/submit", (req, res) => {
//   const { firstName, lastName, email, password, age, sex, location } = req.body;

//   // Check if email already registered
//   if (users.find((u) => u.email === email)) {
//     return res.send(
//       `<h2>Email already registered. <a href="/login">Login here</a></h2>`
//     );
//   }

//   // Save user (for demo, only saving email + password, but you can save others)
//   users.push({ firstName, lastName, email, password, age, sex, location });

//   res.send(
//     `<h2>Registration successful! Welcome, ${firstName}.</h2><a href="/login">Go to Login</a>`
//   );
// });

// // Handle login submission
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find((u) => u.email === email && u.password === password);

//   if (user) {
//     res.send(`<h2>Login successful! Welcome back, ${user.firstName}.</h2>`);
//   } else {
//     res.send(
//       `<h2>Invalid email or password. <a href="/login">Try again</a></h2>`
//     );
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// });
