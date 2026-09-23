require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function createProject(data) {
  const { technologies, ...projectData } = data;

  return prisma.project.create({
    data: {
      ...projectData,
      technologies: {
        create: technologies.map((technologyId) => ({
          technology: {
            connect: { id: Number(technologyId) },
          },
        })),
      },
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
      profile: true,
    },
  });
}

async function listProjects() {
  return prisma.project.findMany({
    include: {
      profile: true,
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
}

module.exports = {
  createProject,
  listProjects,
};
