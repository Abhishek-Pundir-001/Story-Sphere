import { useContext, useEffect, useState } from "react"
// import { assets } from "../../../assets/frontend_assets/assets";
import toast from "react-hot-toast";
import axios from 'axios'
import { StoreContext } from "../../Context/StoreContext";
import cross_icon from '../../assets/cross_icon.png'


function LoginPopUp({ setCurrState }) {
    const { token, setToken, url } = useContext(StoreContext)
    const [currForm, setCurrForm] = useState("login");
    let [checkbox, setCheckBox] = useState(false)
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        console.log(name, value)
        setUserData({
            ...userData, [name]: value
        })
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        if (!checkbox) {
            toast.error("please accept the terms & conditions")
            return
        }

        try {
            const response = await axios.post(`${url}/api/user/${currForm}`, userData)

            if (response?.data?.success) {
                toast.success(response?.data?.message)

                setToken(response?.data?.token);

                localStorage.setItem("token", response?.data?.token)

                setUserData({
                    name: '',
                    email: '',
                    password: ''
                })


                setCheckBox(false)
            }

        } catch (error) {
            console.log(error.message)
        }


    }

    return (
        <div className="w-[98vw] h-[100vh] z-10 absolute grid bg-[#00000090]">
            <div className="form-title px-7 py-6 rounded-lg  flex flex-col gap-5 bg-white border place-self-center w-[80vw] md:w-[50vw] lg:w-[23vw]">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-serif">{currForm}</h2>
                    <img className="h-4 cursor-pointer" onClick={() => setCurrState(false)} src={cross_icon} />
                </div>
                <form className="flex flex-col gap-3.5" onSubmit={handleFormSubmit}>
                    {currForm === "signUp" ? <input required onChange={(e) => handleUserInput(e)} className="bg-transparent border-2 outline-none rounded-lg px-2 py-1" type="text" placeholder="Your name" name="name" id="" value={userData.name} /> : <></>}
                    <input required onChange={(e) => handleUserInput(e)} type="email" placeholder="Your email" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none " name="email" value={userData.email} />
                    <input required onChange={(e) => handleUserInput(e)} type="password" placeholder="password" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none" name="password" value={userData.password} />
                    <button className="bg-red-600 py-2 rounded-lg text-white cursor-pointer" type="submit">{currForm}</button>
                    <div className="flex items-start gap-2">
                        <input onClick={() => setCheckBox(!checkbox)} name="checkbox" type="checkbox" className="mt-1" /><p className="text-sm">By continuing, i agree to the terms of use & privacy policy</p>
                    </div>

                </form>
                {currForm === "signUp" ? <p className="text-sm text-center">Already have an account? <button className="text-cyan-700 text-lg cursor-pointer" onClick={() => setCurrForm("login")}>Login</button></p> : <p className="text-sm text-center">Don't have an account? <button onClick={() => setCurrForm("signUp")} className="cursor-pointer text-cyan-700 text-lg">Sign up</button></p>}

            </div> : <></>

        </div>
    )

}

export default LoginPopUp