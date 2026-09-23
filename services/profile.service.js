const profileRepository = require('../repositories/profile.repository');
const { createProfileDto } = require('../src/dtos/profile.dto');

async function createProfile(data) {
  const payload = createProfileDto.parse(data);
  return profileRepository.createProfile(payload);
}

async function listProfiles() {
  return profileRepository.listProfiles();
}

async function findProfileById(id) {
  const profile = await profileRepository.findProfileById(id);

  if (!profile) {
    const error = new Error('Profile não encontrado');
    error.statusCode = 404;
    throw error;
  }

  return profile;
}

module.exports = {
  createProfile,
  listProfiles,
  findProfileById,
};
