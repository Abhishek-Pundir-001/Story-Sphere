import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import uploadImage from '../../assets/upload_area.png'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function UpdateStory() {
    const {url,token} = useContext(StoreContext);
    const locator = useLocation();
    const {story} = locator.state 
    const [previewImage,setPreviewImage] = useState(false)
    
    const id  = story._id
    const navigate = useNavigate()
    const [storyData,setStoryData] = useState({
        title:story.title,
        content:story.content 
    }) 

    function handleUserInput(e){
       const {name,value} = e.target;

       setStoryData({
        ...storyData,[name]:value
       })
    }

    async function createStory(e) {
        e.preventDefault()
        const formdata = new FormData();
        if(previewImage){
            // toast.error("Image is required")
            formdata.append("image",previewImage);
        }
        
        formdata.append("title",storyData.title)
        formdata.append("content",storyData.content)
        
        const response = await axios.post(`${url}/api/story/update`,formdata,{headers:{token,id}});
        if(response?.data?.success){
            setStoryData({
                 title:'',
                 content:'',
                 old_Image:''
            })

            setPreviewImage(false)
            navigate('/')
        }

    
    }


    useEffect(() => {
        console.log(storyData)
        console.log(story)
        console.log(id)
    }, [storyData]) 

    return (
        <div className="flex justify-center items-center h-[100vh] bg-amber-950">
            <form onSubmit={createStory} className="flex flex-col  gap-5 shadow-[0_0_10px_gray] rounded-lg p-5 w-1/2">
                <div className="flex items-start justify-between gap-5">
                    <div className="flex flex-col items-center gap-5 w-1/3">
                        <label htmlFor="avatar" className=""><img className="h-36 rounded-sm" src={`${url}/images/${story.image}`} alt="" /></label>
                        <input onChange={(e) => setPreviewImage(e.target.files[0])} type='file' id="avatar" className="hidden" />
                        <input value={storyData.title} onChange={(e)=>handleUserInput(e)} name="title" type="text" className="bg-white w-44 p-2.5 rounded-lg outline-none" placeholder="Title" />
                    </div>
                    <div className="w-2/3">
                        <textarea value={storyData.content} onChange={(e)=>handleUserInput(e)} name="content" placeholder="write your story" type="text" className="outline-none bg-white p-2 w-full rounded-lg resize-none" rows='8' />
                    </div>
                </div>


                <button className="bg-amber-300 rounded-4xl cursor-pointer py-2.5 w-full text-white" type="submit">Publish</button>
            </form>
        </div>
    )


}

export default UpdateStory;