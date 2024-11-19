import { render, screen, act, fireEvent } from '@testing-library/react';
import  BookingForm  from './components/pages/BookingForm';
import { MemoryRouter } from 'react-router-dom';
import { Formik } from 'formik';
import userEvent from '@testing-library/user-event';


describe('BookingForm', () => {
    it('Renders BookingForm inputs correctly', () => {
       
            render(
                <MemoryRouter>
                    <Formik>
                    <BookingForm/>
                    </Formik>
                </MemoryRouter>
            );

    expect(screen.getByLabelText('Pick a date')).toBeInTheDocument();
    expect(screen.getByLabelText('Pick a time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
   
});

    

    it('submits the form with correct values', async () => {
        const onSubmit = jest.fn();
        render(
            <MemoryRouter>
                <Formik>
             <BookingForm/>
             </Formik>
            </MemoryRouter>
        );  
//    fill out form

 onSubmit({  
    date:'2024-10-31',
    time: '18:00',
    guests: '4',
    occasion: 'Birthday'});

expect(onSubmit).toHaveBeenCalledWith({
    date:'2024-10-31',
    time: '18:00',
    guests: '4',
    occasion: 'Birthday'
});
    });

});


test('Checking validation of guests input fields', async () => {
    await act(async() => {
    render(
        <MemoryRouter>
            <Formik
                initialValues={{ guests: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values?.guests) {
                        errors.guests = 'Required.';
                    }
                    return errors;
                }}
                >
                    {() => <BookingForm />}
                
            </Formik>
        </MemoryRouter>
    );
    });
});


test('Checking validation of date fields', async () => {
    await act(async() => {
    render(
        <MemoryRouter>
            <Formik
                initialValues={{ date: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values?.date) {
                        errors.date = 'Required.';
                    }
                    return errors;
                }}
                >
                    {() => <BookingForm />}
                
            </Formik>
        </MemoryRouter>
    );
    });
});

test('Checking validation of time fields', async () => {
    await act(async() => {
    render(
        <MemoryRouter>
            <Formik
                initialValues={{ time: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values?.time) {
                        errors.time = 'Required.';
                    }
                    return errors;
                }}
                >
                    {() => <BookingForm />}
            </Formik>
        </MemoryRouter>
    );
    });



});
