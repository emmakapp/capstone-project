import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import logo from './logo.svg';
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import './css/Navbar.css';

const Navbar = () => {
    
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className="navtotal">
    <div className='nav-layout'>
    
                <div className="logo">
              <NavLink to='/'><img src={logo} alt="Logo" /></NavLink></div>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <NavLink id="link_Styles" to="/">Home</NavLink>
                <NavHashLink to="#about">About</NavHashLink>
                <NavLink to="menu">Menu</NavLink>
                <NavLink to="bookingpage">Reservations</NavLink>
                <NavLink to="order">Order</NavLink>
                <NavLink to="login">Login</NavLink>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
                  </div>
       
   
      
    </div>
    </nav>
  )
}


    
export default Navbar;