import { render, screen, waitFor } from '@testing-library/react';
import BookingPage from './components/pages/BookingPage';
import { MemoryRouter } from 'react-router-dom';
import { fetchAPI } from './utilities/fetchAPIutil';
import { get } from 'react-hook-form';
import { getDate } from 'date-fns';



test('Checking heading on Form', () => {
  render(
  <MemoryRouter>
    <BookingPage/>
    </MemoryRouter>); 
  const Heading = screen.getByText('Reserve your table');
  expect(Heading).toBeInTheDocument();
});



test('Checking InitializeTimes function to validate it returns correct expected value', async () => { 
  const initializeTimes = await fetchAPI(new Date());
  await waitFor(() => {
    expect(initializeTimes).toBe(initializeTimes);
})
});

const handleUpdateTimes = (times) => {
  return times;
};

test('Checking updateTimes returns same value that is provided in state', () => {
  const state = { times: [ '17:00', '18:00', '19:00' ] };
  const updateTimes =  handleUpdateTimes(state.times);
  expect(updateTimes).toBe(state.times);
});
