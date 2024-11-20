import React from "react";

import RootLayout from "./layouts/RootLayout";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <RootLayout />
      <Footer />
    </>
  )
}

export default App;
