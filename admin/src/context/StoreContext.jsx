import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const url = 'https://food-delivery-backend-3a5g.onrender.com'; 
    const [token,setToken]=useState("")
    const [showLogin,setShowLogin]=useState(true);
    useEffect(()=>{
        async function loadData(){
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                setShowLogin(false)
            }
        }
        loadData();
    },[])
    const contextValue={
          url,
          token,
          showLogin,
          setToken,
          setShowLogin
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
