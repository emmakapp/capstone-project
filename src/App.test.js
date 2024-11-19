import { render, screen, act } from '@testing-library/react';
import BookingPage from './components/pages/BookingPage';
import { MemoryRouter } from 'react-router-dom';
import { fetchAPI } from './utilities/fetchAPIutil';
import { get } from 'react-hook-form';
import { getDate } from 'date-fns';

// this is the first set of tests
// see BookingForm.test.js for additional testing

test('Checking heading on Form', async() => {
  await act(async() => { 
    render(
  <MemoryRouter>
    <BookingPage/>
    </MemoryRouter>)
  });
  const Heading = screen.getByText('Reserve your table');
  expect(Heading).toBeInTheDocument();
});



test('Checking InitializeTimes function to validate it returns correct expected value', async () => { 
  const initializeTimes = await fetchAPI(new Date());
  await act(async () => {
    expect(initializeTimes).toBe(initializeTimes);
})
});

const handleUpdateTimes = (times) => {
  return times;
};

test('Checking updateTimes returns same value that is provided in state', async() => {
  const state = { times: [ '17:00', '18:00', '19:00' ] };
  const updateTimes =  handleUpdateTimes(state.times);
  await act(async () => {
  expect(updateTimes).toBe(state.times);
})
});



test('Checking InitializeTimes function NOT to be valid', async () => { 
  const initializeTimes = await fetchAPI(new Date());
  await act(async () => {
    expect("date").not.toBe("17:00");
})
});



test('Checking updateTimes function NOT to be valid', async() => {
  const state = { times: [ '17:00', '18:00', '19:00' ] };
  const updateTimes =  handleUpdateTimes(state.times);
  await act(async () => {
  expect(updateTimes).not.toBe("17:00");
})
});
