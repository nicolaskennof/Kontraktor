import React from "react";
import Card from 'react-bootstrap/Card'
import './style.css'

function KStatsCard(props) {
    return (
        <div>
            <Card className="bg-warning cardStat">
                <Card.Header>{props.header}</Card.Header>
                <Card.Body className="bg-light">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}
export default KStatsCard;