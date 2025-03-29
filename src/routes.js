import express from 'express';
import auth_router from './features/auth/auth.routes.js';

const routes = express.Router();


routes.use('/api/auth', auth_router);

export default routes;