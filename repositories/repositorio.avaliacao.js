const prisma = require('../config/prisma');

async function criar({ projectId, rating, comment }) {
  return prisma.feedback.create({
    data: { projectId, rating, comment },
  });
}

async function agregarPorProjeto(projectId) {
  return prisma.feedback.aggregate({
    where: { projectId },
    _avg: { rating: true },
    _count: { rating: true },
  });
}

module.exports = { criar, agregarPorProjeto };
