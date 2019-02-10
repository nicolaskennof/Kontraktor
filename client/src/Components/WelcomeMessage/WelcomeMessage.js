import React from "react";
import { Card } from "react-bootstrap"
import "./style.css"

let firstName = "Nicolas"

function WelcomeMessage() {
    return (
        <div className="welcomeMessage text-center mt-5">
            <h5 className="bannerTitle"><span className="darkTextBackground rounded">¡Hola {firstName}!</span></h5>
            <p className="bannerText"><span className="darkTextBackground rounded">¿Qué necesitas al dia de hoy??</span></p>
        </div>
    )
}

export default WelcomeMessage;