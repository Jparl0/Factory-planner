import React from "react"
// import {useNavigate} from "react-router-dom"

    function NavBar (){

        // const [navBarRoute, setNavBarRoute] = useState("");
        // const navigate = useNavigate();

        // function goToPage(e){
            // setNavBarRoute(e.target.value)
            // console.log(navBarRoute)
            // navigate(`/${navBarRoute}`)
        // }

        return (
            <div className="NavBar">
                <h3>
                    <a href="http://localhost:4000/">
                    Home Page
                    </a>
                </h3>
                <h3>
                    <a href="http://localhost:4000/Login">
                    Login
                    </a>
                </h3>
                <h3>
                    <a href="http://localhost:4000/CreatePage">
                    Create
                    </a>
                </h3>
            </div>


        )



    }

export default NavBar