import bcrypt from 'bcrypt';

const saltRounds = bcrypt.genSaltSync(10);

export const hashSenha = (senha: string): string => bcrypt
  .hashSync(senha, saltRounds);

export const compareHash = (senha: string, encrypted: string): boolean => bcrypt
  .compareSync(senha, encrypted);

export default saltRounds;
