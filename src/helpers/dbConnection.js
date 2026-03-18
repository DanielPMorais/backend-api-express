import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client.ts";

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST ?? process.env.DB_HOST,
    port: Number(process.env.DATABASE_PORT ?? process.env.DB_PORT ?? 3306),
    user: process.env.DATABASE_USER ?? process.env.DB_USER,
    password: process.env.DATABASE_PASSWORD ?? process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME ?? process.env.DB_NAME,
    connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });
