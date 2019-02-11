import React from "react"
import { ButtonToolbar, Button, Modal, Container } from "react-bootstrap"
import SingleReview from "../reviews/SingleReview"
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
          <Modal.Header closeButton className="border-dark">
            <Modal.Title id="modal-exito">
              <span>Historias Inspiradoras</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
            <SingleReview className="mini-box exitoCard" userReview="Don Bernardino me salvó la vida y mis muebles! Mi casa se estaba inundando por una fuga, mis amigas me habían recomendado Kontratado y no había tenido la oportunidad de utilizarlo. Fue super rapido contactar a un especialista y ahora me siento segura de volver a utilizar la plataforma para cualquier falla en el futuro" userFirstName="Berta Lagarta"></SingleReview>
            <br />
            <SingleReview className="mini-box" userReview="Julián es la luz de esta casa... Literal arregló todos los focos! Gracias a el por tan excelente servicio!" userFirstName="Margareta de la Prieta"></SingleReview>
            <br />
            <SingleReview className="mini-box" userReview="Anita es la mejor pintora de hogares que haya conocido, no solo escuchó exactamente la necesidad que teníamos, si no que nos dió consejos basados en su experiencia en feng shui!" userFirstName="Roberto Chingao"></SingleReview>
            <br />
            <SingleReview className="mini-box" userReview="Dona Vera fue la mejor decisión! Si soy honesta, me sentía un poco insegura de contratar a alguien que fuera online pero después de ver tantos buenos reviews e historias de familias, dije ¿Por qué no? Y fue lo mejor, Verita se encargó de arreglar las puertas de mi casa, que fue creada en 1922, siendo una casa antigua necesita muchas mejoras y se que contaré con Dona Vera siempre." userFirstName="Paolo di Sueco"></SingleReview>
            </Container>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalExito