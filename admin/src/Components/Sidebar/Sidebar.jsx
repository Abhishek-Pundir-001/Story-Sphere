import { NavLink } from "react-router-dom"
import add_icon from "../../assets/add_icon.png";
import list_icon from "../../assets/list.png"
import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreContext";

function Sidebar() {
    const {token} = useContext(StoreContext)

    return (
        <div className="sidebar w-[20%] min-h-[100vh] border-2 border-[#a9a9a9] border-t-0">
            <div className="sidebar-options flex flex-col gap-5 pt-12 pl-[20%]">
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? ' bg-orange-200' : undefined
                }><div className={`sidebar-option flex items-center gap-2.5 px-2.5 py-2 border-2 border-r-0 rounded-l-sm cursor-pointer $`}>
                        <img src={add_icon} alt="" />
                        <p className="hidden md:block">Add Stories</p>
                    </div>
                </NavLink >
                <NavLink to='/list' className={({ isActive }) =>
                    isActive ? 'bg-orange-200' : undefined
                }><div className={`sidebar-option  flex items-center gap-2.5 px-2.5 py-2 border-2 border-r-0 rounded-l-sm cursor-pointer $`}>
                        <img src={list_icon} className="w-8 mix-blend-darken" alt="" />
                        <p className="hidden md:block">List Stories</p>
                    </div>
                </NavLink >
                <NavLink to='/adminstory' className={({ isActive }) =>
                    isActive ? 'bg-orange-200' : undefined
                }><div className={`sidebar-option  flex items-center gap-2.5 px-2.5 py-2 border-2 border-r-0 rounded-l-sm cursor-pointer $`}>
                        <img src={list_icon} className="w-8 mix-blend-darken" alt="" />
                        <p className="hidden md:block">Admin Stories</p>
                    </div>
                </NavLink >
            </div >
        </div >
    )

}

export default Sidebar