import React from "react";
import greeksalad from "./greeksalad.png";
import bruschetta from "./bruschetta.png";
import lemondessert from "./lemondessert.png";
import { BiCycling } from "react-icons/bi";


import "./Main.css";



function Main () {
    return  (

     <div className="wrapper-main">
            <section id="welcome">
     
                
                <h2>This week's specials</h2>
                 
                 <button type="button" style={{ backgroundColor: "#F4CE17", padding: "12px 24px", marginTop:"20px", marginBottom:"20px" }} >Online Menu</button>
          </section>

 
        <section id="cards">
            <article id="card">
                <picture className="thumbnail">
                    <img src={greeksalad} alt="greek salad" /> 
                </picture>
                <div className="card-content">
                    <h3>Greek Salad <span style={{ color: "#EE9972", textAlign: "right" }}>  $12.99 </span></h3>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our 
                        Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                <div className="delivery" ><span><b>Order a delivery</b></span>  <BiCycling className="bicycleicon" style={{ verticalAlign: "text-bottom", paddingLeft:"5px", alignItems: "flex-end"}}  />
                        </div>
            </article>
            
            <article id="card">
                <picture className="thumbnail">
                    <img src={bruschetta} alt="bruschetta" />
                </picture>
                <div className="card-content"> 
                    <h3>Bruschetta<span style={{ color: "#EE9972", textAlign: "end" }}>  $5.99 </span></h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className="delivery" ><span><b>Order a delivery</b></span>  <BiCycling className="bicycleicon" style={{ verticalAlign: "text-bottom", paddingLeft:"5px", alignItems: "flex-end"}}  />
                        </div>
            </article>
           
            <article id="card">
                <picture className="thumbnail">
                    <img src={lemondessert} alt='lemon dessert'/>
                    </picture>
                <div className="card-content"> 
                    <h3>Lemon Dessert<span style={{ color: "#EE9972", textAlign: "right" }}>  $7.99 </span></h3>
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                <div className="delivery"  ><span ><b>Order a delivery</b></span>  <BiCycling className="bicycleicon" style={{ verticalAlign: "text-bottom", paddingLeft:"5px", alignItems: "flex-end"}}  />
                        </div>
            </article>
        </section>


      </div>
    )
}

export default Main;