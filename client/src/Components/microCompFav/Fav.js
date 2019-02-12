import React from "react";
import { Button } from "react-bootstrap";
import "./style.css"
import API from "../../utils/API"

function Fav(props) {

   
   

    return (
        <Button onClick={props.addFavs(props.userId)}  data-id={props.userId} className="workerCardButton" variant={props.favClass} id="favoriteBtn"><i className="fas fa-heart"></i></Button>
    )
}

export default Fav