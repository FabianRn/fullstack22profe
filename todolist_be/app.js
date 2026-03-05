import express, { json } from "express";
import dotenv from "dotenv";
import taskRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//midleware serializacion json
app.use(json());
//midleware rutas
app.use("/task", taskRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
