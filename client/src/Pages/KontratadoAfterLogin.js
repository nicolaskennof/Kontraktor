import React, { Component } from "react"
import KaNaBar from "../Components/kNavBar/KaNaBar"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import KontratadoProfile from "../Pages/KontratadoProfile"
import KontratadoMailbox from "../Pages/KontratadoMailbox"
import HeroImageKontratadoAfterLogin from "../Components/HeroImage/HeroImageKontratadoAfterLogin"
import KontratadoKonversationsWrapper from "../Components/KontratadoConversation/KontratadoKonversationsWrapper"
import Footer from "../Components/Footer/Footer"

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
                <KaNaBar logOutKontratado={this.props.logOutKontratado} type={this.state.type} routeChange={this.routeChange} />
                {this.state.type === "home" ?
                    <div>
                        <HeroImageKontratadoAfterLogin />
                        <Wrapper>
                            <KontratadoKonversationsWrapper />
                        </Wrapper>
                        <Footer />
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