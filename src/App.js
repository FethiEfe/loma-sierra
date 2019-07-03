import React from 'react';
import {BrowserRouter} from "react-router-dom"
import routes from "./components/routes"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        {routes}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
