const { z } = require('zod');

const optionalUrl = z
  .union([z.string().trim().url('URL inválida'), z.literal('')])
  .optional()
  .transform((value) => (value === '' ? undefined : value));

const createProfileDto = z.object({
  name: z.string().trim().min(1, 'Nome é obrigatório'),
  email: z.string().trim().email('Email inválido'),
  bio: z.string().trim().max(500, 'Bio muito longa').optional().or(z.literal('')).transform((value) => (value === '' ? undefined : value)),
  githubUrl: optionalUrl,
  linkedinUrl: optionalUrl,
  avatarUrl: optionalUrl,
});

module.exports = {
  createProfileDto,
};
