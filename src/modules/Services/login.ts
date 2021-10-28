import { Request, Response } from 'express';
import mapper from '../Mapper/login';
import views from '../../views/usuarios';
import { createTokenJwt } from '../../utils';

const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, senha } = req.body;

    await mapper.signup(email, senha);
    return res.send({ message: 'Usuário cadastrado!' });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

const signin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, senha } = req.body;
    const usuario = views.render(await mapper.signin(email, senha));

    const token = createTokenJwt(usuario);

    return res.send({ usuario, token });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

export default {
  signin,
  signup,
};
