import { Route, Routes } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";
import BookingPage from "./pages/BookingPage";

function Main() {

  return  (
      <main>

        <Routes>
         

          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/bookingpage" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
          <Route path="/confirmation" element={<Confirmation />} />  
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
                 </Routes>
            
            
      </main>
    );
};

export default Main;