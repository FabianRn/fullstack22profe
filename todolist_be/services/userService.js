import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const listUser = async () => {
  let data = await prisma.user.findMany();
  console.log(data);
  return data;
};

const listUserById = async (id) => {
  try {
    let data = await prisma.user.findUnique({
      where: { id: id },
    });
    return data;
  } catch (error) {
    return 0;
  }
};

const createUser = async (body) => {
  let data = await prisma.user.create({
    data: body,
  });
  return data;
};

const updateUser = async (id, body) => {
  let data = await prisma.user.update({
    where: { id: id },
    data: body,
  });
  return data;
};

const deleteUser = (id) => {
  let data = prisma.user.delete({
    where: { id: id },
  });
  return data;
};

export default {
  listUser,
  listUserById,
  createUser,
  updateUser,
  deleteUser,
};
