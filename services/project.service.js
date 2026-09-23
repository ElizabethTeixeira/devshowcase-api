const projectRepository = require('../repositories/project.repository');
const { createProjectDto } = require('../src/dtos/project.dto');

async function createProject(data) {
  const payload = createProjectDto.parse(data);
  return projectRepository.createProject(payload);
}

async function listProjects() {
  return projectRepository.listProjects();
}

module.exports = {
  createProject,
  listProjects,
};
