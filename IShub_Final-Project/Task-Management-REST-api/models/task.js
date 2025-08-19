import { v4 as uuidv4 } from "uuid";

class Task {
  constructor({ title, description, dueDate, status }) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.createdAt = new Date();
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.status = status || "pending";
  }
}

export default Task;
