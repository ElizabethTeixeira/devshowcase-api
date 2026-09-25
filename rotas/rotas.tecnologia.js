const { Router } = require('express');
const servicoTecnologia = require('../services/servico.tecnologia');
const router = Router();
router.post('/tech', servicoTecnologia.cadastrar);
router.get('/tech', servicoTecnologia.listar);
module.exports = router;
