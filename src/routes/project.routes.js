const { Router } = require('express');
const router = Router();
const projectController = require('../controllers/project.controller');

router.post('/', projectController.createProject);
router.get('/', projectController.listProjects);

module.exports = router;
