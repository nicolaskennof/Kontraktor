import React from "react";
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap";
import "./style.css"
import Quality from "../../img/quality.png"

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
          size="md"
          show={this.state.porqueModal}
          onHide={porqueClose}
          aria-labelledby="modal-porque"
          centered
        >
          <Modal.Header closeButton className="border-dark">
            <Modal.Title id="modal-porque">
              <span>¿Porqué Kontratado?</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
            Kontratado te da la opción de elegir entre el top de especialistas en la república, garantizandote calidad, rapidez y la seguridad de obtener el mejor servicio, recomendados por la misma comunidad.
            <br /><br />
            <div className="text-center"><img src={Quality} alt="kontratado-quality" className="imageInText"/></div>
            </Container>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalPorque