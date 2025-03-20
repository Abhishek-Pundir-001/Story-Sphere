import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo2.png'
import { useContext, useState } from 'react'
import { StoreContext } from '../../../Context/StoreContext'
import logout_icon from '../../assets/logout_icon.png'
import { IoPersonCircleSharp } from "react-icons/io5";



function Navbar({ currState, setCurrState }) {
    const { token,setToken } = useContext(StoreContext)
    const [dropdown,setDropDown] = useState(false)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
        // setCurrState(true)
    }

    return (
        <nav className="flex justify-between items-center p-5 md:px-10 bg-violet-700 relative">
            <img className="w-10 rounded-full" src={logo} alt="" />
            {!token ? <Link to='/signin'><button className='px-8 py-2 bg-green-400 rounded-lg text-white cursor-pointer' onClick={() => setCurrState(true)}>SignIn</button></Link> : <div className="relative cursor-pointer" onMouseOver={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
                <IoPersonCircleSharp size={40} className='text-white' />
                <ul className={`${dropdown ? "flex flex-col  gap-2.5" : "hidden"} shadow-[0_0_5px_black] absolute right-10 top-5  z-10 p-5 text-white rounded-sm w-28 bg-blue-900`}>
                    <li className="flex items-center gap-2 w-16" onClick={logout}><img src={logout_icon} alt="" className="w-5" /><p className="hover:text-orange-300 text-sm">Logout</p></li>
                </ul>
            </div>}
        </nav>
    )
}

export default Navbar