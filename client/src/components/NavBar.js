import React from "react"
// import {useNavigate} from "react-router-dom"

    function NavBar ({currentUser, setCurrentUser}){

        // const [navBarRoute, setNavBarRoute] = useState("");
        // const navigate = useNavigate();

        function logUserOut(){

            fetch("/logOut", {method: "DELETE"})
            .then(r => r.json())
            .then( deleteResponse => {
                setCurrentUser(null)
            })
        }

        return (
            <div className="NavBar" id="nav-bar">
                <h3>
                    <a href="http://localhost:4000/">
                    Home Page
                    </a>
                </h3>
                <h3>
                    <a href="http://localhost:4000/MachineList">
                    Machine List
                    </a>
                </h3>
                <h3>
                    <a href="http://localhost:4000/CreatePage">
                    Create
                    </a>
                </h3>
                <h3>
                    {
                        currentUser ? 
                            
                            <a onClick={logUserOut} href="http://localhost:4000/" >
                                Logout?  
                            </a>
                            :
                            <a href="http://localhost:4000/Login">
                                Login
                            </a>

                    }
                    
                </h3>
            </div>


        )



    }

export default NavBar