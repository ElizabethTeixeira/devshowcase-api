const { z } = require('zod');

const createTechnologyDto = z.object({
  name: z.string().trim().min(1, 'Nome da tecnologia é obrigatório'),
  category: z.string().trim().min(1, 'Categoria é obrigatória').optional().or(z.literal('')).transform((value) => (value === '' ? undefined : value)),
});

module.exports = {
  createTechnologyDto,
};
