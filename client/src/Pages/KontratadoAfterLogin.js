import React, { Component } from "react"
import KaNaBar from "../Components/kNavBar/KaNaBar"
import KStats from "../Components/kStats/kStats"
import WorkerProfileData from "../Components/WorkerProfileData/WorkerProfileData"
import KontratadoProfile from "../Pages/KontratadoProfile"
import KontratadoMailbox from "../Pages/KontratadoMailbox"


class KontratadoAfterLogin extends Component {

    state = {
        type: "home"
    }

    routeChange = (type) => {
        this.setState({
            type
        })
    }


    render() {
        return (

            <div>
                <KaNaBar type={this.state.type} routeChange={this.routeChange} />
                {this.state.type === "home" ?
                    <div>
                        <br />
                        <KStats />
                        <br />
                        <WorkerProfileData kontratadoUpdate={this.props.kontratadoUpdate} kontratado={this.props.kontratado} isSignup={false} />
                        <button onClick={this.props.logOutKontratado}>Adios paisano</button>
                    </div>
                    :
                    this.state.type === "profile" ?
                        <div><KontratadoProfile /></div>
                        :
                        <div><KontratadoMailbox /></div>
                }
            </div>
        )
    }

}

export default KontratadoAfterLogin;