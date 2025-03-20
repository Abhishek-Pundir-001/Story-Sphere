import {Router} from 'express';
import { adminLogin, deleteUser, deleteUserStory, list }  from '../controllers/adminContoller.js';

const adminRouter = Router();

adminRouter.get('/list',list)
adminRouter.post('/delete',deleteUserStory)
adminRouter.post('/deleteUser',deleteUser)
adminRouter.post('/login',adminLogin)

export default adminRouter