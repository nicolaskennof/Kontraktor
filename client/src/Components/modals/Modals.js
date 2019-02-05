import React, { Component } from "react";
import { ButtonToolbar, Button, Modal, Form, Container } from "react-bootstrap";
import MessageInChat from "../messageInChat/MessageInChat"
import "./style.css"

class Modals extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      messageModal: false,
      phoneModal: false
    };
  }

  render() {
    let messageClose = () => this.setState({ messageModal: false });
    let phoneClose = () => this.setState({ phoneModal: false });
    let firstName = "Nicolas Jules R";
    let lastName = "Kennof";
    let phoneNumber = "222 903 8667";


    return (
      <ButtonToolbar>
        <Button className="workerCardButton mr-2 my-2" id="messageBtn" onClick={() => this.setState({ messageModal: true })}>
          <i class="fas fa-comments"></i>
        </Button>
        <Button className="workerCardButton mb-5" id="phoneBtn" onClick={() => this.setState({ phoneModal: true })}>
          <i class="fas fa-phone"></i>
        </Button>

        <Modal
          size="lg"
          show={this.state.messageModal}
          onHide={messageClose}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Tu conversación con <span id="workerName">{ firstName + " " + lastName }</span>
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

          <Modal
            size="sm"
            show={this.state.phoneModal}
            onHide={phoneClose}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                <i class="fas fa-phone"></i> Contacto
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              El número de celular de { firstName + " " + lastName } es el siguiente:<br /><b>{ phoneNumber }</b>.
            </Modal.Body>
          </Modal>
      </ButtonToolbar>
        );
      }
    }
    
//render(<Modals />);
        
export default Modals