import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:'USER'},
    userStories:{type:Array,default:[]}
},{minimized:false}); 



const userModel = mongoose.model.user || mongoose.model("user",userSchema);

export default userModel;