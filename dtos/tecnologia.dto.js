const { z } = require('zod');

const criarTecnologiaSchema = z.object({
name: z.string().min(1, 'O nome da tecnologia é obrigatório'),
});
module.exports = { criarTecnologiaSchema };
