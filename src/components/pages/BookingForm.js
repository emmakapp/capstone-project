
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import parse from "date-fns/parse"
import { useNavigate } from 'react-router-dom';
import "../../css/Booking.css";

function BookingForm(props) {
      const navigate = useNavigate();
   
      return (
   <Formik 
      initialValues={{ date: '', time: '', guests: '', occasion: '' }}
      validationSchema={Yup.object({
         date: Yup.date().transform(function (value, originalValue) {
             if (this.isType(value)) {
                 return value;
             }
             const result = parse(originalValue, "dd.MM.yyyy", new Date());
             return result;
            }).typeError("Please enter a valid date").required('Required').min("2024-11-24", "Date has passed"),
         time: Yup.string().oneOf(["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"], 'Invalid time')
            .required('Required'),
         guests: Yup.number().min(1,'Must have at least 1 guest')
            .max(10, 'If you have more than 10 guests, please call us at 412-123-1234.')
            .required('Required.'),
         occasion: Yup.string()
            .notRequired(),
      })}
      onSubmit={(values, { setSubmitting }) => {
         localStorage.setItem('formData', JSON.stringify(values));
         navigate("/confirmation");
         setSubmitting(false);
         }}
           >
{({ isSubmitting, errors, touched }) => (



     <Form>
         <div className='form-wrapper'>
            <h3 style={{ paddingBottom: "40px",textAlign:"center" }}>Please fill in the form below</h3>
               <div className='formgroup'>
           
               <label htmlFor="Pick a date">Pick a date</label>
                  <Field
                     id="Pick a date" 
                     type="date" 
                     required
                     min="2024-10-24" 
                     name='date'
                     aria-label="date"
                     alt="Pick a date"
                     placeholder="Pick a date"
                  />
                  {errors.date && touched.date ? ( <div role="alert" className='error'>{errors.date}</div> ) : null }
               </div>
            
               <div className='formgroup'>
               <label htmlFor="time">Pick a time</label>
                  <Field as="select"
                     id="time"
                     name='time'
                     aria-label='time'
                     placeholder="Enter a time"
                      alt="Enter a time"
                     required
                   >
                     {props.availableTimes?.map((time) => (
                        <option key={time} value={time}>
                   {time}
                </option>
                ))}
                  </Field>
                   {errors.time && touched.time ? ( <div role="alert" className='error'>{errors.time}</div> ) : null }   

              </div>
              <div className='formgroup'>
               <label htmlFor="guests">Number of Guests</label>
                  <Field
                     id="guests" 
                     name="guests"
                     min="1"
                     max="10"
                     aria-label="guests"
                     alt="Number of Guests"
                     required=""
                     placeholder="example: 2"
                      />
               {errors.guests && touched.guests ? ( <div role='alert' className='error'>{errors.guests}</div> ) : null }   
               </div>
               
               <div className='formgroup'>
               <label htmlFor="occasion">Occasion</label>
                  <Field as="select"
                     id="occasion" 
                     alt="Select an Occasion"
                     name="occasion"
                    aria-label="Select an Occasion"
                    placeholder="optional"
                  >
                 <option defaultValue>optional</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Engagement">Engagement</option>
                </Field>
               </div>
         <button
 
            className="booking-btn" 
            name='button'
            alt="Submit button"
            type="submit"  
            disabled={isSubmitting}  // disable button if form is submitting
         >Submit</button>
   </div>
   </Form>
   )}
      </Formik>
   );
};

export default BookingForm;