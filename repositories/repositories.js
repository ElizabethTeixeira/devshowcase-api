require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function buscarTodos() {
  return prisma.usuario.findMany();
}

async function criar (dados) {
  return prisma.usuario.create({ data: dados });
}

module.exports = { buscarTodos, criar };