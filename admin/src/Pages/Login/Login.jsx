import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import axios from 'axios'
import cross_icon from '../../assets/cross_icon.png'
import { StoreContext } from "../../../Context/StoreContext"
import { useNavigate } from "react-router-dom";
function LoginPopUp({setCurrState}) {
    const { token, setToken, url } = useContext(StoreContext)
    let [checkbox, setCheckBox] = useState(false)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    function handleUserInput(e) {
        const { name, value } = e.target;
        // console.log(name, value)
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
            const response = await axios.post(`${url}/api/admin/login`, userData)

            if (response?.data?.success) {
                toast.success(response?.data?.message)

                setToken(response?.data?.token);

                localStorage.setItem("token", response?.data?.token)

                setUserData({
                    email: '',
                    password: ''
                })


                setCheckBox(false)
                navigate("/")
    
            }

        //    if(!response?.data?.success){
        //     toast.error('invalid')
        //    }
        else{
            toast.error(response?.data?.message)
        }

        } catch (error) {
            console.log(error.message)
        }


    }

    return (
            <div className="form-title px-7 py-6 rounded-lg  flex flex-col gap-5 bg-white border absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] place-self-center w-[80vw] md:w-[50vw] lg:w-[23vw]">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold font-serif">Login</h2>
                    <img className="h-4 cursor-pointer" onClick={() => setCurrState(false)} src={cross_icon} />
                </div>
                <form className="flex flex-col gap-3.5" onSubmit={handleFormSubmit}>
                    <input required onChange={(e) => handleUserInput(e)} type="email" placeholder="Your email" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none " name="email" value={userData.email} />
                    <input required onChange={(e) => handleUserInput(e)} type="password" placeholder="password" className="bg-transparent rounded-lg px-2 py-1 border-2 outline-none" name="password" value={userData.password} />
                    <button className="bg-red-600 py-2 rounded-lg text-white cursor-pointer" type="submit">Login</button>
                    <div className="flex items-start gap-2">
                        <input onClick={() => setCheckBox(!checkbox)} name="checkbox" type="checkbox" className="mt-1" /><p className="text-sm">By continuing, i agree to the terms of use & privacy policy</p>
                    </div>

                </form>
            </div>
    )

}

export default LoginPopUp