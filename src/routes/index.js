const { Router } = require('express');
const router = Router();

const profileRoutes = require('./profile.routes');
const technologyRoutes = require('./technology.routes');
const projectRoutes = require('./project.routes');

router.use('/api/profiles', profileRoutes);
router.use('/api/technologies', technologyRoutes);
router.use('/api/projects', projectRoutes);

module.exports = router;
