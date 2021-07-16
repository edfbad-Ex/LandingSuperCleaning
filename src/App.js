import React from "react";

import "./App.css";
import NavBar from './Components/Js/NavBar';
import SimpleSlider from "./Components/Js/Carousel";
import Promotion from "./Components/Js/Promotion";
import Services from "./Components/Js/Services";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <SimpleSlider />
        <Promotion />
        
        <div className="Services-Title">
          <span>Servicios:</span>
        </div>
        <Services />
        

      </header>
    </div>
  );
}

export default App;
