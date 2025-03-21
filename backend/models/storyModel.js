import mongoose from "mongoose";
 
const storySchema = new mongoose.Schema({
    userId:{type:String,required:true},
    image:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true}
})

const storyModel = mongoose.model.story || mongoose.model('story',storySchema)

export default storyModel;