import React, { Component } from "react"
import NavBarUser from "../Components/navBars/navBarUser"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import UserFavorite from "./UserFavorite"
import UserMailbox from "./UserMailbox"
import HeroImage from "../Components/HeroImage/HeroImageUserHome"
import UserHomepageQuickLinks from "../Components/Steps/UserHomepageQuickLinks"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"


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
                <NavBarUser facebookLogout={this.props.facebookLogout} type={this.state.type} routeChange={this.routeChange} />{this.state.type === "home" ?
                    <div>
                        <HeroImage />
                        <UserHomepageQuickLinks routeChange={this.routeChange}/>
                        <Wrapper>
                            <Filters isUserFilter={true} />
                            <WorkerCard />
                        </Wrapper>
                        <Footer />
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