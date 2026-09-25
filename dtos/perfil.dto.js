const { z } = require('zod');

const criarPerfilSchema = z.object({
name: z.string('O nome é obrigatório').min(1, 'O nome é obrigatório'),
email: z.string('O e-mail é obrigatório').email('E-mail inválido'),
bio: z.string().optional(),
avatarUrl: z.string().url('URL do avatar inválida').optional(),
});

module.exports = { criarPerfilSchema };
