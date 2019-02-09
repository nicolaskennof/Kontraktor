import React from "react";
import { Button } from "react-bootstrap";
import "./style.css"

function Fav() {
    return (
        <Button className="workerCardButton" variant="danger" id="favoriteBtn"><i className="fas fa-heart"></i></Button>
    )
}

export default Fav