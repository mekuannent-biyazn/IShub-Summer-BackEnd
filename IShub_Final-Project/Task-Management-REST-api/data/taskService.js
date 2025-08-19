import Task from "../models/task.js";

let tasks = [];

// get allTasks
export const getAllTasks = () => tasks;

// get task by Id
export const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

// create new task
export const createTask = (taskData) => {
  const newTask = new Task(taskData);
  tasks.push(newTask);
  return newTask;
};

// delete task by id
export const deleteTaskById = (id) => {
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

// update task by id
export const updateTaskById = (id, updateData) => {
  const taskUP = tasks.find((t) => t.id === id);

  if (!taskUP) {
    return null;
  }

  if (updateData.title) taskUP.title = updateData.title;
  if (updateData.description) taskUP.description = updateData.description;
  if (updateData.dueDate) taskUP.dueDate = updateData.dueDate;
  if (updateData.status) taskUP.status = updateData.status;

  return taskUP;
};
