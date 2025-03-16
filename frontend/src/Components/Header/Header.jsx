import './Header.css'
import logo2 from '../../assets/logo2.png'
import teddy from '../../assets/teddy.jpg'
import img4 from '../../assets/img4.jpg'
import book from '../../assets/book.jpg'
import logout_icon from '../../assets/logout_icon.png'
import { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import profile_icon from '../../assets/profile_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonCircleSharp } from "react-icons/io5";


function Header({ setCurrState }) {
    const { token, setToken } = useContext(StoreContext)
    const [dropdown, setDropDown] = useState(false);
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
    return (
        <div className="h-[45vw] header px-20 p-8">
            <nav className='flex justify-between items-center'>
                <div className="nav-right">
                    <img className='h-12 rounded-full' src={logo2} alt="" />
                </div>
                <ul className='flex gap-5 text-white'>
                    <Link to='/' className='cursor-pointer hover:text-amber-300'>Home</Link>
                    <a href='#about' className='cursor-pointer hover:text-amber-300'>About us</a>
                    <a href='#create' className='cursor-pointer hover:text-amber-300'>Write</a>
                    <a href='#read' className='cursor-pointer hover:text-amber-300'>Read</a>
                    <a href='#pricing' className='cursor-pointer hover:text-amber-300'>Pricing</a>
                </ul>
                <div className="nav-left flex gap-3.5">
                    <select name="" id="" className='cursor-pointer px-2.5 py-1 border-2 text-orange-500 border-white rounded-sm  outline-none'>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    {!token ? <button onClick={() => setCurrState(true)} className='bg-green-500 hover:bg-green-400 transition-all ease-in-out delay-300 rounded-sm px-7 py-2 cursor-pointer text-sm font-medium text-white'>Sign IN</button> : <div className="relative cursor-pointer" onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                        <IoPersonCircleSharp size={40} className='text-white'/>
                        <ul className={`${dropdown ? "flex flex-col  gap-2.5" : "hidden"} shadow-[0_0_5px_black] absolute right-0  z-10 p-5 text-white rounded-sm w-28 bg-blue-900`}>
                            <li onClick={() => navigate("/mystories")} className="flex items-center gap-2 w-16"><img src={book} alt="" className="w-5 mix-blend-lighten" /><p className="hover:text-orange-300 text-sm">Your stories</p></li>
                            <hr />
                            <li className="flex items-center gap-2 w-16" onClick={logout}><img src={logout_icon} alt="" className="w-5" /><p className="hover:text-orange-300 text-sm">Logout</p></li>
                        </ul>
                    </div>}
                </div>
            </nav>
            <header className='mt-10'>
                <div className='flex justify-around items-center'>
                    <div className='w-1/2 flex flex-col gap-2.5 items-start relative'>
                        <img className='h-8 rounded-full absolute top-[-30px] left-0 opacity-50' src={teddy} alt="" />
                        <h1 className='text-4xl font-semibold w-1/2 text-amber-50'>Get better at writng</h1>
                        <p className='text-white font-medium leading-6 text-sm w-3/4'>Helpping young writers make cool stories with awesome pictures.Storybird's art-inspired writing makes learning fun!</p>
                        <button className='px-10 py-2 text-white rounded-lg bg-orange-600'>Join now</button>
                    </div>
                    <div className='flex flex-wrap w-1/2 gap-5 items-center'>
                        <div className='w-full flex justify-between'>
                            <img className='w-1/2 rounded-lg mix-blend-lighten' src={img4} alt="" />
                            <img className='w-1/3 rounde-lg  mix-blend-darken opacity-50' src={teddy} alt="" />
                        </div>
                        <div className='w-full flex justify-between'>

                            <img className='w-1/3 rounded-lg mix-blend-darken opacity-50 -rotate-45' src={teddy} alt="" />
                            <img className='w-1/2 rounded-lg  mix-blend-lighten' src={img4} alt="" />
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header