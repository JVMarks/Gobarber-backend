import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const PasswordRouter = Router();

const forgotPasswordController = new ForgotPasswordController();
const resetPassworController = new ResetPasswordController();

PasswordRouter.post('/forgot', forgotPasswordController.create);
PasswordRouter.post('/reset', resetPassworController.create);

export default PasswordRouter;
