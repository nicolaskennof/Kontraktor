import React, { Component } from "react"
import WorkerProfileData from "../WorkerProfileData/WorkerProfileData"

class KontratadoAfterLogin extends Component {
    
    render() {
        console.log(this.props.kontratado)
        return (
            <div>
                <WorkerProfileData kontratadoUpdate={this.props.kontratadoUpdate} kontratado = {this.props.kontratado} isSignup={false} />
                <button onClick={this.props.logOutKontratado}>Adios paisano</button>
            </div>
        )
    }
}

export default KontratadoAfterLogin;