import { createContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token,setToken] = useState(localStorage.getItem("token" || ""))
    const url = 'https://story-sphere-backend.onrender.com';
   

    const contextValue = {
        token,
        setToken,
        url,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider
