import { Router } from "express";
import {
  createTask,
  deleteTaskById,
  getAllTasks,
  getTaskById,
  updateTaskById,
} from "../controllers/taskController.js";

const router = Router();

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
export default router;
