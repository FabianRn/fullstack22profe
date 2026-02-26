import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

const tasks = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Node" },
  { id: 3, text: "Learn MongoDB" },
];

app.get("/task", (req, res) => {
  console.log("peticion");
  res.json(tasks);
});

app.get("/user", (req, res) => {
  console.log("peticion");
  res.json(tasks);
});
app.post("/user", (req, res) => {
  console.log("peticion");
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
