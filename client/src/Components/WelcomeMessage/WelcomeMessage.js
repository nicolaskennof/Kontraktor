import React from "react";
import "./style.css"

function WelcomeMessage(props) {
    return (
        <div className="welcomeMessage text-center mt-5">
            <h5 className="bannerTitle"><span className="darkTextBackground rounded">¡Hola {props.firstName}!</span></h5>
            <p className="bannerText"><span className="darkTextBackground rounded">¿Qué necesitas al dia de hoy??</span></p>
        </div>
    )
}

export default WelcomeMessage;