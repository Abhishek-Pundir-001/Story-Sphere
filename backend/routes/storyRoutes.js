import { Router } from 'express'

const storyRouter = Router()
import multer from 'multer'

import { createStory, deleteStory, getAllStories, updatStory } from '../controllers/storyController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

storyRouter.get('/get',getAllStories)
storyRouter.post('/create',upload.single('image'),authMiddleware,createStory);
storyRouter.post('/update',upload.single('image'),authMiddleware,updatStory);
storyRouter.post('/delete',authMiddleware,deleteStory);
export default storyRouter;