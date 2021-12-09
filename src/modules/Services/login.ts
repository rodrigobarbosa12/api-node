import mapper from '../Mapper/login';
import Usuarios from '../../database/entity/Usuarios';
import views from '../../views/usuarios';
import { createTokenJwt } from '../../utils';
import { UsusrioView } from '../../@types/exports';

const signup = async (
  email: string,
  senha: string
): Promise<Usuarios> => await mapper.signup(email, senha);

const signin = async (
  email: string,
  senha: string
): Promise<[UsusrioView, string]> => {
  const usuario = await mapper.signin(email, senha);

  const usuarioView = views.render(usuario);

  const token = createTokenJwt(usuarioView);

  return [usuarioView, token]
};

export default {
  signin,
  signup,
};
