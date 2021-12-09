import { Request, Response } from 'express';
import service from '../Services/login';


const signup = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, senha } = req.body;

    await service.signup(email, senha);
    return res.send({ message: 'Usuário cadastrado!' });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

const signin = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, senha } = req.body;

    const [usuario, token] = await service.signin(email, senha);

    return res.send({ usuario, token });
  } catch (error) {
    return res.status(error.code ? error.code : 400).json(error);
  }
};

export default {
  signin,
  signup
};
