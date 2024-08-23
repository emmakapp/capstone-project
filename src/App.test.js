import { fireEvent, render, screen } from '@testing-library/react';
import { BookingForm } from './components/pages/BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});




test('initializeTimes is updating'), () => {
  

}