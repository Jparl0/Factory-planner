import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage.js";
import CreatePage from "./CreatePage.js"
import Login from "./Login.js";

function App() {

  const [factoryTree, setFactoryTree] = useState([])
  // useEffect(() => {

  // })

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/CreatePage' element={<CreatePage />} />
            <Route path='/Login' element={<Login />} />
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
