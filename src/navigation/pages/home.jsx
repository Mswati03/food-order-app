import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate = useNavigate();
return(

    <body  id="body">
       <div id="container">
            <p id="instanteats">Instant Eats</p>
                
                <center><img id="img" src="/burger.png" alt="img"/></center>
                <center><button class="learn-more" onClick={() => navigate("/sign-up")}>
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Get Started
                    </span>
                        </button>
                </center>
       </div>
    </body>
    );
}

export default Home;