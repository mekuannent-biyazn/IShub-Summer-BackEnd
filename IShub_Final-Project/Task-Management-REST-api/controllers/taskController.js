import {
  getAllTasks as getAllTasksService,
  getTaskById as getTaskByIdService,
  updateTaskById as updateTaskByIdService,
  createTask as createTaskService,
  deleteTaskById as deleteTaskByIdService,
} from "../data/taskService.js";
// const tasks = [];

export const getAllTasks = (req, res) => {
  try {
    const tasks = getAllTasksService();
    res.status(200).json(tasks);
  } catch (err) {
    console.error(`Errot occured! `, err);
  }
};

// get tast by id
export const getTaskById = (req, res) => {
  try {
    const { id } = req.params;
    const task = getTaskByIdService(id);
    if (!task) {
      return res.status(404).json({ erroe: `task with ${id} is not found` });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error(`Error featching task:`, err);
    res
      .status(500)
      .json({ message: "internal server error! Something wants wrong" });
  }
};

// create new task
export const createTask = (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and Description are required!" });
    }

    let presentDate = null;
    if (dueDate) {
      presentDate = new Date(dueDate);
      if (isNaN(presentDate)) {
        return res
          .status(400)
          .json({ error: "Invalid date format! Use 'YYYY-MM-DD'" });
      }
    }

    const newTask = createTaskService({
      // id:uuidv4(),
      title,
      description,
      createdAt: new Date(),
      dueDate: presentDate,
      status: status || "pending",
    });

    // tasks.push(newTask);

    res
      .status(201)
      .json({ message: "Task created successfully 🚀", task: newTask });
  } catch (err) {
    console.error("Error creating task:", err);
    res
      .status(500)
      .json({ error: "Internal server error! Something went wrong." });
  }
};

// delete by id controller
export const deleteTaskById = (req, res) => {
  try {
    const { id } = req.params;

    const taskIndex = deleteTaskByIdService(id);

    if (!taskIndex) {
      res.status(404).json({ Error: `task with id: ${id} is not found` });
    }

    res
      .status(200)
      .json({ message: `Task with id: ${id} is deleted succesfully!` });
  } catch (err) {
    console.error(`Error deleting task `, err);
    res
      .status(500)
      .json({ message: "internal server error! Some thing wanta wrong." });
  }
};

// update task by id controller
export const updateTaskById = (req, res) => {
  try {
    const { id } = req.params;

    const task = updateTaskByIdService(id, req.body);

    if (!task) {
      res.status(404).json({ Error: `Task with id: ${id} is Not Found` });
    }

    res.status(200).json(`Task with id: ${id} is updated success fully!`, task);
  } catch (err) {
    console.error(`Error task Update.`, err);
    res
      .status(500)
      .json({ message: "internal server error! Some thing was wrong!" });
  }
};
