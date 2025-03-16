import { useNavigate } from "react-router-dom";

function StoryCard({ image, title, content, id }) {
    let data = {
        image:image,
        title:title,
        content:content,
        id:id
    }
    const navigate =  useNavigate()
    return (
        <div className="hover:scale-105 cursor-pointer shadow-[0_0_10px_yellow] flex flex-col gap-2.5 w-64 h-[21rem] border-4 rounded-lg bg-[#6e1b71] border-amber-400 p-2">
            <img className="rounded-lg h-36" src={image} alt="" />
            <h1 className="text-white font-bold">{title}</h1>
            <p className="text-white text-sm">{content.slice(0,73)}...</p>
            <button onClick={()=>navigate('/readmore',{state:{data}})} className="bg-yellow-400 text-pink-500 rounded-lg font-medium w-full py-1.5 cursor-pointer">Read More</button>
        </div>
    )
}


export default StoryCard;