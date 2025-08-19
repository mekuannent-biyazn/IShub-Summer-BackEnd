import { Router } from "express";
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from "../controllers/taskController.js";

const router = Router();

//  get all tasks
router.get("/tasks", getAllTasks);

// get spesfic task by id
router.get("/tasks/:id", getTaskById);

// update task
router.put("/tasks/:id", updateTaskById);

// delete task by id
router.delete("/tasks/:id", deleteTaskById);

//  create new task
router.post("/tasks", createTask);
export default router;
