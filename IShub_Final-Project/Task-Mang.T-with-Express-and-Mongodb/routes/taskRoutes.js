const express = require("express");
const router = express.Router();
const {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} = require("../controllers/taskControler");

// const router = Router();

//  get all tasks route
router.get("/tasks", getAllTasks);

// get spesfic task by id route
router.get("/tasks/:id", getTaskById);

// update task by id route
router.put("/tasks/:id", updateTaskById);

// delete task by id route
router.delete("/tasks/:id", deleteTaskById);

//  create new task route
router.post("/tasks", createTask);

module.exports = router;
