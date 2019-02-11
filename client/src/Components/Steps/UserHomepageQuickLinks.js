import React from "react";
import { Jumbotron, CardGroup, Row, Col, Card } from 'react-bootstrap'
import ModalQuienes from "../microCompQuienes/ModalQuienes"
import ModalPorque from "../microCompPorque/ModalPorque"
import ModalExito from "../microCompExito/ModalExito"
import Like from "../../img/like.png"
import Chat from "../../img/chat.png"
import './style.css'


function UserHomepageQuickLinks() {
    return (
        <div>
            <Jumbotron className="jumbotronFunctioning rounded-0 text-center">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <CardGroup>
                                <Card className="border-0 text-center">
                                    <Card.Img variant="top" src={Like} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Tus favortos</Card.Title>
                                        <Card.Text>
                                            Pica el botón de corazón para agregar los expertos que más te convienen a tu lista de favoritos
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <ModalQuienes />
                                    </Card.Footer>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Chat} className="imgFunctioning"/>
                                    <Card.Body>
                                        <Card.Title>Tus conversaciones</Card.Title>
                                        <Card.Text>
                                            Encontrarás aquí todas tus conversaciones con los expertos que te han interesado.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <ModalPorque />
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

export default UserHomepageQuickLinks