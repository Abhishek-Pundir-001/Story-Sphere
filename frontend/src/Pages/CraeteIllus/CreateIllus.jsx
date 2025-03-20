import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../Context/StoreContext";
import uploadImage from '../../assets/upload_area.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function CreateIllus() {
    const [previewImage,setPreviewImage] = useState(false)
    const {url,token} = useContext(StoreContext);
    // console.log(token)
    const navigate = useNavigate()
    const [storyData,setStoryData] = useState({
        title:'',
        content:''
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

        formdata.append("image",previewImage);
        formdata.append("title",storyData.title)
        formdata.append("content",storyData.content)

        const response = await axios.post(`${url}/api/story/create`,formdata,{headers:{token}});
        if(response?.data?.success){
            setStoryData({
                 title:'',
                 content:''
            })

            setPreviewImage(false)
            navigate('/')
        }

    
    }

    useEffect(() => {
        console.log(storyData)
    }, [storyData]) 

    return (
        <div className="flex justify-center items-center h-[100vh] bg-amber-950 p-5 w-full">
            <form onSubmit={createStory} className="flex flex-col  gap-5 shadow-[0_0_10px_gray] rounded-lg p-5 w-full md:w-1/2">
                <div className="flex flex-col  items-start justify-between gap-5">
                    <div  className="flex flex-col items-center gap-5 w-full">
                        <label htmlFor="avatar" className=""><img className="w-full md:w-36 rounded-sm" src={previewImage ? URL.createObjectURL(previewImage):uploadImage} alt="" /></label>
                        <input required onChange={(e) => setPreviewImage(e.target.files[0])} type='file' id="avatar" className="hidden" />
                        <input required onChange={(e)=>handleUserInput(e)} name="title" type="text" className="bg-white w-full p-2.5 rounded-lg outline-none" placeholder="Title" />
                    </div>
                    <div className="w-full">
                        <textarea required onChange={(e)=>handleUserInput(e)} name="content" placeholder="write your story" type="text" className="outline-none bg-white p-2 w-full rounded-lg resize-none" rows='8' />
                    </div>
                </div>


                <button className="bg-amber-300 rounded-4xl cursor-pointer py-2.5 w-full text-white" type="submit">Publish</button>
            </form>
        </div>
    )


}

export default CreateIllus;