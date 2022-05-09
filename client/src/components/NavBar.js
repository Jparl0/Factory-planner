import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import HomePage from './HomePage'
import CreatePage from './CreatePage'


    function NavBar (){


        return (
            <BrowserRouter>
              <Routes>
                  <Route path='/home' element={<HomePage />} />
                  <Route path='/create' element={<CreatePage />} />

              </Routes>  
            </BrowserRouter>


        )



    }



export default NavBar