import React from "react";
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap";
import "./style.css"

class ModalExito extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      exitoModal: false,
    };
  }

  render() {
    let exitoClose = () => this.setState({ exitoModal: false });

    return (
      <ButtonToolbar>
        <Button className="workerCardButton quienesBtn" onClick={() => this.setState({ exitoModal: true })}>
          <i className="fas fa-external-link-alt"></i> Ver más
        </Button>

        <Modal
          size="lg"
          show={this.state.exitoModal}
          onHide={exitoClose}
          aria-labelledby="modal-exito"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-exito">
              <span>Historias Inspiradoras</span>
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

export default ModalExito