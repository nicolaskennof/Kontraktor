import React, { Component } from "react"
import NavBarUser from "../Components/navBars/navBarUser"
import LogInCardsWrapper from "../Components/infoCardsWrapper/logInCardsWrapper"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import Search from "../Components/Search/Search"
import UserFavorite from "./UserFavorite"
import UserMailbox from "./UserMailbox"
import WelcomeMessage from "../Components/WelcomeMessage/WelcomeMessage"
import HeroImage from "../Components/HeroImage/HeroImageUserHome";


class UserAfterLogin extends Component {

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
                <NavBarUser type={this.state.type} routeChange={this.routeChange} />{this.state.type === "home" ?
                    <div>
                        <HeroImage />
                        <br />
                        <button onClick={this.props.facebookLogout} className="button">Cerrar sesión</button>
                        <br />
                        <LogInCardsWrapper />
                        <br />
                        <Filters isUserFilter={true} />
                        <WorkersWrapper>
                            <WorkerCard />
                        </WorkersWrapper>
                    </div>
                    :
                    this.state.type === "favorite" ?
                        <div><UserFavorite /></div>
                        :
                        <div><UserMailbox /></div>
                }
            </div>
        )
    }
}
export default UserAfterLogin;