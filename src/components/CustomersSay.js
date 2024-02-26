import React from "react";
import { RxAvatar } from "react-icons/rx";
import womanfour from "./womanfour.jpg";
import womantwo from "./womantwo.jpg";
import manone from "./manone.jpg";
import mantwo from "./mantwo.jpg";
import "./Testimonials.css";

export default function CustomersSay () {
    return  (
      <div className="wrapper-test" >
        <div id="test">
          <h2 className="intro-test">Testimonials</h2> 
              
        <div className="box-tests">
          
        <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "center", paddingBottom: "10px" }} >Rating</p>
            <img src={manone} alt="" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>John Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>
            
          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "center", paddingBottom: "10px" }} >Rating</p>
            <img src={womantwo} /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Jane Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>

          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "center", paddingBottom: "10px" }} >Rating</p>
            <img src={mantwo} alt="photo of reviewer" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Bill Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>

          <div className="box-test"><p style={{ fontFamily: "'Markazi Text', serif", fontWeight: "bold", textAlign: "center", paddingBottom: "10px" }} >Rating</p>
            <img src={womanfour} alt="photo of reviewer" /><span style={{ fontSize: "16pt", fontWeight: "bold", verticalAlign: "middle", paddingLeft: "10px"}}>Sue Doe</span> 
            <p>Culpa cupidatat minim deserunt elit voluptate.</p>
          </div>
        
        </div>
        
        </div>
      </div>
    )
}