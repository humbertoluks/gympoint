import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/session', SessionController.store);
routes.use(authMiddleware);

module.exports = routes;
