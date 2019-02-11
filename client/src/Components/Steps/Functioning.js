import React from "react";
import { Jumbotron, CardGroup, Row, Col, Card } from 'react-bootstrap'
import Login from "../../img/web-log-in.png"
import Expert from "../../img/repair-expert.png"
import Chat from "../../img/chat.png"
import './style.css'


function Functioning() {
    return (
        <div>
            <Jumbotron className="jumbotronFunctioning rounded-0 text-center">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <CardGroup>
                                <Card className="border-0 text-center">
                                    <Card.Img variant="top" src={Login} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Regístrate</Card.Title>
                                        <Card.Text>
                                            Te tomará apenas unos minutos para registrarte. Para Kontratar, solo necesitas una cuenta Facebook.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Expert} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Busca tu experto</Card.Title>
                                        <Card.Text>
                                            Busca el experto que necesitas en nuestra base de datos. Seguro encontraras la persona exacta para lo que necesitas!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Chat} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Chatea</Card.Title>
                                        <Card.Text>
                                            Ponte en contacto con los expertos de tu elección para definir todos los detalles de tu próximo proyecto. ¡Exito!</Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Functioning