import React from "react";
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap";
import "./style.css"

class ModalPorque extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      porqueModal: false,
    };
  }

  render() {
    let porqueClose = () => this.setState({ porqueModal: false });

    return (
      <ButtonToolbar>
        <Button className="workerCardButton quienesBtn" onClick={() => this.setState({ porqueModal: true })}>
          <i className="fas fa-external-link-alt"></i> Ver más
        </Button>

        <Modal
          size="lg"
          show={this.state.porqueModal}
          onHide={porqueClose}
          aria-labelledby="modal-porque"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-porque">
              <span>¿Porqué Kontratado?</span>
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

export default ModalPorque