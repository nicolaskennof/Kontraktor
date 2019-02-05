import React, {Component} from "react";
import FacebookLogin from 'react-facebook-login';
import config from '../../config.json';  
import {Modal,Button} from "react-bootstrap"
import classes from "./Style.css"
class ModalLogin extends Component{
constructor(props) {
  super(props)
  this.handleOptionChange = this.handleOptionChange.bind(this)
  this.handleShow = this.handleShow.bind(this)
  this.handleClose = this.handleClose.bind(this)
}
    
state={selectedOption:'',show:false}    
handleClose(){
    this.setState({show:false});
}
handleShow(){
    this.setState({show:true});
}
handleOptionChange(changeEvent){
    this.setState({
        selectedOption: changeEvent.target.value
    })
} 

render () {
    let button;
	if (this.state.selectedOption === 'A') {
        button =  <FacebookLogin
        appId={config.FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={this.facebookResponse} 
        textButton="Registrate con Facebook"/>;       
    } 
    if (this.state.selectedOption === 'B') {
        button = <form>FORMULARIO</form>
    }
return (

        <div class="container">
        <button onClick={this.handleShow}>log in</button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registrate para comenzar</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                    <input variant="secondary" type="radio" value="A" checked={this.state.selectedOption ==='A'} onChange={this.handleOptionChange} /> 
                        <span class="options-text marR64">Quiero Contratar</span>
                    <input variant="primary" type="radio" value="B" checked={this.state.selectedOption ==='B'} onChange={this.handleOptionChange}/>
                        <span class="options-text">Quiero Trabajar</span>
                </Modal.Body>
                
                <Modal.Footer>
                    {button}
                </Modal.Footer>
            </Modal>

       
		</div>
		)
	}
}
export default ModalLogin;