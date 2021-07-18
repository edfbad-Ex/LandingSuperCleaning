import React from "react";

import "./App.css";
import NavBar from './Components/Js/NavBar';
import SimpleSlider from "./Components/Js/Carousel";
import Promotion from "./Components/Js/Promotion";
import Services from "./Components/Js/Services";
import Contact from "./Components/Js/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <SimpleSlider />

        <div className="Services-Title">
          <span>Promoción:</span>
        </div>
        <Promotion />
        
        <div className="Services-Title">
          <span>Servicios:</span>
        </div>
        <Services />

        <div className="Services-Title">
          <span>Contacto:</span>
        </div>
        <Contact />
        

      </header>
    </div>
  );
}

export default App;
