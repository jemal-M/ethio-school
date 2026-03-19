import { Router } from "express";
import {login,register,getMe} from "../controllers/AuthController.js"
const authRouter=Router();
authRouter.post('/login',login);
authRouter.post('/register', register);
authRouter.get('/me',getMe);
export default authRouter;
