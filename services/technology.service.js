const technologyRepository = require('../repositories/technology.repository');
const { createTechnologyDto } = require('../src/dtos/technology.dto');

async function createTechnology(data) {
  const payload = createTechnologyDto.parse(data);
  return technologyRepository.createTechnology(payload);
}

async function listTechnologies() {
  return technologyRepository.listTechnologies();
}

module.exports = {
  createTechnology,
  listTechnologies,
};
