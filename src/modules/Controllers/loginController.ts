import { celebrate, Segments, Joi } from 'celebrate';
import Service from '../Services/login';

const validateSignup = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
    senha: Joi.string().required().min(8).messages({
      'string.min': 'A senha deve conter no mínimo 8 caracteres',
    }),
  }),
});

const validateSignin = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required().messages({
      'any.required': 'Email ou número de série é obrigatório',
    }),
    senha: Joi.string().required().messages({
      'any.required': 'Senha é obrigatória',
    }),
  }),
});

export default {
  ...Service,
  validateSignin,
  validateSignup,
};
