import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './Logo .svg';
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";


import './Navbar.css';

const  Navbar = () => {
    
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return  (
        <nav className='nav'>
            <nav className='navbar'>
            <Link to='/'><img src={logo} alt="Logo" /></Link>
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link id="link_Styles" to='/'>Home</Link>
                <HashLink to="#about" id="link_Styles">About</HashLink>
                <Link id="link_Styles" to='/menu'>Menu</Link>
                <Link id="link_Styles" to='/BookingPage'>Reservations</Link>
                <Link id="link_Styles" to='/order'>Order Online</Link>
                <Link id="link_Styles" to='/login'>Login</Link>
                  
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
                  
                </div>
            </nav>
        </nav>
    );
    };

    
export default Navbar;