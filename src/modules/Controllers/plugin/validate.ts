import { celebrate, Segments, Joi } from 'celebrate';

export const validateSignup = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required().min(6).messages({
      'string.min': 'A senha deve conter no mínimo 6 caracteres',
    }),
  }),
});

export const validateSignin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().messages({
      'any.required': 'Email ou número de série é obrigatório',
    }),
    senha: Joi.string().required().messages({
      'any.required': 'Senha é obrigatória',
    }),
  }),
});
