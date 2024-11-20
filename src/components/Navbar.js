import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import logo from '../assets/logo.svg';
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import '../css/Navbar.css';

const Navbar = () => {
    
  const[minimenu, setMinimenu] = useState(false);
  const handleMinimenu = () => setMinimenu(!minimenu);

  return (
    <>
      <nav className="navtotal"> 
        <div className='nav-layout'>
          
          <div className="logo">
            <NavLink to='/'><img src={logo} alt="Little Lemon logo" title="logo"/></NavLink>
          </div>
                
          <div className={minimenu ? 'nav-menu active' : 'nav-menu'} >
            <NavLink to="/" title="home" aria-label="Home" className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )}>Home</NavLink>
            <NavHashLink  to="/about" title="about" aria-label="About us" className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )} >About</NavHashLink>
            <NavLink to="/menu" title="menu" aria-label="Menu" className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )}>Menu</NavLink>
            <NavLink to="/bookingpage" title="reservations" aria-label="Reservations" className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )}>Reservations</NavLink>
            <NavLink to="/order" title="order" aria-label="Order" className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )}>Order</NavLink>
            <NavLink to="/login" title="login" aria-label="Login"  className={({ isactive, isPending }) => (isPending ? 'pending': isactive ? 'active' : '' )}>Login</NavLink>
          </div>
              
          <div className='hamburger' onClick={handleMinimenu} aria-label='Toggle navigation menu' role='navigation'>
            {minimenu ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
          </div>
          
          <div><Outlet /></div>
        </div>
      </nav>
    </>
  )
}


    
export default Navbar;