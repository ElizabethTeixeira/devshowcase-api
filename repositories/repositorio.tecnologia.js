const prisma = require('../config/prisma');

async function criar(data) {
return prisma.technology.create({ data });
}

async function listarTodas() {
return prisma.technology.findMany();
}
module.exports = { criar, listarTodas };
