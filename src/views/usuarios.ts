import Usuarios from '../database/entity/Usuarios';

interface UsusrioView {
  id: number;
  email: string,
}

const render = (usuario: Usuarios): UsusrioView => ({
  id: usuario.id,
  email: usuario.email,
});

export default {
  render,
};
