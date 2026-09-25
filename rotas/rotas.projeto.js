const { Router } = require('express');
const servicoProjeto = require('../services/servico.projeto');
const router = Router();

router.get('/projects', servicoProjeto.listar);
router.post('/projects', servicoProjeto.cadastrar);

//Parte 2
router.get('/projects/:id', servicoProjeto.mostrar);
router.post('/projects/:id/feedbacks', servicoProjeto.cadastrarAvaliacao);
router.put('/projects/:id/upvote', servicoProjeto.curtir);

module.exports = router;
