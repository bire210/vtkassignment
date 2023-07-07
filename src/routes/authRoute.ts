import express from 'express';
const authRouter=express.Router()
import { login, register } from '../controllers/authControler';
authRouter.post('/register', register);
authRouter.post('/login', login);

module.exports=authRouter