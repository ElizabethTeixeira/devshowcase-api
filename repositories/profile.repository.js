require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function createProfile(data) {
  return prisma.profile.create({
    data,
  });
}

async function listProfiles() {
  return prisma.profile.findMany({
    include: {
      projects: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}

async function findProfileById(id) {
  return prisma.profile.findUnique({
    where: { id: Number(id) },
    include: {
      projects: true,
    },
  });
}

module.exports = {
  createProfile,
  listProfiles,
  findProfileById,
};
