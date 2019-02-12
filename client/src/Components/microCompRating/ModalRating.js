import React from "react";
import { Button, Modal, ButtonToolbar, Container, Form, Row, Col, Dropdown, DropdownType } from "react-bootstrap";
import "./style.css"


class RatingModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ratingModal: false,
        };



    }

    render() {
        let myClasses = [];
        let ratingClose = () => this.setState({ ratingModal: false });
        let workerName = "Nicolas el Plomero"
        let var1 = this.props.quality;
        for (let i = 0; i < 5; i++) {

            if (var1 > i) {
                myClasses.push("btn rating btn-warning btn-sm mr-1")
            } else {
                myClasses.push("btn rating btn-grey btn-sm mr-1")
            }
        }


        return (
            <ButtonToolbar>
                <Button data-value={this.props.quality} className={myClasses[0]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[1]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[2]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[3]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[4]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>

                <Modal
                    size="lg"
                    show={this.state.ratingModal}
                    onHide={ratingClose}
                    aria-labelledby="modal-rating"
                    centered
                >
                    <Modal.Header closeButton className="border-dark">
                        <Modal.Title id="modal-rating">
                            ¿Qué opinan nuestros usuarios de {workerName}?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            Will insert review component here later!
                        </Container>
                        <br />
                        <div className="row">
                            <div className="col-md-8">
                                <Form.Group controlId="exampleForm.ControlTextarea1" className="ratingSubmitBtn">
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </div>
                            <div className="col-md-2">
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="serviceRating">
                                                <Form.Control as="select">
                                                    <option>Servicio</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="costRating">
                                                <Form.Control as="select">
                                                    <option>Costo</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                            <Col md={2} className="text-center">
                                <Button variant="success" type="submit" className="ratingSubmitBtn">
                                    <i class="fas fa-check"></i>
                                </Button>
                            </Col>
                        </div>
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default RatingModal;