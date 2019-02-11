import React from "react";
import { Button } from "react-bootstrap";
import "./style.css"

function Fav() {
    return (
        <Button className="workerCardButton" variant="info" id="hiredBtn"><i className="fas fa-hammer"></i></Button>
    )
}

export default Fav