import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { submitAPI } from "../../utilities/fetchAPIutil";
import { useDataContext } from '../../hooks/contextAPI';

import { ErrorMessage } from "../ErrorMessage";

import "../../css/Booking.css";

function BookingForm() {
   const { availableTimes, dispatch, formState, setFormState } = useDataContext();

   const[error, setError] = useState(true);

   useEffect(() => {
      dispatch({ type: 'UPDATE_TIMES', date: new Date() });
   }, [dispatch]);
      ;
   
   const navigate = useNavigate();


   function submitForm(formData) {
      const response = submitAPI(formData);
      if(response) {
         setError(false);
         localStorage.setItem('formDate', JSON.stringify(formData));
        navigate('/confirmation');
      } else {
    
         setError(true);
         console.log('there is an error submitting form');
      }
  }

   function handleSubmit(e) { 
         e.preventDefault();
         console.log('form submitted');
         submitForm(formState);
   };
      
   function handleDateChange(e) {
      const selectedDate = e.target.value;
      setFormState({ ...formState, date: selectedDate });
      dispatch({ type: "UPDATE_TIMES", date: selectedDate }); 
   
   };


   return (
     <form  onSubmit={handleSubmit}>


   
            <div>
               <label htmlFor="res-date">Pick a date</label>
                  <input
                     id="res-date" 
                     type="date" 
                     required
                     value={formState.date || "" }
                     onChange={handleDateChange}
                     name='res-date'
                     aria-label="Select Date"
                     
                  />
            </div>
            
            <div>
               <label htmlFor="res-time">Pick a time</label>
                  <select
                     id="res-time"
                     required
                     name='res-time'
                     aria-label='Select Time'
                     value={formState.time || "" }
                     onChange={(e) => setFormState({ ...formState, time: e.target.value})}
                  
                  >      
                
                     {availableTimes.map((time, index) => (
                        <option key={index} value={time}> {time}</option> 

                       ))}
                   </select>
              </div>
              <div>
               <label htmlFor="guests">Number of people in your party</label>
                  <input
                     id="guests" 
                     type="number"  
                     name="guests"
                     min="1"
                     max="10"
                     required
                     aria-label='Number of Guests'
                     value={formState.numberOfGuests || "1" }
                     placeholder="1"  
                     onChange={(e) => setFormState({ ...formState, numberOfGuests: e.target.value })} />
               </div>
               <div>
               <label htmlFor="booking-occasion">If applicable, pick an occasion.</label>
                  <select
                     id="booking-occasion" 
                     value={formState.occasion || "" }
                     onChange={(e) => setFormState({ ...formState, occasion: e.target.value })}
                  >
                  <option value="Select an Occasion">Select an Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
                </div>

                { error && <ErrorMessage message="There was an error submitting the form." /> }  

               <button 
                  className="booking-btn" 
                  id="submit-button" 
                  type="submit" 
                  arial-label="Reserve my table"
                  >Reserve my table
               </button>
    
      </form>
   );
};

export default BookingForm;