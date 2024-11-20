import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import BookingPage from "./pages/BookingPage";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >  
    <Route path="/bookingpage/" element={ <BookingPage /> } />

      <Route path="confirmation" element={ <Confirmation/> } />
  </Route>
  )
)



function Main() {
  return  <RouterProvider router={router} /> 
  
  }

export default Main;