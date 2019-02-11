import React from "react";
import Card from 'react-bootstrap/Card'
import './style.css'

function KStatsCard(props) {
    return (
        <div>
            <Card className="bg-warning cardStat">
                <Card.Header><h4>{props.header}</h4></Card.Header>
                <Card.Body className="bg-light">
                    <Card.Title><h5><b>{props.title}</b></h5></Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </div >
    )
}

export default KStatsCard;