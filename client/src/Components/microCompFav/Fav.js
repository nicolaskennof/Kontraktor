import React from "react";
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css"
import API from "../../utils/API"

let placement = "right"

function Fav(props) {

    
    return (
        <ButtonToolbar>
        <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
                <Tooltip id="favTooltip">
                    Añadir a tu lista de <strong>Favoritos</strong>.
                </Tooltip>
            }
        >
            <Button onClick={props.addFavs} data-id={props.userId} className="workerCardButton" variant="danger" id="favoriteBtn"><i className="fas fa-heart"></i>
            </Button>
        </OverlayTrigger>
    </ButtonToolbar>
    )
}

export default Fav