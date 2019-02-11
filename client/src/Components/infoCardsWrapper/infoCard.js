import React from "react";
import Card from 'react-bootstrap/Card'
import './style.css'

function InfoCard(props) {
    return (

        <Card className="bg-light text-white">
            <Card.Img className='loginImage fluid' src={props.image} alt="Card image" />
            <Card.ImgOverlay className="cardText">
                <Card.Title className="bannerText darkTextBackground rounded">{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>

            </Card.ImgOverlay>
        </Card>
    )
}
export default InfoCard;