import React, { Component } from "react"
import WorkerProfileData from "../Components/WorkerProfileData/WorkerProfileData"


class KontratadoAfterLogin extends Component {
    
    render() {
        return (
            <div>
                <WorkerProfileData kontratadoUpdate={this.props.kontratadoUpdate} kontratado = {this.props.kontratado} isSignup={false} />
                <button onClick={this.props.logOutKontratado}>Adios paisano</button>
            </div>
        )
    }
}

export default KontratadoAfterLogin;