import st from '../../assets/st.png'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-black' id="about">
            <div className="flex justify-between h-[26rem] px-14 pt-7 pb-24 mt-14">
                <div className="w-1/3 self-start flex flex-col gap-2.5">
                    <img className='w-24 rounded-full' src={st} alt="" />
                    <h2 className='text-white font-semibold'>ABOUT &nbsp;THE  &nbsp;COMPANY</h2>
                    <p className='text-[#989595]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, nihil placeat non optio excepturi praesentium hic maxime harum minima? Dolor!</p>
                    <div className='text-white flex items-center gap-2.5 mt-2.5'>
                        <FaTwitter className='cursor-pointer' /><FaFacebook className='cursor-pointer' /><FaInstagram className='cursor-pointer' /><FaLinkedin className='cursor-pointer' />
                    </div>

                </div>
                <div className="w-1/2 self-end">
                    <div className='flex justify-between'>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-white text-lg font-medium'>Our Services</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Home</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>About us</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>write</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Read</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Activity</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Pricing</li>
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <li className='text-white text-lg font-medium'>Our Services</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Home</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>About us</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>write</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Read</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Activity</li>
                            <li className='text-[#989595] cursor-pointer text-sm'>Pricing</li>
                        </ul>
                        <div className='flex flex-col items-center gap-3'>
                            <h2 className='text-white text-lg font-medium'>Contact us</h2>
                            <button className='px-7 py-2 bg-yellow-300 rounded-lg border-2 border-white text-pink-700 cursor-pointer'>Know More</button>
                        </div>

                    </div>
                </div>
            </div>
            <hr className='border-0 h-1 w-full bg-[#e1d9d9]' />
        </div>

    )
}

export default Footer;