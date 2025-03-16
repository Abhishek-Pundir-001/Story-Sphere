import title from '../../assets/title1.png'
import read from '../../assets/read.jpg'
import write from '../../assets/write.jpg'
import { Link } from 'react-router-dom'

function CreateStory() {
    return (
        <div className="flex flex-col gap-5 items-center py-8" id="create">
            <h1 className="text-[#401b41] text-3xl font-semibold">Get Started</h1>
            <div className="flex flex-wrap justify-center gap-10">
                <div  className="text-pink-500 shadow-[0_0_5px_purple] h-64 w-64 p-2 rounded-lg border bg-green-400 border-[#5d285e] flex flex-col items-center gap-2 py-1.5">
                    <img className='mix-blend-darken w-44' src={title} alt="" />
                    <h1 className='text-2xl  font-medium'>Choose an illustration</h1>
                    <p className='w-[75%] text-center'>ubiquititious models rather than parallel initiatives seamlessly reinvent success.</p>
                </div>
                <div className="text-white shadow-[0_0_5px_purple] h-64 w-64 p-2 rounded-lg bg-green-700 flex flex-col items-center gap-2 py-1.5">
                    <img className='mix-blend-darken w-14 rounded-full' src={write} alt="" />
                    <h1 className='text-2xl font-medium'>Write your story</h1>
                    <p className='w-[75%] text-center'>ubiquititious models rather than parallel initiatives seamlessly reinvent success.</p>
                </div>
                <div className="text-pink-500  shadow-[0_0_5px_purple] h-64 w-64 p-2 rounded-lg border bg-green-400 border-[#5d285e] flex flex-col items-center gap-2 py-1.5">
                    <img className='mix-blend-darken w-14 rounded-full' src={read} alt="" />
                    <h1 className='text-2xl font-medium'>Publish your story</h1>
                    <p className='w-[75%] text-center'>ubiquititious models rather than parallel initiatives seamlessly reinvent success.</p>
                </div>
            </div>
            <Link to='/createillus'><button className='bg-green-700 hover:scale-105 cursor-pointer text-white px-10 py-3 rounded-sm'>Try it now</button></Link>
        </div>

    )
}


export default CreateStory