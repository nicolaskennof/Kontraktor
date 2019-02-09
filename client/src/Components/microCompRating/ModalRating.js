import React from "react";
import { Button, Modal, ButtonToolbar, Container, Form } from "react-bootstrap";
import "./style.css"


class RatingModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ratingModal: false,
        };
    }

    render() {
        let ratingClose = () => this.setState({ ratingModal: false });
        let workerName = "Nicolas el Plomero"

        return (
            <ButtonToolbar>
                <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className="btn rating btn-grey btn-sm mr-1" aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className="btn rating btn-grey btn-sm" aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>

                <Modal
                    size="lg"
                    show={this.state.ratingModal}
                    onHide={ratingClose}
                    aria-labelledby="modal-rating"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-rating">
                            ¿Qué opinan nuestros usuarios de {workerName}?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container className="border rounded mb-3">
                            Will insert review component here later!
                        </Container>
                        <div className="row">
                            <div className="col-md-10">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </div>
                            <div className="col-md-2">
                                <Button variant="primary" type="submit">
                                    Envia tu reseña
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default RatingModal;