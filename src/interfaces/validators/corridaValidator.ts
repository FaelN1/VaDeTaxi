import Joi from 'joi';

export const createCorridaSchema = Joi.object({
  usuarioId: Joi.number().integer().positive().required()
    .messages({
      'number.base': `"usuarioId" deve ser um número`,
      'number.integer': `"usuarioId" deve ser um número inteiro`,
      'number.positive': `"usuarioId" deve ser um número positivo`,
      'any.required': `"usuarioId" é obrigatório`
    }),
  origem: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': `"origem" deve ser uma string`,
      'string.empty': `"origem" não pode estar vazia`,
      'string.min': `"origem" deve ter pelo menos 3 caracteres`,
      'string.max': `"origem" deve ter no máximo 100 caracteres`,
      'any.required': `"origem" é obrigatório`
    }),
  destino: Joi.string().min(3).max(100).required()
    .messages({
      'string.base': `"destino" deve ser uma string`,
      'string.empty': `"destino" não pode estar vazia`,
      'string.min': `"destino" deve ter pelo menos 3 caracteres`,
      'string.max': `"destino" deve ter no máximo 100 caracteres`,
      'any.required': `"destino" é obrigatório`
    })
});

export const cancelCorridaSchema = Joi.object({
  id: Joi.number().integer().positive().required()
    .messages({
      'number.base': `"id" deve ser um número`,
      'number.integer': `"id" deve ser um número inteiro`,
      'number.positive': `"id" deve ser um número positivo`,
      'any.required': `"id" é obrigatório`
    })
});
