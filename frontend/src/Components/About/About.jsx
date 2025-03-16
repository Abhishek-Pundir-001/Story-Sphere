import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img4.jpg'
import img7 from '../../assets/img7.jpg'
function About(){
    return(
       <div className="px-20 bg-[#401b41] h-[70vh]  py-8 text-white flex justify-between">
         <div className="w-1/2 flex flex-col gap-2 justify-center">
            <p>more About us</p>
            <h1 className="text-2xl w-28">what we do !</h1>
            <p className="text-sm font-light leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nam ut molestias sit cumque mollitia natus perspiciatis! Ullam officia, suscipit, blanditiis esse, facere repellat tempora aut quisquam ipsam dolor officiis fugit provident harum vel dolorem?</p>
            <button className="px-8 py-1.5 bg-amber-100 text-pink-500 rounded-sm w-fit cursor-pointer">Learn More</button>
         </div>
         <div className='w-1/2 relative'>
            <img className='w-58 absolute right-5 rounded-lg' src={img2} alt="" />
            <img className='w-58 absolute left-[25%] top-10 rounded-lg' src={img4} alt="" />
            <img className='w-58 absolute bottom-5 rounded-lg' src={img7} alt="" />
         </div>
       </div>
    )
}

export default  About;