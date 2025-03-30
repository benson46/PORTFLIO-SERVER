import express from 'express';
import { add_skills, delete_skill, get_skills, update_skill } from './skill.contoller.js';

const skill_router = express.Router();

skill_router.get('/get-skills',get_skills)
skill_router.post('/add-skills',add_skills)
skill_router.patch('/edit-skills/:id',update_skill)
skill_router.delete('/delete-skills/:id',delete_skill)

export default skill_router;