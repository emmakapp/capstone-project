import React from "react";
import womanfour from "../assets/womanfour.jpg";
import womantwo from "../assets/womantwo.jpg";
import manone from "../assets/manone.jpg";
import mantwo from "../assets/mantwo.jpg";
import "../css/Testimonials.css";

export default function CustomersSay () {
    return  (
      <div className="wrapper-test" >
        <div id="test">
          <h2 className="intro-test">Testimonials</h2> 
              
        <div className="box-tests">
          
        <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "left", paddingBottom: "10px" }} >Rating</p>
            <img src={manone} alt="reviewer1" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>John Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>
            
          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "left", paddingBottom: "10px" }} >Rating</p>
            <img src={womantwo} alt="reviewer2" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Jane Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>

          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "left", paddingBottom: "10px" }} >Rating</p>
            <img src={mantwo} alt="reviewer3" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Bill Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>

          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "left", paddingBottom: "10px" }} >Rating</p>
            <img src={womanfour} alt="reviewer4" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Sue Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>
        
        </div>
        
        </div>
      </div>
    )
}