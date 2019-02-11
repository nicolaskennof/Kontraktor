import React, { Component } from 'react'
import { Row, Col, Card, Button } from "react-bootstrap"
import SingleReview from "../reviews/SingleReview"
import Price from "../microCompPrice/Price"
import "./style.css";

function Reviews() {

    return (
        <div>
            <Row>
                <div className="col-8">
                    <div className="row">
                        <div className="col-12"><SingleReview className="mini-box" userReview="Muchas gracias a Froy! Arregló mi tubo en un fracción de segundo" userFirstName="Jorge"></SingleReview>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <Card>
                        <Card.Header as="h5">Tu costo promedio</Card.Header>
                        <Card.Body>
                            <Card.Title>Los usuarios califican tu <b>costo</b> de la siguiente manera:</Card.Title>
                            <Card.Text className="text-center">
                                <span className="scoreCard"><Price /></span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header as="h5">Tu calificación promedia</Card.Header>
                        <Card.Body>
                            <Card.Title>Los usuarios califican <b>servicio</b> de la siguiente manera:</Card.Title>
                            <Card.Text className="text-center">
                                <span className="scoreCard">4.5</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </div>
    )
}

export default Reviews;