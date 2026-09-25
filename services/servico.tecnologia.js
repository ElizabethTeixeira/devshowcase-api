const { criarTecnologiaSchema } = require('../dtos/tecnologia.dto');
const repositorioTecnologia = require('../repositories/repositorio.tecnologia');

async function cadastrar(req, res) {
  const parsed = criarTecnologiaSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }
  try {
    const tecnologia = await repositorioTecnologia.criar(parsed.data);
    return res.status(201).json(tecnologia);
  } catch (error) {
    return res.status(400).json({ message: 'Não foi possível criar a tecnologia. O nome já pode existir.' });
  }
}

async function listar(req, res) {
  const tecnologias = await repositorioTecnologia.listarTodas();
  return res.json(tecnologias);
}

module.exports = { cadastrar, listar };
