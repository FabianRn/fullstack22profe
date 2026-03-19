import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router
  .get("/", userController.listUser)
  .get("/:id", userController.listUserById)
  .post("/", userController.createUser)
  .post("/login", userController.login)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

export default router;
