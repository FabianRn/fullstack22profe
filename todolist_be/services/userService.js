import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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
    data.password = "";
    return data;
  } catch (error) {
    return 0;
  }
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

const createUser = async (body) => {
  body.password = await hashPassword(body.password);
  let data = await prisma.user.create({
    data: body,
  });
  data.password = "";
  return data;
};

const login = async (body) => {
  const data = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (data) {
    const validateUser = await comparePassword(body.password, data.password);
    data.password = "";
    let token = jwt.sign(data, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    if (validateUser) {
      return { data: token };
    }
    return null;
  }
  return data;
};

const hashPassword = async (passwordBody) => {
  let hash = await bcrypt.hash(passwordBody, 10);
  console.log(passwordBody, hash);
  return hash;
};

const comparePassword = async (passwordBody, passwordBD) => {
  return await bcrypt.compare(passwordBody, passwordBD);
};

export default {
  listUser,
  listUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
};
