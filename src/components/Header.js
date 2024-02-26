import React from "react";

import restaurantfood from './restaurantfood.png';

import './Header.css';
 

export default function Header () {
    return  (
        <div className="wrapper-header" >
            <section id="hero" >
              
               <div className="intro">
                    <h1>Little Lemon</h1>
                    <h2>Pittsburgh</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
               
                <button className="herobutton" type="button" style={{ backgroundColor: "#F4CE17", padding: "12px 24px", marginTop:"20px", marginBottom:"20px" }}>Reserve a Table</button>
                </div>
          
                <div className="headerimage">
                    <img src={restaurantfood}  alt="restaurant server" /> 
                </div>
           
            </section>
        </div>
    )
}

