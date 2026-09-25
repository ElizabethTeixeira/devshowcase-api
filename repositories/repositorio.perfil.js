const prisma = require('../config/prisma')

async function criar(data) {
return prisma.profile.create({ data });
}

async function buscarPorId(id) {
return prisma.profile.findUnique({
where: { id },
include: { projects: true },
});
}
module.exports = { criar, buscarPorId };
