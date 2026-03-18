import { prisma } from '../helpers/dbConnection.js';

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    });
}

export const getUsers = async () => {
    return await prisma.user.findMany();
}

export const updateUser = async (id, user) => {
    const userId = Number(id);

    if (!Number.isInteger(userId) || userId <= 0) {
        throw new Error('ID de usuário inválido.');
    }

    const data = {};

    if (user.name !== undefined) data.name = user.name;
    if (user.email !== undefined) data.email = user.email;
    if (user.pass !== undefined) data.pass = user.pass;
    if (user.avatar !== undefined) data.avatar = user.avatar;

    if (Object.keys(data).length === 0) {
        throw new Error('Nenhum campo válido foi enviado para atualização.');
    }

    return await prisma.user.update({
        where: { id: userId },
        data
    });
}