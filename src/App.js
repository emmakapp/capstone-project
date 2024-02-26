import { Routes, Route } from  'react-router-dom';
import './app.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import CustomersSay from './components/CustomersSay';
import About from './components/About';
import Footer from './components/Footer';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Login from './components/Login';
import Order from './components/Order';

const App = () => {
  return (
    
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components/About' element={<About />} />
          <Route path='/components/Menu' element={<Menu />} />
          <Route path='/components/BookingPage' element={<BookingPage />} />
          <Route path='/components/Order' element={<Order />} />
          <Route path='/components/Login' element={<Login />} />

        </Routes>
        <Header />
        <Main />
        <CustomersSay />
        <About />
        <Footer />
      </>
   
  );
}

export default App;
