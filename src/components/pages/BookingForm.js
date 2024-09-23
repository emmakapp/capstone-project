import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../../utilities/fetchAPIutil';
import { ErrorMessage } from '../ErrorMessage';

import "../../css/Booking.css";

function BookingForm(props) {
   const [date, setDate] = useState("");
   const [guests, setGuests] = useState("");
   const [occasion, setOccasion] = useState("");
   const [selectedTime, setSelectedTime] = useState("");

   const [finalTime, setFinalTime] = useState([]);
   const [error, setError] = useState(false);

 


   useEffect(() => {

      setFinalTime(props.availableTimes.map((time) => <option key={time}>
         {time}
      </option>));
   }, [props.availableTimes]);
 
   function handleDateChange(e) {
      const selectedDate = new Date(e.target.value);
      setDate(e.target.value);
      props.updateTimes(selectedDate);
   };
   
   
   const navigate = useNavigate();
   async function submitForm(e) {
      e.preventDefault();
      try {
         const formData = { date, guests, occasion, time: selectedTime };
         const response = await submitAPI(formData);
         if (response) {
            setError(false);
            localStorage.setItem('formData', JSON.stringify(formData));
            navigate("/confirmation");
         } else {
            throw new Error('Submission failed');
         } 
         } catch (error) {
            setError(true);
            console.log("there is an error submitting the form", error);
         
      }
      
   }

   return (
      <>
     <form onSubmit={submitForm}>
         <div className='form-wrapper'>
            <h3 style={{ paddingBottom: "40px",textAlign:"center" }}>Please fill in the form below</h3>
               <div>
           
               <label htmlFor="res-date">Pick a date</label>
                  <input
                     id="res-date" 
                     type="date" 
                     required
                     value={date}
                     onChange={handleDateChange}
                     name='res-date'
                     aria-label="res-date"
                     
                  />
            </div>
            
            <div>
               <label htmlFor="res-time">Pick a time</label>
                  <select
                     id="res-time"
                     type="time"
                     required
                     name='res-time'
                     placeholder=''
                     aria-label='res-time'
                     value={selectedTime}
                     onChange={(e) => setSelectedTime(e.target.value)} >
 
                
                     {finalTime}
                   </select>
              </div>
              <div>
               <label htmlFor="guests">Number of Guests</label>
                  <input
                     id="guests" 
                     type="number"  
                     name="guests"
                     min="1"
                     max="10"
                     required
                     aria-label='Number of Guests'
                     value={guests}
                     placeholder=""  
                     onChange={(e) => setGuests(e.target.value)} />
               </div>
               <div>
               <label htmlFor="booking-occasion">If applicable, pick an occasion.</label>
                  <select
                     id="booking-occasion" 
                     value={occasion}
                     onChange={(e) => setOccasion(e.target.value)} 
                  >
                  <option value="Select an Occasion">Select an Occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </select>
               </div>
            { error && <ErrorMessage message="There was an error submitting this reservation" />}
         <button 
            className="booking-btn" 
            id="submit-button" 
            type="submit"  
         >Reserve my table</button>
</div>
</form>

   </>
   );
};

export default BookingForm;