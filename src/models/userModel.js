import { prisma } from "../helpers/dbConnection.js";
import * as z from "zod";
import { createValidator } from "../helpers/createValidator.js";

const userSchema = z.object({
  id: z.number().positive(),
  avatar: z.url().max(500),
  name: z.string().min(3).max(255),
  email: z.email(),
  pass: z.string().min(6).max(255),
});

export const validateUser = createValidator(userSchema);

export const createUser = async (user) => {
  return await prisma.user.create({
    data: user,
  });
};

export const getUsers = async (name) => {
  return await prisma.user.findMany({
    where: name
      ? {
          name: {
            contains: name,
          },
        }
      : {},
    select: {
      id: true,
      avatar: true,
      name: true,
      email: true,
    },
  });
};

export const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
};

export const updateUser = async (user, id) => {
  return await prisma.user.update({
    data: user,
    where: {
      id,
    },
    select: {
      id: true,
      avatar: true,
      name: true,
      email: true,
    },
  });
};
