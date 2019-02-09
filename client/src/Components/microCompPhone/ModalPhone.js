import React from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";
import "./style.css"

class ModalPhone extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            phoneModal: false
        };
    }

    render() {
        let phoneClose = () => this.setState({ phoneModal: false });
        let firstName = "Nicolas Jules R";
        let lastName = "Kennof";
        let phoneNumber = "222 903 8667";

        return (
            <ButtonToolbar>
                <Button className="workerCardButton" id="phoneBtn" onClick={() => this.setState({ phoneModal: true })}>
                    <i className="fas fa-phone"></i>
                </Button>

                <Modal
                    size="sm"
                    show={this.state.phoneModal}
                    onHide={phoneClose}
                    aria-labelledby="modal-phone"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="modal-phone">
                            <i className="fas fa-phone"></i> Contacto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        El número de celular de {firstName + " " + lastName} es el siguiente:<br /><b>{phoneNumber}</b>.
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default ModalPhone