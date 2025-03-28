import express from 'express';
import { connectToDb } from './config/dbConfig.js';
import userRouter from './routes/userRoutes.js';
import cors from 'cors'
import {config} from 'dotenv'
import storyRouter from './routes/storyRoutes.js';
import adminRouter from './routes/adminRoutes.js';

config()

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(cors())
app.use("/images",express.static("uploads"));

app.use('/check',(req,res)=>{
    res.send('I am good to go')
})
app.use('/api/user',userRouter);
app.use('/api/story',storyRouter)
app.use('/api/admin',adminRouter)


app.listen(port,async()=>{
    console.log('server is running at ',port)
    await connectToDb()
})