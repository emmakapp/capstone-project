import React from "react";
import { Outlet } from "react-router-dom";


import { useReducer, useEffect } from "react";
import { fetchAPI } from "../../utilities/fetchAPIutil";

import BookingForm from "./BookingForm";

export default function BookingPage() {

  const initialState = [];

   function updateTimes(state, action) {
   switch (action.type) {
    case "SET TIMES":
      return action.payload;
    default:
      return state;
   }
  }


  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
 

   useEffect(() => {
    async function initializeTimes() {
      try {
      const time = await fetchAPI(new Date());
      dispatch({ type: "SET TIMES", payload: time});
    } catch (error) {
      console.log("error fetching initial times:", error);
    }
     }
     initializeTimes();
   }, []);
  
   const initializeTimes = async (date) => {
    try { 
    const time = await fetchAPI(date);
    dispatch({ type: "SET TIMES", payload: time });
    } catch (error) {
      console.log("error fetching times for selected date:", error);
    }
  };

  return  (
      <div>
        <div className="booking-wrapper" >
          <section id="bookingform-section">
            <div className="booking-title"></div>
         
            <div className="booking-description">
                <h2 style={{ textAlign: "center", paddingTop: "20px" }}>Reserve your table</h2>
                 <BookingForm availableTimes={availableTimes} updateTimes={initializeTimes}/>
                  <Outlet />
            </div> 
          </section>
        </div>
        </div>
    )
};

