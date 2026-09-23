const { Router } = require('express');
const router = Router();
const technologyController = require('../controllers/technology.controller');

router.post('/', technologyController.createTechnology);
router.get('/', technologyController.listTechnologies);

module.exports = router;
