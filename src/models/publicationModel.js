import { prisma } from '../helpers/dbConnection.js';
import * as z from 'zod';
import { createValidator } from '../helpers/createValidator.js';

const publicationSchema = z.object({
    id: z.number().positive(),
    title: z.string().max(255),
    description: z.string().max(10000).optional(),
    created_at:  z.date().optional(),
    author: z.string().max(255).optional()
});

export const validatePublication = createValidator(publicationSchema)

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    });
}

export const getPublication = async () => {
    return await prisma.publication.findMany();
}

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {
            id
        }
    });
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }
    });
}