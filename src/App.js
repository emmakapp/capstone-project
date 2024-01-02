import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
