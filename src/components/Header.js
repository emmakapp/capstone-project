import React from "react";
import { Link } from "react-router-dom";

import restaurantfood from '../assets/restaurantfood.png';
import '../css/Header.css';
 
export default function Header () {
    return  (
        <div className="wrapper-header" >
            <section id="hero" >
              
               <div className="intro">
                    <h1>Little Lemon</h1>
                    <h2>Pittsburgh</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
               
                <div className="herobutton" type="button" >
                    <Link to="/bookingpage"> <button aria-label="On Click" type="button">Reserve a Table</button> </Link>
                </div></div>
          
                <div className="headerimage">
                    <img src={restaurantfood}  alt="restaurant server" /> 
                </div>
           
            </section>
        </div>
    )
}

