const Task = require("../models/task");

// get all tasks controller
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Featching task error", err);
    res.status(500).json({ message: "internal server errror!" });
  }
};

// create task controller
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;

    if (!title || !description) {
      res.status(400).json({ Error: "Title and Descrription is reqquired!" });
    }
    const task = new Task({ title, description, dueDate, status });
    const savedTask = await task.save();

    res
      .status(201)
      .json({ message: "task is created success fully", task: savedTask });
  } catch (err) {
    console.error("Error creating task.", err);
    res.status(500).json({ error: "internal server error!" });
  }
};

// get task by id controller
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ message: "task not found!" });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error("error fetching task.", err);
    res.status(500).json({ error: "internal server error!" });
  }
};

// update task by id controller
exports.updateTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      res.status(404).json({ error: "Task Not Found!" });
    }
    res.status(200).json({ message: "Task Updated Success fully!", task });
  } catch (err) {
    console.error("Error Updating task", err);
    res.status(500).json({ error: "internal server error!" });
  }
};

// delete task by id controller
exports.deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      res.status(404).json({ error: "Task not found!" });
    }
    res.status(200).json({ message: "Task Deleted success fully!" });
  } catch (err) {
    console.error("Error deleting task!", err);
    res.status(500).json({ error: "internal server error!" });
  }
};
