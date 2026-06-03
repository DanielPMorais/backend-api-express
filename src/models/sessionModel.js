import { prisma } from "../helpers/dbConnection.js";

export const createSession = async (userId, token) => {
  return await prisma.session.create({
    data: {
      userId,
      token,
    },
  });
};

export const getSessionByToken = async (token, userId) => {
  return await prisma.session.findFirst({
    where: {
      token,
      userId,
    },
  });
};

export const deleteSession = async (token, userId) => {
  return await prisma.session.deleteMany({
    where: {
      token,
      userId,
    },
  });
};

export const deleteAllSessionsByUserId = async (userId) => {
  return await prisma.session.deleteMany({
    where: {
      userId,
    },
  });
};
