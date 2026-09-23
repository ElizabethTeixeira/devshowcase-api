const { z } = require('zod');

const optionalUrl = z
  .union([z.string().trim().url('URL inválida'), z.literal('')])
  .optional()
  .transform((value) => (value === '' ? undefined : value));

const createProjectDto = z.object({
  title: z.string().trim().min(1, 'Título é obrigatório'),
  description: z.string().trim().min(1, 'Descrição é obrigatória'),
  repositoryUrl: z.string().trim().url('URL do repositório inválida'),
  demoUrl: optionalUrl,
  imageUrl: optionalUrl,
  profileId: z.coerce.number().int().positive('profileId inválido'),
  technologies: z.array(z.coerce.number().int().positive()).optional().default([]),
});

module.exports = {
  createProjectDto,
};
