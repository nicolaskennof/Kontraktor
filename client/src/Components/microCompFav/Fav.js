import React from "react";
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css"
import API from "../../utils/API"

let placement = "right"

function handleFavoriteAdd({favouriteId,kontratadoId,userId, updateUser}){
    if (favouriteId){
        API.deleteFavourite(favouriteId)
            .then(deleted=>{
                API.getUserById(userId)
                    .then(result=>{
                        updateUser(result.data)
                    })
            })
    } else {
        const favouriteObject = {
            kontratado : kontratadoId,
            user : userId
        }

        API.insertFavourite(favouriteObject)
            .then(inserted=>{
                API.getUserById(userId)
                    .then(result=>{
                        updateUser(result.data)
                    })
            })
    }
}

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
            <Button onClick={()=>handleFavoriteAdd(props)} 
                variant={props.favouriteId?"danger":"outline-danger"}
                ><i className="fas fa-heart"></i>
            </Button>
        </OverlayTrigger>
    </ButtonToolbar>
    )
}

export default Fav