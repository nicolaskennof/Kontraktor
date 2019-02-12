import React from "react";
import { Row, Col } from 'react-bootstrap'
import ModalMessage from "../microCompMessage/ModalMessage"
import './style.css'

function KontratadoConversation(props) {
    return (

        <blockquote class="quote-card">
            <Row>
                <Col md={2} className="m-0 p-0 text-center"><img className="imgContainer" alt="facebook-pic" src={props.userFacebookPic} /></Col>
                <Col md={6}>
                    <p>
                        {props.userLastMessage}
                    </p>
                    <br />
                    <div className="d-inline"><span id="messageCardSender"><b>Recibido de: </b></span></div>
                    <cite className="d-inline">
                        {props.fullName}
                    </cite>
                </Col>
                <Col md={4}>
                    <br />
                    <div className="d-inline"><ModalMessage
                        kontratadoUpdate={props.kontratadoUpdate}
                        isKontratado={true}
                        fullName={props.fullName}
                        userMessages={props.userMessages}
                        kontratadoImage={props.kontratadoImage}
                        kontratadoId={props.kontratadoId}
                        userId={props.userId}
                    />
                    </div>
                </Col>
            </Row>
        </blockquote>
    )
}

export default KontratadoConversation