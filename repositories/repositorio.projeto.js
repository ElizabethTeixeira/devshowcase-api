const prisma = require('../config/prisma');

async function criar({ technologyIds, ...data }) {
  return prisma.project.create({
    data: {
      ...data,
      technologies: technologyIds
        ? { connect: technologyIds.map((id) => ({ id })) }
        : undefined,
    },
    include: { technologies: true, profile: true },
  });
}

async function buscarPorId(id) {
  return prisma.project.findUnique({
    where: { id },
    include: { technologies: true, profile: true },
  });
}

// Filtra por tecnologia (nome, case-insensitive).
async function listarTodos({ technology }) {
  const where = technology
    ? { technologies: { some: { name: { equals: technology, mode: 'insensitive' } } } }
    : undefined;

  return prisma.project.findMany({
    where,
    include: { technologies: true, profile: true },
    orderBy: { createdAt: 'desc' },
  });
}

async function incrementarCurtida(id) {
  return prisma.project.update({
    where: { id },
    data: { upvotes: { increment: 1 } },
  });
}

async function atualizarEstatisticasAvaliacao(id, { averageRating, ratingCount }) {
  return prisma.project.update({
    where: { id },
    data: { averageRating, ratingCount },
  });
}

module.exports = { criar, buscarPorId, listarTodos, incrementarCurtida, atualizarEstatisticasAvaliacao };
