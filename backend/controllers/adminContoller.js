import storyModel from "../models/storyModel.js";
import userModel from "../models/userModel.js"
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";


const generateJWTtoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' })
}

const list = async(req,res)=>{
    try {
        const usersData = await userModel.find({});
        res.status(200).json({
            success:true,
            usersData
        }) 
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
 

}

const deleteUserStory = async (req, res) => {
    // const { userId } = req.body;
    const { storyid,userid} = req.headers;
    // console.log(storyid,userid)
    try {
        await storyModel.findByIdAndDelete(storyid)
        const updatedUser = await userModel.findByIdAndUpdate(
            {_id: new mongoose.Types.ObjectId(userid)},
            {$pull:{userStories:{_id:new mongoose.Types.ObjectId(storyid)}}}, 
            {new:true}
        )
        if(!updatedUser){
            return res.json({
                success:false,
                message:"User not found"
            })
        }
        res.json({
            success: true,
            message: "story deleted successfully"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const deleteUser = async (req,res)=>{
    const {userid} = req.headers;
    try {
        await userModel.findByIdAndDelete(userid)
        await storyModel.deleteMany({userId:userid})
    res.json({
        success:true,
        message:'user deleted successfully'
    }) 
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
   
}

const adminLogin = async(req,res)=>{
    try {
        const { email, password } = req.body;

        if (!email || !password) {
         return   res.json({
                success: false,
                message: "All fields are mandatory"
            })
        }
    
        const user = await userModel.findOne({ email });
        // console.log( user?.role)
    
        if (!user || !(await bcrypt.compareSync(password, user.password)) || user?.role !== 'ADMIN') {
          return  res.json({
                success: false,
                message: "Invalid crdentials"
            })
        }
    
        const token = generateJWTtoken(user._id)
    
        // res.cookie("token", token)
    
        res.status(200).json({
            success: true,
            message: "login successfully",
            token
    
        })
    } catch (error) {
        return res.json({
            success:false,
            message:error.message
        })
    }
}

export{ 
    list,
    deleteUserStory,
    deleteUser,
    adminLogin
}

   