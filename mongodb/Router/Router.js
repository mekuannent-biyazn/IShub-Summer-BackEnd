const express = require("express");
const router = express.Router();
const Blog = require("../userSchema/schema");

router.post("/createUser", async (req, res) => {
  try {
    const user = await Blog.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      skill: req.body.skill,
      createdAt: req.body.createdAt,
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/userCreation", async (req, res) => {
  try {
    const user = new Blog({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      skill: req.body.skill,
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(404).send(`Some thing is wrong ! ${err.message}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Blog.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(`Enternal server error! ${err.message}`);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await Blog.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(`Enternal server error`);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await Blog.findByIdAndDelete(req.params.id);
    res
      .status(402)
      .send(`user with id ${req.params.id} is deleted successfully! `);
    if (!user) {
      res.send(`user with id: ${req.params.id} is not available!`);
    }
  } catch (err) {
    res.status(500).json({ message: "Enternal server error" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const user = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.send(`user with id: ${req.params.id} is not available!`);
    }
    res.status(200).json({
      message: `user with id ${req.params.id} is updated successfully! `,
      updateddata: user,
    });
  } catch (err) {
    res.status(500).json({ message: "Enternal server error" });
  }
});

module.exports = router;
