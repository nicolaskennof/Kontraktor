import React from "react"
import { Container, Card } from "react-bootstrap"
import KontratadoConversation from "../KontratadoConversation/KontratadoConversation"
import "./style.css"

function KontratadoKonversationsWrapper() {
    return (
        <Card>
            <Card.Header as="h5"><i className="fas fa-comments"> Tus ultimas conversaciones</i></Card.Header>
            <Card.Body>
                <KontratadoConversation firstName="Nicolas" lastMessage="¿Cuanto costaría amigo?"/>
            </Card.Body>
        </Card>
    )
}

export default KontratadoKonversationsWrapper