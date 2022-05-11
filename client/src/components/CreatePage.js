import React from 'react'
import NavBar from "./NavBar.js"

function CreatePage() {



  
  return (

    <div>

      <header>
        <h1>
          CreatePage
        </h1>
        <div>
          <NavBar/>
        </div>

      </header>
      <div>

      </div>
      <div>
        <form>
          <label >Data 1</label>
          <input type="text" id="fname" name="fname"></input>
          <label >Data 2</label>
          <input type="text" id="lname" name="lname"></input>
        </form>
      </div>
      
      
      
    </div>
  
  
  
  
  )

}

export default CreatePage