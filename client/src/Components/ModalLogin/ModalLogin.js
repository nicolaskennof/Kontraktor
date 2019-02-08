import React, {Component} from "react";
import FacebookLogin from 'react-facebook-login';
import config from '../../config.json';  
import {Modal} from "react-bootstrap"
import  "./Style.css"
import WorkerProfileData from '../WorkerProfileData/WorkerProfileData'
import KontratadoLogin from '../KontratadoLogin/KontratadoLogin'

class ModalLogin extends Component{
constructor(props) {
  super(props)
  this.handleOptionChange = this.handleOptionChange.bind(this)
}
    
state={selectedOption:''}    

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
        callback={this.props.facebookResponse} 
        textButton={this.props.isSignup ? "Registrate con Facebook" : "Conectate con Facebook"}/>;       
    } 
    if (this.state.selectedOption === 'B') {
        button = this.props.isSignup ? <WorkerProfileData logKontratado = {this.props.logKontratado} kontratado = {null} isSignup = {true} /> : 
            <KontratadoLogin logKontratado = {this.props.logKontratado} />
    }
return (

        <div className="container">

            <Modal show={this.props.show} onHide={()=>{
                this.setState({selectedOption:''});
                this.props.handleClose();}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.isSignup ? "Registrate para comenzar" : "Coenctar"}
                    </Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                    <input variant="secondary" type="radio" value="A" checked={this.state.selectedOption ==='A'} onChange={this.handleOptionChange} /> 
                        <span className="options-text marR64">Quiero Contratar</span>
                    <input variant="primary" type="radio" value="B" checked={this.state.selectedOption ==='B'} onChange={this.handleOptionChange}/>
                        <span className="options-text">Quiero Trabajar</span>
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