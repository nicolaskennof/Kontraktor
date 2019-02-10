import React from "react";
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap";
import "./style.css"

class ModalQuienes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      quienesModal: false,
    };
  }

  render() {
    let quienesClose = () => this.setState({ quienesModal: false });

    return (
      <ButtonToolbar>
        <Button className="workerCardButton quienesBtn" onClick={() => this.setState({ quienesModal: true })}>
          <i className="fas fa-external-link-alt"></i> Ver más
        </Button>

        <Modal
          size="lg"
          show={this.state.quienesModal}
          onHide={quienesClose}
          aria-labelledby="modal-quienes"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-quienes">
              <span>¿Quiénes somos?</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="border rounded mb-3">
             Here comes the Arly's text
            </Container>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalQuienes