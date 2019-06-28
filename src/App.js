import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Collections from "./components/Collections/Collections"
import About from "./components/AboutUs/About"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Collections />
      <About />
      <Contact />
    </div>
  );
}

export default App;
