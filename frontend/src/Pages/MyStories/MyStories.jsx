import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../Context/StoreContext"
import { FaArrowLeft } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function MyStories() {
    const { url, token } = useContext(StoreContext);
    const [userStories, setUserStories] = useState()
    const navigate = useNavigate()

    async function fetchUserStories() {
        const response = await axios.post(`${url}/api/user/mystory`, {}, { headers: { token } });
        if (response?.data?.success) {
            setUserStories(response?.data?.userStories)

        }

    }

    async function storyDelete(id) {
        await axios.post(`${url}/api/story/delete`, {}, { headers: { token, id } });
        fetchUserStories()
    }

    useEffect(() => {
        fetchUserStories()
        // console.log(userStories)
    }, [])


    return (
        <div className="relative">
            <FaArrowLeft className="absolute left-4 top-6 cursor-pointer text-cyan-500" onClick={() => navigate(-1)} size={30} />
            {userStories?.map((story, idx) => {
                return (
                    <div className="py-20 px-10" key={story._id}>
                        <div className="flex flex-col items-center gap-5">
                            <img className="w-64 rounded-lg" src={`${url}/images/${story.image}`} alt="" />
                            <h1 className="text-2xl font-bold">{story.title}</h1>
                            <div className="flex gap-5 items-center">
                                <FaPen className="cursor-pointer" onClick={() => navigate('/update', { state: { story } })} />
                                <MdDelete onClick={() => storyDelete(story._id)} size={30} className="cursor-pointer" />
                            </div>
                        </div>
                        <hr className="border-0 h-0.5 w-full bg-gray-600 mt-3" />
                        <div>
                            <p className="font-medium leading-7 mt-5 text-center">{story.content}</p>
                        </div>
                        <hr className="border-0 h-0.5 w-full bg-gray-600 mt-3" />
                    </div>

                )
            })}
            <div className="text-center my-3">
                <button className="px-6 py-2 bg-blue-600 rounded-lg text-white cursor-pointer" onClick={() => navigate(-1)}>Go back</button>
            </div>

        </div>
    )
}

export default MyStories

// interaciveley brand client center through is customised value good ideas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, dolore eos deleniti quasi quas perspiciatis fuga, quos minus nesciunt a harum repellendus voluptatum magni saepe soluta quibusdam quo similique odit. Cupiditate, odit debitis? Aliquam accusamus aut assumenda iste rem. Possimus minus, numquam deserunt et eius commodi soluta quam illo nesciunt obcaecati excepturi tempora inventore unde perspiciatis molli interaciveley brand client center through is customised value good ideas Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, dolore eos deleniti quasi quas perspiciatis fuga, quos minus nesciunt a harum repellendus voluptatum magni saepe soluta quibusdam quo similique odit. Cupiditate, odit debitis? Aliquam accusamus aut assumenda iste rem. Possimus minus, numquam deserunt et eius commodi soluta quam illo nesciunt obcaecati excepturi tempora inventore unde perspiciatis mollitia fugit autem cumque porro. Hic atque repudiandae commodi possimus fugiat magnam nam tempore adipisci ipsam maiores nihil ut, obcaecati modi nulla, nisi totam consequatur culpa quo quae! Quidem nobis fugit fugiat nemo laboriosam incidunt voluptate temporibus blanditiis! Quasi eligendi atque doloribus vitae! Enim voluptatem sunt est. Quas optio debitis quidem maxime esse sit magni, recusandae sequi. Repudiandae nihil inventore aliquam aliquid atque? Nesciunt rerum velit consequuntur ipsum maiores dolore aperiam nihil vero necessitatibus, distinctio ad soluta delectus veniam, assumenda fuga suscipit ea modi adipisci dolorem iure iusto impedit? In nisi, labore iure iusto quae quod repudiandae vitae aliquid consequatur corporis aut laudantium inventore aspernatur. Labore non explicabo consectetur totam aliquid libero error, voluptatum ducimus nulla doloribus. Omnis porro minima minus excepturi odio quidem blanditiis reiciendis temporibus consequatur deserunt fugiat labore molestiae fuga cum dolorem voluptate assumenda quisquam, animi autem eaque tempora. Neque, molestiae.tia fugit autem cumque porro. Hic atque repudiandae commodi possimus fugiat magnam nam tempore adipisci ipsam maiores nihil ut, obcaecati modi nulla, nisi totam consequatur culpa quo quae! Quidem nobis fugit fugiat nemo laboriosam incidunt voluptate temporibus blanditiis! Quasi eligendi atque doloribus vitae! Enim voluptatem sunt est. Quas optio debitis quidem maxime esse sit magni, recusandae sequi. Repudiandae nihil inventore aliquam aliquid atque? Nesciunt rerum velit consequuntur ipsum maiores dolore aperiam nihil vero necessitatibus, distinctio ad soluta delectus veniam, assumenda fuga suscipit ea modi adipisci dolorem iure iusto impedit? In nisi, labore iure iusto quae quod repudiandae vitae aliquid consequatur corporis aut laudantium inventore aspernatur. Labore non explicabo consectetur totam aliquid libero error, voluptatum ducimus nulla doloribus. Omnis porro minima minus excepturi odio quidem blanditiis reiciendis temporibus consequatur deserunt fugiat labore molestiae fuga cum dolorem voluptate assumenda quisquam, animi autem eaque tempora. Neque, molestiae.