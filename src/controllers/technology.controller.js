const technologyService = require('../../services/technology.service');

async function createTechnology(req, res) {
  try {
    const technology = await technologyService.createTechnology(req.body);
    return res.status(201).json(technology);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

async function listTechnologies(req, res) {
  try {
    const technologies = await technologyService.listTechnologies();
    return res.status(200).json(technologies);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

module.exports = {
  createTechnology,
  listTechnologies,
};
