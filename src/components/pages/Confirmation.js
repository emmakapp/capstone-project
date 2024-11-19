import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Booking.css";


function Confirmation() {
    const navigate = useNavigate();
    const navigateToLogin  = () =>
    {
        navigate('/login');
    }

   return  (
<div id="confirmationwrapper">
<h2 style={{ paddingBottom: "20px"}}>Confirmation Page</h2>
<p style={{ paddingBottom: "20px"}}>Thank you for reserving a table at the Little Lemon Restaurant. Your 
    reservation details are below.</p>
    <p style={{ paddingBottom: "20px"}}>
    
    Please confirm your details by clicking Login below, where you can continue your registration as a guest or a registered user.</p>
  
    <div>
        <p> Date: {" "} {JSON.parse(localStorage.getItem("formData")).date}
        </p>
    
        <p> Time: {" "} {JSON.parse(localStorage.getItem("formData")).time}</p>
        
        <p> Guests: {" "} {JSON.parse(localStorage.getItem("formData")).guests}</p>
        
        <p> Occasion: {" "} {JSON.parse(localStorage.getItem("formData")).occasion}</p>
    </div>
    
    <button className="booking-backbutton"style={{ width: "200px", marginTop: "20px" }} aria-label="On Click goes to login page" onClick={navigateToLogin}>Login</button>
    <button className="booking-backbutton"style={{ width: "200px", marginTop: "20px" }} aria-label="On Click goes back to reservation page"onClick={() => navigate(-1)}>Go back</button>
</div>
    );
};

export default Confirmation;