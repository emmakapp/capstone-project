import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import logo from '../assets/logo.svg';
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

import '../css/Navbar.css';



const Navbar = () => {
    
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navtotal"> 
        <div className='nav-layout'>
      
        
    
       <div className="logo">
              <NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
      </div>
                
        <div className={click ? 'nav-menu active' : 'nav-menu'} >
                <NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>Home</NavLink>
                <NavHashLink  to="/about" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>About</NavHashLink>
                <NavLink to="/menu" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>Menu</NavLink>
                <NavLink to="/bookingpage" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>Reservations</NavLink>
                <NavLink to="/order" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>Order</NavLink>
                <NavLink to="/login" className={({ isActive, isPending }) => (isPending ? 'pending': isActive ? 'active' : '' )}>Login</NavLink>
         </div>
              
          <div className='hamburger' onClick={handleClick} aria-label='Toggle navigation menu'>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
           </div>
           <div><Outlet /></div>
           </div>
           </nav>
       
        
    
              
  </>
  )
}


    
export default Navbar;