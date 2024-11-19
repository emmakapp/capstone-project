import React from "react";
import CardSpecial from "./CardSpecial";
import { useNavigate } from "react-router-dom";

import "../css/Specials.css"


const specials = [
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "$12.99",
        getImageSrc: () => require("../assets/greeksalad.png"),
    },

    {
        title: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        getImageSrc: () => require("../assets/bruschetta.png"),
    },

    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$7.99",
        getImageSrc: () => require("../assets/lemondessert.png"),
    },


];

const Specials = () => {
    const navigate = useNavigate();
    const navigateToMenu = () =>
    {
        navigate('/menu');
    }
    return (
        <div className="cardspecials">
          
                <div className="welcome" >
                    <h2>This week's specials</h2>
                        <button type="button" aria-label="On Click goes to menu page" className="booking-backbutton"style={{ width: "200px", marginTop: "20px" }} onClick={navigateToMenu}>Online menu</button>
                    </div>
                <div className="cards">
                    <div id="card">
                        {specials.map((special) => (
                            <CardSpecial
                            key={special.title}
                            title={special.title}
                            description={special.description}
                            price={special.price}
                            imageSrc={special.getImageSrc()}
                            />
                        ))} 
                    </div>
        </div>
</div>
);
};

export default Specials