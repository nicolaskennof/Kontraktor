import React, { Component } from 'react'
import { Row, Card } from "react-bootstrap"
import SingleReview from "../reviews/SingleReview"
import Price from "../microCompPrice/Price"
import "./reviews.css";
import "../../utils/helpers"
import helpers from '../../utils/helpers';
import NoContent from './NoContentDiv';

class Reviews extends Component {

    createReviews = (reviews) => {
        return reviews.map(review => {
            return (
                <SingleReview
                    key={review._id}
                    className="mini-box"
                    userReview={review.review}
                    userFirstName={review.user.fullName}>
                </SingleReview>
            )
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-12">
                                {/* BEGIN PLACEHOLDER NO RESULTADOS */}
                                <NoContent noContentMessage="Todavía no has recibido reseñas de tus clientes" noContentTeam="Tu Equipo Kontratado" />
                                {/* END PLACEHOLDER NO RESULTADOS */}
                                {this.createReviews(this.props.kontratado.reviews)}
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
                                <Card.Title>Los usuarios califican tu <b>servicio</b> de la siguiente manera:</Card.Title>
                                <Card.Text className="text-center">
                                    <span className="scoreCard">
                                        {helpers.calculateQualityRating(this.props.kontratado.qualityRates)}
                                    </span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        )
    }
}

export default Reviews;