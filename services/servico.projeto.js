const { criarProjetoSchema, listarProjetosQuerySchema } = require('../dtos/projeto.dto');
const { criarAvaliacaoSchema } = require('../dtos/avaliacao.dto');
const repositorioProjeto = require('../repositories/repositorio.projeto');
const repositorioAvaliacao = require('../repositories/repositorio.avaliacao');
const repositorioPerfil = require('../repositories/repositorio.perfil');

async function cadastrar(req, res) {
  const parsed = criarProjetoSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }

  const perfil = await repositorioPerfil.buscarPorId(parsed.data.profileId);
  if (!perfil) {
    return res.status(404).json({ message: 'Perfil (profileId) não encontrado' });
  }

  try {
    const projeto = await repositorioProjeto.criar(parsed.data);
    return res.status(201).json(projeto);
  } catch (error) {
    return res.status(400).json({ message: 'Não foi possível criar o projeto. Verifique o profileId e os technologyIds.' });
  }
}

// GET /api/projects?technology=
async function listar(req, res) {
  const parsed = listarProjetosQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }

  const projetos = await repositorioProjeto.listarTodos(parsed.data);
  return res.json(projetos);
}

async function mostrar(req, res) {
  const projeto = await repositorioProjeto.buscarPorId(req.params.id);
  if (!projeto) {
    return res.status(404).json({ message: 'Projeto não encontrado' });
  }
  return res.json(projeto);
}

// POST /api/projects/:id/feedbacks
// Regra de negócio: cadastra a nota (1-5) + comentário e recalcula a média do projeto.
async function cadastrarAvaliacao(req, res) {
  const parsed = criarAvaliacaoSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }

  const projeto = await repositorioProjeto.buscarPorId(req.params.id);
  if (!projeto) {
    return res.status(404).json({ message: 'Projeto não encontrado' });
  }

  const avaliacao = await repositorioAvaliacao.criar({
    projectId: projeto.id,
    rating: parsed.data.rating,
    comment: parsed.data.comment,
  });

  const agregado = await repositorioAvaliacao.agregarPorProjeto(projeto.id);
  const ratingCount = agregado._count.rating;
  const averageRating = ratingCount > 0 ? Math.round(agregado._avg.rating * 100) / 100 : 0;
  const projetoAtualizado = await repositorioProjeto.atualizarEstatisticasAvaliacao(projeto.id, { averageRating, ratingCount });

  return res.status(201).json({ feedback: avaliacao, project: projetoAtualizado });
}

// PUT /api/projects/:id/upvote
// Regra de negócio: incrementa a curtida/estrela do projeto.
async function curtir(req, res) {
  const projeto = await repositorioProjeto.buscarPorId(req.params.id);
  if (!projeto) {
    return res.status(404).json({ message: 'Projeto não encontrado' });
  }

  const projetoAtualizado = await repositorioProjeto.incrementarCurtida(projeto.id);
  return res.json(projetoAtualizado);
}

module.exports = { cadastrar, listar, mostrar, cadastrarAvaliacao, curtir };
