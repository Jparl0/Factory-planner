import React from 'react'
import NavBar from "./NavBar.js"
import {useNavigate} from "react-router-dom"

function Login() {

    const navigate = useNavigate();

    function goToHome(e){
        if (e !== null) {
            navigate(`/`)
        }
        else {
        e.preventDefault();
        alert("Incorrect Login Credtials. Please try again")
        }
        }

  return (

    <div>
        <header>
            <h1>
                Login
            </h1>
            <div>
                <NavBar/>
            </div>
        </header>
        
        <div>
            <form onSubmit={goToHome}>
                <label >User Name</label>
                <input type="text" id="usernam" name="username"></input>
                <label >Password</label>
                <input type="text" id="password" name="password"></input>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div>
    </div>


  )
}

export default Login