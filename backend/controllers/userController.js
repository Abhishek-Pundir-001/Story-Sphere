import userModel from "../models/userModel.js";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


const generateJWTtoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' })
}

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: 'All fields are mandatory'
            })
        }

        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: 'email already exist..'
            })
        }

        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Invalid email"
            })
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "password must contain at least 8 char"
            })
        }

        const hashedPassword = await bcrypt.hashSync(password, 10)
        const newUser = await userModel.create({ name, email, password: hashedPassword });

        const user = await newUser.save();

        const token = generateJWTtoken(user._id);
        user.password = undefined;

        return res.json({
            success: true,
            message: "account created successfully",
            user,
            token

        })

    } 
    catch (error) {
        return res.json({
            success: false,
            message: error.message
        })

    }
}



const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
         return   res.json({
                success: false,
                message: "All fields are mandatory"
            })
        }
    
        const user = await userModel.findOne({ email });
    
        if (!user || !(await bcrypt.compareSync(password, user.password))) {
          return  res.status(500).json({
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

const myStories = async (req,res)=>{
    const {userId} = req.body;
    try {
        const user = await userModel.findById(userId)
        const userStories = await user.userStories
        res.json({
            success:true,
            userStories
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
   
}

export {
    register,
    login,
    myStories
}

