import express from 'express';
import auth_router from './features/auth/auth.routes.js';
import skill_router from './features/skills/skill.routes.js';

const routes = express.Router();


routes.use('/auth', auth_router);
routes.use('/skills',skill_router);

export default routes;