import React from "react";
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap";
import "./style.css"
import Logo from "../../img/helmet.png"

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
          size="md"
          show={this.state.quienesModal}
          onHide={quienesClose}
          aria-labelledby="modal-quienes"
          centered
        >
          <Modal.Header closeButton className="border-dark">
            <Modal.Title id="modal-quienes">
              <span>¿Quiénes somos?</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="mb-3">
            Somos una empresa creada por cinco jóvenes con el objetivo de mejorar el día a día de nuestra comunidad. Kontratando te conecta con los mejores especialistas en el área, dándote  una experiencia excepcional y de confianza.
            <br /><br />
            <div className="text-center"><img src={Logo} alt="kontratado-logo" className="imageInText"/></div>
            </Container>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalQuienes