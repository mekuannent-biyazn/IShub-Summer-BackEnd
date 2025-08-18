const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const auth = require("./routes/auth.routes");
const users = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/api/v1/auth", auth);
app.use("/api/v1/users", users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
