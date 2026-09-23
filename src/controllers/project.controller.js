const projectService = require('../../services/project.service');

async function createProject(req, res) {
  try {
    const project = await projectService.createProject(req.body);
    return res.status(201).json(project);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

async function listProjects(req, res) {
  try {
    const projects = await projectService.listProjects();
    return res.status(200).json(projects);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

module.exports = {
  createProject,
  listProjects,
};
