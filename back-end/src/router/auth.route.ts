import express from 'express'
import { login, register } from '../controller/auth.controller';
import { validate } from '../middleware/validate';
import { loginSchema, registerSchema } from '../zod_schema/auth.schema';
const router= express.Router();

router.post('/login',validate(loginSchema),login);
router.post('/register', validate(registerSchema),register);

export default router;
