import React from "react";
import { ButtonToolbar, Button, Modal, Form, Container } from "react-bootstrap";
import MessageInChat from "../messageInChat/MessageInChat"
import "./style.css"

class ModalMessage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      messageModal: false,
    };
  }

  render() {
    let messageClose = () => this.setState({ messageModal: false });
    let firstName = "Nicolas Jules R";
    let lastName = "Kennof";

    return (
      <ButtonToolbar>
        <Button className="workerCardButton" id="messageBtn" onClick={() => this.setState({ messageModal: true })}>
          <i className="fas fa-comments"></i>
        </Button>

        <Modal
          size="lg"
          show={this.state.messageModal}
          onHide={messageClose}
          aria-labelledby="modal-message"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-message">
              Tu conversación con <span id="workerName">{firstName + " " + lastName}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="border rounded mb-3">
              <MessageInChat />
              <MessageInChat />
              <MessageInChat />
            </Container>
            <div className="row">
              <div className="col-md-10">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </div>
              <div className="col-md-2">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ModalMessage