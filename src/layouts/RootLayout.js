import React, { useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import "../css/Navbar.css";


import logo from "../assets/logo.svg"
import Header from "../components/Header";
import Footer from "../components/Footer";

import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

export default function RootLayout () {
    
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return (
    
    <div className='root-layout'>
    
       <nav>
          <div className="logo">
            <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
        </div>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="bookingpage">Reservations</NavLink>
                <NavLink to="order">Order</NavLink>
                <NavLink to="login">Login</NavLink>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
                  </div>
  
                  </nav>
     <div className="header"><Header /></div>
           <div>
     
        
      
        <Outlet />
  </div>
   
      <div className="footer"><Footer /></div>
    </div>
  )
}

