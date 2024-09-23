import React from "react";

function Confirmation() {
    

   return  (
<div id="confirmationwrapper">
<h2>Confirmation Page</h2>
<p>Thank you for reserving a table at the Little Lemon Restaurant. Your 
    reservation details are below.</p>
    <br></br>
    <div>
        <p> Date: {" "} {JSON.parse(localStorage.getItem("formData")).date}
        </p>
    
        <p> Time: {" "} {JSON.parse(localStorage.getItem("formData")).time}</p>
        
        <p> Guests: {" "} {JSON.parse(localStorage.getItem("formData")).guests}</p>
        
        <p> Occasion: {" "} {JSON.parse(localStorage.getItem("formData")).occasion}</p>
    </div>
</div>
    );
};

export default Confirmation;