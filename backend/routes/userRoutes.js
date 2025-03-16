import { Router } from "express";
import { login, myStories, register } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";



const userRouter = Router();

userRouter.post('/signUp',register)
userRouter.post('/login',login);
userRouter.post('/mystory',authMiddleware,myStories)

export default userRouter