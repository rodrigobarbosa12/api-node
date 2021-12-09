import { Router } from 'express';
import { validateSignin, validateSignup } from './Controllers/plugin';
import login from './Controllers/login';

const routes = Router();

/**
 * Autenticação
 */
routes.post('/signup', validateSignup, login.signup);
routes.post('/signin', validateSignin, login.signin);

export default routes;
