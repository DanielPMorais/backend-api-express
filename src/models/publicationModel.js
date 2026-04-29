import { prisma } from '../helpers/dbConnection.js';
import * as z from 'zod';

const publicationSchema = z.object({
    id: z.number().positive(),
    title: z.string().max(20),
    description: z.string().max(150).optional(),
    created_at:  z.date().optional(),
    author: z.string().max(25).optional()
});

export const validatePublication = (publication, partial = false) => {
    if (partial) {
        return publicationSchema.partial(partial).safeParse(publication)
    }
    return publicationSchema.safeParse(publication)
}

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