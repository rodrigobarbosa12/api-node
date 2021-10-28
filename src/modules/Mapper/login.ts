import { getRepository, getManager } from 'typeorm';
import Usuarios from '../../database/entity/Usuarios';
import { hashSenha, compareHash, ExceptionError } from '../../utils';

const signup = async (email: string, senha: string): Promise<Usuarios> => getManager()
  .transaction(async (transaction) => {
    const userRepository = getRepository(Usuarios);

    const usuario = await userRepository.findOne({ where: { email } });

    if (usuario) {
      throw ExceptionError('Usuário já cadastrado', 401);
    }

    const senhaHash = hashSenha(senha);

    if (!senhaHash) {
      throw ExceptionError('Erro ao criar hash de senha', 500);
    }

    const newUsuario = userRepository.create({ email, senha: senhaHash });

    await transaction.save(newUsuario);

    return newUsuario;
  });

const signin = async (email: string, senha: string): Promise<Usuarios> => {
  const userRepository = getRepository(Usuarios);
  const usuario = await userRepository
    .findOne({ where: { email } });

  if (!usuario) {
    throw ExceptionError('Email ou senha inválidos', 401);
  }

  if (!compareHash(senha, usuario.senha)) {
    throw ExceptionError('Email ou senha inválidos', 401);
  }

  return usuario;
};

export default {
  signin,
  signup,
};
