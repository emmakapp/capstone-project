import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Menu from "../components/pages/Menu";
import BookingPage from "../components/pages/BookingPage";
import Confirmation from "../components/pages/Confirmation";
import BookingForm from "../components/pages/BookingForm";
import Specials from "../components/Specials";
import Order from "../components/pages/Order";
import Login from "../components/pages/Login";  

export default function RootLayout()  {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/bookingform" element={<BookingForm />} />
      <Route path="/bookingpage" element={<BookingPage />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/specials"element={<Specials />} />
      <Route path="/order"element={<Order />} />
      <Route path="/login"element={<Login />} />
   </Routes>
  )
}

