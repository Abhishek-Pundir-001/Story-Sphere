import storyModel from "../models/storyModel.js";
import userModel from "../models/userModel.js";
import mongoose from "mongoose";

// create story

const createStory = async (req, res) => {
    const { title, content,userId } = req.body;
    let image_filename = `${req.file.filename}`;

    const story = await storyModel.create({
        userId:userId,
        image: image_filename,
        title: title,
        content: content

    })

    await userModel.findByIdAndUpdate(req.body.userId, { $push: { userStories: story } });

    try {
        await story.save();
        res.json({
            success: true,
            message: 'Story created successfully',
            story
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

// getting stories

const getAllStories = async (req, res) => {
    try {
        const stories = await storyModel.find({});
        res.json({
            success: true,
            stories
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

// update stories--
const updatStory = async (req, res) => {

    try {
        const { id } = req.headers
        const { userId } = req.body
        const story = await storyModel.findById(id)
        if (!story) {
            return res.status(400).json({
                success: false,
                message: 'story not found',
            })
        }
        const updateData = {
            image: `${req?.file?.filename ? req.file.filename : story.image}` ,
            title: req.body.title || story.title, 
            content: req.body.content || story.content
        }
        const updatedStory = await storyModel.findByIdAndUpdate(id, updateData, { new: true });
        const newStory = await userModel.findOneAndUpdate(
            { _id: userId, "userStories._id": new mongoose.Types.ObjectId(id) },
            {
                $set: {
                    "userStories.$.image": updateData.image,
                    "userStories.$.title": updateData.title,
                    "userStories.$.content": updateData.content
                }
            },
            { new: true }
        )
        res.json({
            success: true,
            updatedStory,
            newStory
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

// Delete story

const deleteStory = async (req, res) => {
    const { userId } = req.body;
    const { id } = req.headers;

    try {
        await storyModel.findByIdAndDelete(id)
        const updatedUser = await userModel.findByIdAndUpdate(
            {_id:userId},
            {$pull:{userStories:{_id:new mongoose.Types.ObjectId(id)}}},
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



export {
    createStory,
    getAllStories,
    updatStory,
    deleteStory
}