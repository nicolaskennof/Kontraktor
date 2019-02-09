import React, { Component } from "react";
import { Card } from "react-bootstrap"
import "./style.css"

let firstName = "Nicolas"

function WelcomeMessage() {
    return (
        <div className="welcomeMessage" align="center">
            <Card className="card-container">
                <Card.Body>
                    <Card.Title>Hola {firstName}!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">¿Qué necesitas al día de hoy?</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WelcomeMessage;