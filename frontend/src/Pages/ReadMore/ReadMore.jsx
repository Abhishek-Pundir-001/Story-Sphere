import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";

function ReadMore(){
    const locator = useLocation()
    const navigate = useNavigate()
    const {data} = locator.state
    useEffect(()=>{
        console.log(data)
    },[])
    return(
        <div className="py-20 px-10 ">
            
            <div className="flex flex-col items-center gap-5 relative">
            <FaArrowLeft  className="absolute left-0 cursor-pointer text-cyan-500" onClick={()=>navigate(-1)} size={30}/>
                <img className="w-64 rounded-lg" src={data.image} alt="" />
                <h1 className="text-2xl font-bold">{data.title}</h1>
            </div>
            <hr className="border-0 h-0.5 w-full bg-gray-600 mt-3"/>
            <div>
                <p className="font-medium leading-7 mt-5">{data.content}</p>
            </div>
        </div>
    )
}

export default ReadMore