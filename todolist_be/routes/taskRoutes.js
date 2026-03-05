import { Router } from "express";
import taskController from "../controllers/taskController.js";

const router = new Router();

router
  .get("/", taskController.listTask)
  .get("/:id", taskController.listTaskById)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
