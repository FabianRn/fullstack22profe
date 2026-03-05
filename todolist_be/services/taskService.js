import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listTask = async () => {
  let data = await prisma.task.findMany();
  return data;
};

const listTaskById = async (id) => {
  try {
    let data = await prisma.task.findUnique({
      where: { id: id },
    });
    return data;
  } catch (error) {
    return 0;
  }
};

const createTask = async (body) => {
  let data = await prisma.task.create({
    data: body,
  });
  return data;
};

const updateTask = async (id, body) => {
  let data = await prisma.task.update({
    where: { id: id },
    data: body,
  });
  return data;
};

const deleteTask = (id) => {
  let data = prisma.task.delete({
    where: { id: id },
  });
  return data;
};

export default {
  listTask,
  listTaskById,
  createTask,
  updateTask,
  deleteTask,
};
