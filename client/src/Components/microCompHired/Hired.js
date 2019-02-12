import React from "react";
import { Button, ButtonToolbar, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css"

let placement = "right"

function Hired() {
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
                <Button variant="outline-info" id="hiredBtn">
                    <i className="fas fa-hammer"></i>
                </Button>
            </OverlayTrigger>
        </ButtonToolbar>
    )
}

export default Hired

