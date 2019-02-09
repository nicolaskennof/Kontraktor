import React, { Component } from "react";
import NavBarUser from "../Components/navBars/navBarUser"
import LogInCardsWrapper from "../Components/infoCardsWrapper/logInCardsWrapper"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import Search from "../Components/Search/Search"
import UserFavorite from "./UserFavorite"
import UserMailbox from "./UserMailbox"


class UserAfterLogin extends Component {

    state = {
        render: "start"
    }

    routeChange = (type) => {
        this.setState({
            render: type
        })
    }

    render() {
        return (
        <div>
            <NavBarUser routeChange = {this.routeChange}/>{this.state.render === "start" ?
                <div>
                    <br />
                    <Search />
                    <br />
                    <button onClick={this.props.facebookLogout} className="button">Log out</button>
                    <br />
                    <LogInCardsWrapper />
                    <br />
                    <Filters />
                    <WorkerCard />
                </div>
                :
                this.state.render === "favorite" ? 
                <UserFavorite />
                :
                <UserMailbox />            
            }
        </div>
        )
    }
}
export default UserAfterLogin;