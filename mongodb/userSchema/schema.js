const mongoose = require("mongoose");

const users = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  skill: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("User", users);

module.exports = Blog;
