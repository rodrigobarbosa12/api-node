import { Router } from 'express';
import login from './Controllers/loginController';

const routes = Router();

/**
 * Autenticação
 */
routes.post('/signup', login.validateSignup, login.signup);
routes.post('/signin', login.validateSignin, login.signin);

export default routes;
