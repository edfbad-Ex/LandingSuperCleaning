import React from "react";

import "./App.css";
import NavBar from './Components/Js/NavBar';
import SimpleSlider from "./Components/Js/Carousel";
import Promotion from "./Components/Js/Promotion";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <SimpleSlider />
        <Promotion />

      </header>
    </div>
  );
}

export default App;
