import React from "react";
import { ButtonToolbar, Button, Modal, Form, Container } from "react-bootstrap";
import MessageInChat from "../messageInChat/MessageInChat"
import "./style.css"
import API from '../../utils/API'
import { networkInterfaces } from "os";

class ModalMessage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      messageModal: false,
      message: ''
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      message : e.target.value
    })
  }

  handleSendMessage = () => {
    const {message} = this.state;
    if (message){
      
      const newMessage = {
        message,
        kontratado : this.props.kontratadoId,
        user : this.props.userId,
        isUserMessage : "false"
      }

      API.insertMessage(newMessage)
        .then(newMessage=>{
          API.getKontratado(newMessage.data.kontratado)
            .then(updateKontratado=>{
              this.setState({
                message : ''
              }, ()=>{
                this.props.kontratadoUpdate(updateKontratado.data);
              })
            })
        })
    }
  }

  createMessageInChatElements = () => {
    return this.props.userMessages.map(userMessage=>{
      let image = '';
      if (userMessage.isUserMessage){
        image = `https://graph.facebook.com/${userMessage.user.facebookProvider.id}/picture?type=square`
      } else {
        if (this.props.kontratadoImage){
          image = `/api/image/${this.props.kontratadoImage}`
        } else {
          image = 'http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png'
        }
      }
      return <MessageInChat key={userMessage.message._id} image={image} message={userMessage.message} />
    })
  }

  render() {
    let messageClose = () => this.setState({ messageModal: false });
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
              Tu conversación con <span id="workerName">{this.props.fullName}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container className="border rounded mb-3">
              {
                this.props.isKontratado ? 
                this.createMessageInChatElements() :
                <div />
              }
              
            </Container>
            <div className="row">
              <div className="col-md-10">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control 
                    onChange={this.handleMessageChange}
                    value={this.state.message}
                    as="textarea"
                    rows="3" />
                </Form.Group>
              </div>
              <div className="col-md-2">
                <Button 
                  variant="primary" 
                  onClick={this.handleSendMessage}
                >
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