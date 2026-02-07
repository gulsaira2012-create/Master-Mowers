import React from "react";
import { useNavigate } from 'react-router-dom';
import "../style/getInTouch.css"

export default function GetInTouch(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/contactUs');
    };
  
    return(
        <div className="scrolling">
            <div className="scrollingContent">
                <p>Trusted mower repairs in Brisbane</p>
                <h1>From “won’t start” to “runs like new</h1>
                <button className="Scrolling-cta-button"onClick={handleClick}>Get a Free Quote</button>
            </div>
        </div>
    )
    
}