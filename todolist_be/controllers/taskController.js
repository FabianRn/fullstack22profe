import taskService from "../services/taskService.js";

const listTask = async (req, res) => {
  let data = await taskService.listTask();

  res.json({
    message: "success",
    data: data,
  });
};

const listTaskById = async (req, res) => {
  let id = req.params.id;
  let data = await taskService.listTaskById(id);

  if (data == 0) {
    res.status(403).json({
      message: "error",
      data: data,
    });
  }

  res.json({
    message: "success",
    data: data,
  });
};

const createTask = async (req, res) => {
  let body = req.body;
  let data = await taskService.createTask(body);
  res.json(data);
};

const updateTask = async (req, res) => {
  let id = req.params.id;
  let body = req.body;
  let data = await taskService.updateTask(id, body);
  res.json(data);
};

const deleteTask = async (req, res) => {
  let id = req.params.id;
  let data = await taskService.deleteTask(id);
  res.json(data);
};

export default {
  listTask,
  listTaskById,
  createTask,
  updateTask,
  deleteTask,
};
