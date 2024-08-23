import React from "react";
import { NavHashLink } from "react-router-hash-link";
import marioadriana from "../../assets/MarioAdriana.jpg";
import marioadrianb from "../../assets/MarioAdrianb.jpg";
import "../../css/About.css";

export default function About () {
    return  (
      <NavHashLink id="about"
      activeClassName="selected">

        <div className="wrapper-about">
          <div className="title-about">
            <h1>Little Lemon</h1>
            <h2>Pittsburgh</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>

          <div className="aboutimage">
            <div className="flex-item item1"><img src={marioadriana}  alt="Mario and Adrian" /> </div>
            <div className="flex-item item2"><img src={marioadrianb}  alt="Mario and Adrian" /> </div>
          </div>
        </div>
      </NavHashLink>
    );
};