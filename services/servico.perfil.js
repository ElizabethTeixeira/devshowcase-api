const { criarPerfilSchema } = require('../dtos/perfil.dto');
const repositorioPerfil = require('../repositories/repositorio.perfil');

async function cadastrar(req, res) {
  const parsed = criarPerfilSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ errors: parsed.error.flatten().fieldErrors });
  }
  try {
    const perfil = await repositorioPerfil.criar(parsed.data);
    return res.status(201).json(perfil);
  } catch (error) {
    return res.status(400).json({ message: 'Não foi possível criar o perfil. O e-mail já pode estar em uso.' });
  }
}

async function mostrar(req, res) {
  const { id } = req.params;
  const perfil = await repositorioPerfil.buscarPorId(Number(id));
  if (!perfil) {
    return res.status(404).json({ message: 'Perfil não encontrado' });
  }
  return res.json(perfil);
}

module.exports = { cadastrar, mostrar };
