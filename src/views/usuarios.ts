import Usuarios from '../database/entity/Usuarios';
import { UsusrioView } from '../@types/exports';

const render = (usuario: Usuarios): UsusrioView => ({
  id: usuario.id,
  email: usuario.email,
});

export default {
  render,
};
