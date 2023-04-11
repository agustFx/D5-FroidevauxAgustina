import { Router } from 'express';
import { loginController, logoutController, registroController } from '../controllers/authController.js';
import passport from 'passport';

export const authRouter = Router();

authRouter.post('/register', passport.authenticate('register'), registroController);
authRouter.post('/login', passport.authenticate('login'), loginController);
authRouter.post('/logout', logoutController);