const Task = require("../models/task");

// get all tasks
exports.getAllTasks = async () => {
  return await Task.find();
};

// create task
exports.createTask = async (taskData) => {
  const task = new Task(taskData);
  return await task.save();
};

// get task by id
exports.getTaskById = async (id) => {
  return await Task.findById(id);
};

// delete task by id
exports.deleteTaskById = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  return deletedTask !== null;
};

// update task by id
exports.updateTaskById = async (id, updateData) => {
  const updatedTask = await Task.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return updatedTask;
};
