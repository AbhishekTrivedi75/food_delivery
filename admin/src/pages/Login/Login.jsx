import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
const LoginPopup = ({setShowLogin}) => {
    const {url,setToken} =useContext(StoreContext)
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    const onLogin = async(event)=>{
      event.preventDefault();
      let newUrl = url;
      newUrl += "/api/admin/login"
      const response = await axios.post(newUrl,data);
      console.log(response);
      console.log(response.data.success);
      if(response.data.success){
          setToken(response.data.token)
          console.log(" token ",response.data.token);
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
      }
      else{
        alert(response.data.message);
      }
    }
  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>Login</h2>
            </div>
            <div className="login-popup-inputs">
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
            </div>
            <button type='submit'>Login</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required/>
                <p>By continuing i agree to the terms of use & privacy policy</p>
            </div>
        </form>
    </div>
  )
}

export default LoginPopup