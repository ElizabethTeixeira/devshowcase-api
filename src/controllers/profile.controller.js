const profileService = require('../../services/profile.service');

async function createProfile(req, res) {
  try {
    const profile = await profileService.createProfile(req.body);
    return res.status(201).json(profile);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

async function listProfiles(req, res) {
  try {
    const profiles = await profileService.listProfiles();
    return res.status(200).json(profiles);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

async function getProfileById(req, res) {
  try {
    const { id } = req.params;
    const profile = await profileService.findProfileById(id);
    return res.status(200).json(profile);
  } catch (error) {
    const status = error.statusCode || 400;
    return res.status(status).json({ erro: error.message });
  }
}

module.exports = {
  createProfile,
  listProfiles,
  getProfileById,
};
