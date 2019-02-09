import React from "react";
import Card from 'react-bootstrap/Card'

function KMessages(props) {
    return (

        <Card className="bg-light">

            <Card.Title>{props.user}</Card.Title>
            <Card.Text>
                {props.text}
            </Card.Text>

        </Card>
    )
}
export default KMessages;