import React from 'react';
import {BrowserRouter} from "react-router-dom"
import routes from "./components/routes"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
