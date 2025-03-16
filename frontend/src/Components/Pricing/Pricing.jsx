import subs1 from '../../assets/subs1.jpg'
import subs2 from '../../assets/subs2.jpg'
import subs3 from '../../assets/subs3.jpg'
import globe from '../../assets/globe.png'
import stat from '../../assets/stat.jpg'

import { FaArrowRight } from "react-icons/fa";
function Pricing(){
    return(
        <div className="relative px-20 pt-5 pb-14 mt-10 bg-linear-to-t from-pink-200 to-white flex flex-col gap-2 items-center" id="pricing">
            <img src={globe} className='absolute w-12 left-[15%] top-[10%] mix-blend-darken rounded-full -rotate-45' alt="" />
            <img src={stat} className='absolute w-16 right-[20%] -rotate-45' alt="" />
            <span className='text-lg text-pink-700 font-semibold'>Pricing</span>
            <h1 className='text-2xl text-black font-medium w-[30%] text-center'>Our subscription plans for you that we provide!</h1>
            <div className="flex w-[90%] flex-wrap justify-center items-center gap-5 mt-5">
                <div className="h-56 w-[26rem] px-5 py-12 border-none rounded-4xl bg-white flex justify-between items-center gap-10">
                    <img className='w-28  rounded-t-4xl rounded-b-lg -rotate-45' src={subs1} alt="" />
                    <div className='flex flex-col gap-2.5'>
                        <h2 className='text-lg text-pink-700 font-semibold'>Basic Individual Plan</h2>
                        <p className='text-[#989494]'>Eu turpis egestats pretium aenean pharetra magna ac.</p>
                        <p className='text-pink-700 underline flex items-center gap-2.5'>Know more <FaArrowRight /></p>
                    </div>
                </div>
                <div className="h-56 w-[26rem] px-5 py-12 border-none rounded-4xl bg-white flex justify-between items-center gap-10">
                    <img className='w-28  rounded-t-4xl rounded-b-lg -rotate-45' src={subs2} alt="" />
                    <div className='flex flex-col gap-2.5'>
                        <h2 className='text-lg text-pink-700 font-semibold'>Basic Individual Plan</h2>
                        <p className='text-[#989494]'>Eu turpis egestats pretium aenean pharetra magna ac.</p>
                        <p className='text-pink-700 underline flex items-center gap-2.5'>Know more <FaArrowRight /></p>
                    </div>
                </div>
                <div className="h-56 w-[26rem] px-5 py-12 border-none rounded-4xl bg-white flex justify-between items-center gap-10">
                    <img className='w-28  rounded-t-4xl rounded-b-lg -rotate-45' src={subs3} alt="" />
                    <div className='flex flex-col gap-2.5'>
                        <h2 className='text-lg text-pink-700 font-semibold'>Basic Individual Plan</h2>
                        <p className='text-[#989494]'>Eu turpis egestats pretium aenean pharetra magna ac.</p>
                        <p className='text-pink-700 underline flex items-center gap-2.5'>Know more <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <button className='bg-[#6e1b71] px-7 py-2 rounded-lg text-white mt-5 cursor-pointer'>Explore More</button>
        </div>
    )
}

export default Pricing;