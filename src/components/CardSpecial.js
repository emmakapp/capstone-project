import React from "react";
import { BiCycling } from "react-icons/bi";

const CardSpecial = ({ title, price, description, imageSrc }) => {

    return (
        <div className="wrapper-cardspecial" >
            <img className="card-image" src={imageSrc} alt={title} style={{ 
            height: "260px", objectFit: "cover", position: "relative", 
            overflow: "hidden", cursor: "pointer", paddingBottom: "20px",
            borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}/>  
        
            <div className="card-content">
                <div className="specialtitle" >
                    <span className="cardtitle" style={{ fontFamily: "'Karla', sans-serif", fontSize: "18pt", fontWeight: "700" }}>{title}</span>
                    <span className="price" style={{ display: "flex", fontFamily: "'Karla', sans-serif", verticalAlign: "text-top", 
                    fontSize: "14pt", fontWeight: "700", color: "#EE9972" }}>{price}</span>
                </div>
                <div className="specialmaincard">
                    <p style={{ paddingTop: "10px", paddingBottom: "10px" }}>{description}</p>
                </div>
                <div className="specialfooter">
                    <span className="cardfooter" style={{ fontFamily: "'Karla', sans-serif", fontSize: "16pt", fontWeight: "500" }} >
                     Order a delivery</span>
                        <a href="./order" alt="order" title="order">
                            <span className="bicycleicon">
                                <BiCycling className="bicycleicon" style={{ fontSize: "2rem", textAlign: "right", verticalAlign: "text-bottom"  }}/>
                            </span>
                        </a> 
                </div>
            </div>        
        </div>
    );
};

export default CardSpecial;
