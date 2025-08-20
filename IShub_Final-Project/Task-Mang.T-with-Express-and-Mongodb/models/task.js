const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("task", taskSchema, "task");

module.exports = Task;
