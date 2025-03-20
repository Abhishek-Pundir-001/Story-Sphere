
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navabr/Navbar"
import Create from "./Pages/Create/Create"
import Sidebar from "./Components/Sidebar/Sidebar"
import ListStories from "./Pages/List/List"
import Home from "./Pages/Home/Home"
import { useContext, useState } from "react"
import AdminStories from "./Pages/AdminStories/AdminSt"
import UpdateAdminStory from "./Pages/Update/Update"
// import { StoreContext } from "../Context/StoreContext"
// import toast from "react-hot-toast"


function App() {
  const [currState, setCurrState] = useState(false)

  return (
    <>
      <Navbar currState={currState} setCurrState={setCurrState} className="w-[80%] md:w-full"/>
      <div className="flex gap-0 w-[100%]">
        <Sidebar />
          <Routes>
            <Route path="/signin" element={<Home currState={currState} setCurrState={setCurrState} />} />
            <Route path="/" element={<Create />} />
            <Route path="/list" element={<ListStories />} />
            <Route path="/adminstory" element={<AdminStories />} />
            <Route path="/update" element={<UpdateAdminStory />} />
          </Routes>
      </div>

    </>
  )
}

export default App
