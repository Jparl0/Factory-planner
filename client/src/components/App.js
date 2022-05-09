import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./NavBar.js";
import HomePage from "./HomePage.js";

function App() {

  useEffect(() => {
    
  })

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>  
    </BrowserRouter>

    //        {/* <Route path="/PickClass" element={}/> */}
    //        {/* <Route path="/Room6" element={<Room6/>}/>  */}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
