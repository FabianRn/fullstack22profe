import { Router } from "express";
import taskController from "../controllers/taskController.js";
import validateToken from "../midlewares/verifyToken.js";
const router = new Router();
router.use(validateToken);
router
  .get("/", taskController.listTask)
  .get("/:id", taskController.listTaskById)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
