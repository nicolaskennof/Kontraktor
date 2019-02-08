import React, { Component } from "react"
import API from '../../utils/API'

class KontratadoAfterLogin extends Component {
    
    state = {
        kontratado : null
    }
    
    componentDidMount(){
        if (this.props.kontratado){
            API.getKontratado(this.props.kontratado)
                .then(result=>{
                    console.log(result.data);
                    this.setState({kontratado : result.data});
                })
                .catch(err=>console.log(err.response))
        }
    }
    
    render() {
        return (
            <div>
                <h1>Hola Kontratado</h1>
                <button onClick={this.props.logOutKontratado}>Adios paisano</button>
            </div>
        )
    }
}

export default KontratadoAfterLogin;