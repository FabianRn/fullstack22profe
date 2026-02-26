import express from "express";
const app = express();
const port = 3500;

//midleware
app.use(express.json());

const task = [
  { id: 1, name: "tarea 1", description: "descripcion tarea 1" },
  { id: 2, name: "tarea 2", description: "descripcion tarea 2" },
  { id: 3, name: "tarea 3", description: "descripcion tarea 3" },
  { id: 4, name: "tarea 4", description: "descripcion tarea 4" },
  { id: 5, name: "tarea 5", description: "descripcion tarea 5" },
];

app.get("/", (req, res) => {
  res.send("inicio app");
});

app.get("/task", (req, res) => {
  console.log(req);
  res.json(task);
});

app.post("/task", (req, res) => {
  let body = req.body;
  task.push(body);
  res.json({
    message: "tarea creada con éxito",
    tarea: body,
  });
});

app.put("/task/:id", (req, res) => {
  let idTask = req.params.id;
  let body = req.body;
  res.json({
    message: `tarea ${idTask} actualizada`,
    datos: body,
  });
});

app.delete("/task/:id", (req, res) => {
  let idTask = req.params.id;
  console.log(req.params.id);
  res.send(`solicitud de eliminacion id task ${idTask}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
