import React from 'react';
import logo from './Logo .svg';


function Footer() {
    return  (
      <ul>
            <li><img src={logo} alt="Logo" /></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order_online">Order Online</a></li>
                <li><a href="login">Login</a></li>
</ul>

    )
}


export default Footer;