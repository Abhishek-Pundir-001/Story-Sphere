import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { StoreContext } from "../../../Context/StoreContext";
import { useNavigate } from "react-router-dom";


function AdminStories() {
    const { url, token } = useContext(StoreContext)
    const [list, setList] = useState()
    const navigate = useNavigate()

    async function fetchList() {
        try {
            const response = await axios.get(`${url}/api/admin/list`);
            if (response?.data?.success) {
                setList(response?.data?.usersData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteStory(storyId, userId) {
        const response = await axios.post(`${url}/api/admin/delete`, {}, { headers: { storyid: storyId, userid: userId } });
        if (response?.data?.success) {
            fetchList()
        }
    }

    useEffect(() => {
        fetchList()
        // console.log(list)
    }, [])

    return (
        token ?
            <div className="mt-5 ml-5 w-[100%] pr-8">
                {list?.map((data, idx) => {
                    return (
                        data.role == 'ADMIN' && (
                            <div key={data._id}>
                                <div className="flex flex-col items-center  gap-2.5">

                                    <h1 className="text-4xl font-medium">User Name: <span className="text-amber-500">{list[idx]?.name}</span></h1>
                                </div>
                                <hr className="border-0 h-1 w-full bg-black my-5" />
                                {
                                    list[idx].userStories.map((el, i) => {
                                        return (
                                            <div className="mb-5" key={el?._id}>
                                                <img className="w-44 rounded-lg" src={`${url}/images/${el?.image}`} alt="" />
                                                <h1 className="text-2xl font-semibold">Title: <span className="text-blue-400">{el?.title}</span></h1>
                                                <div className="flex items-center gap-2.5">
                                                    <MdDelete className="cursor-pointer mb-2.5" size={30} onClick={() => deleteStory(el?._id, data?._id)} />
                                                    <FaPen className="cursor-pointer" onClick={() => navigate('/update', { state: { el } })} />
                                                </div>
                                                <p className="">{el?.content}</p>

                                            </div>
                                        )
                                    })
                                }

                                <hr className="border-0 h-1 w-full bg-black my-5" />
                            </div>
                        )
                    )
                })}
            </div> : <div className="h-[100vh] w-full bg-slate-800 flex justify-center items-center">
                <h1 className="text-4xl text-white font-bold text-center">NOT AUTHORIZED</h1>
            </div>
    )
}

export default AdminStories