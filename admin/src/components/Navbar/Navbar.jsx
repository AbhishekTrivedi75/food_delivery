import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Navbar = () => {
  const {setToken,setShowLogin} =useContext(StoreContext)
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    setShowLogin(true)
  }
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
        <button className="plain-button" onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar

