import React, { Component } from "react"
import KNavBar from "../Components/kNavBar/KaNaBar"
import KStats from "../Components/kStats/kStats"
import WorkerProfileData from "../Components/WorkerProfileData/WorkerProfileData"


class KontratadoAfterLogin extends Component {

    render() {
        return (

            <div>
                <KNavBar />
                <br />
                <KStats />
                <br />
                <WorkerProfileData kontratadoUpdate={this.props.kontratadoUpdate} kontratado={this.props.kontratado} isSignup={false} />
                <button onClick={this.props.logOutKontratado}>Adios paisano</button>
            </div>
        )
    }

}

export default KontratadoAfterLogin;