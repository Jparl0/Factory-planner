import React, {useState} from "react";
import FactoryTree from "./FactoryTree";
import NavBar from "./NavBar.js";

    function HomePage (){


        const [factoryTree, setFactoryTree] = useState([])


        return (

            <div className="main-page">
                <header className="header">
                    <h1>Satis-factory Planner</h1>
                    <div><NavBar/></div>
                </header>                 
                
                <div>
                    <FactoryTree/>
                </div>

            </div>


        )



    }



export default HomePage