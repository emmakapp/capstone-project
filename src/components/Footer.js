import React from 'react';
import { Link } from 'react-router-dom';
import logogreen from '../assets/logogreen.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "../css/Footer.css";
function Footer() {
    return  (
        <footer className="wrapper-bottom">
            <div id="footer-columns">
                <div className='footermenu' > <Link to='/' alt="home"><img src={logogreen} alt="Logo" /></Link>
                </div>
                
                <div className='footermenu'>
                    <p style={{ fontSize: "14pt" }}><b>Navigation</b></p>
                        <ul>
                            <li><Link to='/' title='Home page'>Home</Link></li>
                            <li><Link to='/about'title='About us'>About</Link></li>
                            <li><Link to='/menu' title='Little Lemon menu'>Menu</Link></li>
                            <li><Link to='/BookingPage' title='Reserve your table'>Reservations</Link></li>
                            <li><Link to='/order' title='Order online'>Order Online</Link></li>
                            <li><Link to='/login' title='Login'>Login</Link></li>
                        </ul>
                    </div>

                    <div className='footermenu'>
                        <p style={{ fontSize: "14pt"}}><b>Contact Us</b></p>
                        <ul>
                            <li>123 ABC Street/Pittsburgh, PA 15222</li>
                            <li>Phone: (412) 123-1234</li>
                            <li>info@littlelemon.com</li>
                        </ul>
                    </div>
                
                    <div className='footermenu'>
                        <p style={{ fontSize: "14pt"}}><b>Social Media</b></p>
                        <ul className='social' >
                            <li><a href="https://facebook.com" className="fb" title='Facebook'> <FaFacebook style={{ textAlign: "center"}}/></a> </li>
                            <li><a href="https://instagram.com" className="in" title='Instagram'><FaInstagramSquare />
                            </a> </li>
                        </ul>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;