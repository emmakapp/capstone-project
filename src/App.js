import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


import Home from './components/pages/Home';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import BookingPage from './components/pages/BookingPage';
import Confirmation from './components/pages/Confirmation';
import Order from './components/pages/Order';
import Login from './components/pages/Login';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element= {<Home />} />
     <Route path= 'about' element={<About />}  />
     <Route path= 'menu' element={<Menu />}  />
     <Route path= 'bookingpage' element={<BookingPage />}  /> 
     <Route path= 'confirmation' element={<Confirmation />}  />  
     <Route path= 'order' element={<Order />}  />
     <Route path= 'login' element={<Login />}  />
 </Route>
)
);


function App() {
  return (
    <RouterProvider router={router} />
 
  );
}

export default App;
