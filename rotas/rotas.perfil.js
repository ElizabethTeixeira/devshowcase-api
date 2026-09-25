const { Router } = require('express');

const servicoPerfil = require('../services/servico.perfil');
const router = Router();

router.post('/profiles', servicoPerfil.cadastrar);
router.get('/profiles/:id', servicoPerfil.mostrar);
module.exports = router;
