import React from "react";
import { Button, Jumbotron, CardGroup, Row, Col, Card } from 'react-bootstrap'
import Like from "../../img/like.png"
import Chat from "../../img/chat.png"
import './style.css'


function UserHomepageQuickLinks(props) {
    return (
        <div>
            <Jumbotron className="jumbotronFunctioning rounded-0 text-center">
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <CardGroup>
                                <Card className="border-0 text-center">
                                    <Card.Img variant="top" src={Like} className="imgFunctioning" />
                                    <Card.Body>
                                        <Card.Title>Tus favoritos</Card.Title>
                                        <Card.Text>
                                            Pica el botón de corazón para agregar los expertos que más te convienen a tu lista de favoritos
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <Button onClick={() => { this.props.routeChange("favorite") }} className="m-2" variant="outline-warning"><i className="fas fa-heart"></i></Button>
                                    </Card.Footer>
                                </Card>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={Chat} className="imgFunctioning" />
                                    <Card.Body>
                                        <Card.Title>Tus conversaciones</Card.Title>
                                        <Card.Text>
                                            Encontrarás aquí todas tus conversaciones con los expertos que te han interesado.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="BtnFooter border-0">
                                        <Button onClick={() => { this.props.routeChange("message") }} variant="outline-warning"><i className="fas fa-comments"></i></Button>
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