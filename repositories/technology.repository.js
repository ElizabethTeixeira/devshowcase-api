require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function createTechnology(data) {
  return prisma.technology.create({
    data,
  });
}

async function listTechnologies() {
  return prisma.technology.findMany({
    orderBy: { name: 'asc' },
  });
}

module.exports = {
  createTechnology,
  listTechnologies,
};
