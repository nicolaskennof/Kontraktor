import React from "react";
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css"
import API from '../../utils/API'

let placement = "right"


function handleHireAdd({hireId,kontratadoId,userId, updateUser}){
    if (hireId){
        API.deleteHire(hireId)
            .then(deleted=>{
                API.getUserById(userId)
                    .then(result=>{
                        updateUser(result.data)
                    })
            })
    } else {
        const hireObject = {
            kontratado : kontratadoId,
            user : userId
        }

        API.insertHire(hireObject)
            .then(inserted=>{
                API.getUserById(userId)
                    .then(result=>{
                        updateUser(result.data)
                    })
            })
    }
}


function Hired(props) {
    return (
        <ButtonToolbar>
            <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                    <Tooltip id="hiredTooltip">
                        Marcar como <strong>Kontratado</strong>.
                    </Tooltip>
                }
            >
                <Button className="workerCardButton" onClick={()=>handleHireAdd(props)} variant={props.hireId?"outline-info":"info"}>
                    <i className="fas fa-hammer"></i>
                </Button>
            </OverlayTrigger>
        </ButtonToolbar>
    )
}

export default Hired

