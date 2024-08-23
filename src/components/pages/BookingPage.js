import React from "react";

import BookingForm from "./BookingForm";

const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return  (
        <div className="booking-wrapper" >
          <section id="bookingform-section">
            <div className="booking-title">
                <h2 style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px"}}>Reserve your table</h2>
            </div>
            <div className="booking-description">
                 <BookingForm dispatch={dispatch} submitForm={submitForm} />
            </div> 
          </section>
        </div>
     
    )
};

export default BookingPage;