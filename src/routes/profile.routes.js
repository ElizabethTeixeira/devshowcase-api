const { Router } = require('express');
const router = Router();
const profileController = require('../controllers/profile.controller');

router.post('/', profileController.createProfile);
router.get('/', profileController.listProfiles);
router.get('/:id', profileController.getProfileById);

module.exports = router;
