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

  createMessageInChatElements = () => {
    console.log(this.props.userMessages);
    return this.props.userMessages.map(userMessage=>{
      let image = '';
      if (userMessage.isUserMessage){
        image = `https://graph.facebook.com/10155848713781746/picture?type=square`
      } else {
        if (this.props.kontratadoImage){
          image = `/api/image/${this.props.kontratadoImage}`
        } else {
          image = 'http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png'
        }
      }
      console.log(image);
      return <MessageInChat key={userMessage.message._id} image={image} message={userMessage.message} />
    })
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
          <Modal.Header closeButton  className="border-dark">
            <Modal.Title id="modal-message">
              Tu conversación con <span id="workerName">{firstName + " " + lastName}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="border rounded mb-3">
              {this.createMessageInChatElements()}
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