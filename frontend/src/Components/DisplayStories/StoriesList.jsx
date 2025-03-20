import book from '../../assets/book.jpg'
import StoryCard from "../StoryCard/StoryCard"
import img4 from '../../assets/img4.jpg'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

function StoriesList() {
    const { url } = useContext(StoreContext)
    let [stories, setStories] = useState();

    async function fetchAllStories() {
        const response = await axios.get(`${url}/api/story/get`);
        if (response?.data?.success) {
            setStories(response?.data?.stories)
        }
    }
    useEffect(() => {
        fetchAllStories()
    },[])
    return (
        <div id='read' className='flex flex-col items-center mt-10 px-20 pt-5 pb-20 gap-1 bg-amber-50'>
            <img className='w-12 mix-blend-darken' src={book} alt="" />
            <span className='text-lg text-pink-700 font-semibold'>Read Stories</span>
            <h1 className='text-2xl text-black font-medium w-full md:w-[30%] text-center'>Take a look and Start Learning From Today</h1>
            <div className='flex items-center gap-6 justify-center flex-wrap mt-5'>
                {stories?.map((item, idx) => {
                    return <StoryCard  image={`${url}/images/${item.image}`} title={item.title} content={item.content} key={item._id} id={item._id} />
                })
                }
            </div>
            <button className='bg-[#6e1b71] px-7 py-2 rounded-lg text-white mt-5 cursor-pointer'>Explore More</button>
        </div>
    )
}

export default StoriesList