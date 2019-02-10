import React from "react";
import { Jumbotron, CardGroup, Row, Col, Card } from 'react-bootstrap'
import ModalQuienes from "../microCompQuienes/ModalQuienes"
import ModalPorque from "../microCompPorque/ModalPorque"
import ModalExito from "../microCompExito/ModalExito"
import Company from "../../img/enterprise.png"
import Question from "../../img/help.png"
import Success from "../../img/success.png"
import './style.css'


function ThisIsKontratado() {
    return (
        <div>
            <Jumbotron className="jumbotronFunctioning rounded-0 text-center">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <CardGroup>
                                <Card className="border-0 text-center">
                                    <Card.Img variant="top" src={Company} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>¿Quiénes somos?</Card.Title>
                                        <Card.Text>
                                            ¿De dónde venimos y cual es nuestra visión?
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <ModalQuienes />
                                    </Card.Footer>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Question} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>¿Porqué Kontratado?</Card.Title>
                                        <Card.Text>
                                            ¡Kontrata a los mejores expertos para que hagan el trabajo!
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <ModalPorque />
                                    </Card.Footer>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Success} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Historías de éxito</Card.Title>
                                        <Card.Text>
                                            ¡Más de 5 mil usuarios tan solo en la ciudad de México!
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <ModalExito />
                                    </Card.Footer>
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

export default ThisIsKontratado