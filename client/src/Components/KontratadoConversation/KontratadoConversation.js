import React from "react";
import Card from 'react-bootstrap/Card'
import ModalMessage from "../microCompMessage/ModalMessage"
import './style.css'

function KontratadoConversation(props) {
    return (
        <div className="border border-warning rounded p-2">
            <Card.Title>{props.firstName}</Card.Title>
            <Card.Text>
                {props.lastMessage}
                </Card.Text>
            <ModalMessage/>
        </div>
    )
}

export default KontratadoConversation