import React, { Component } from "react"
import NavBarUser from "../Components/navBars/navBarUser"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import UserFavorite from "./UserFavorite"
import API from "../utils/API";
import UserMailbox from "./UserMailbox"
import HeroImage from "../Components/HeroImage/HeroImageUserHome"
import UserHomepageQuickLinks from "../Components/Steps/UserHomepageQuickLinks"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import NoContent from "../Components/reviews/NoContentDiv"


class UserAfterLogin extends Component {

    state = {
        type: "home",
        searchProfession: '',
        searchState: '',
        kontratados: [],
        isSearchReturnNoResults: false,
    }


    searchClickHandler = (searchProfession, searchState) => {

        API.getKontratadoByFilter({
            searchProfession,
            searchState
        }).then(result => {
            this.setState(
                {
                    kontratados: result.data,
                    isSearchReturnNoResults: result.data.length ? false : true
                })
        }).catch(err => console.log(err));
    }

    getUserMessages = (user,kontratadoId) => {
        return user.messages.filter(userMessage=>{
            return userMessage.kontratado._id === kontratadoId
        })
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
                        <HeroImage 
                            firstName={this.props.user.fullName.split(' ')[0]} 
                            mySearch={this.searchClickHandler} />
                        <Wrapper>

                            {this.state.isSearchReturnNoResults ?
                                <NoContent noContentMessage="No hemos encontrado el experto que buscas. Nuestra base de datos se expande cada día... ¡gracias por tu paciencia!" noContentTeam="Tu Equipo Kontratado" />
                                : this.state.kontratados.length ?
                                    <div>
                                        <Filters />
                                        {this.state.kontratados.map(kontratado => {
                                            return <WorkerCard key={kontratado._id} 
                                                userMessages={this.getUserMessages(this.props.user , kontratado._id)} 
                                                updateUser={this.props.updateUser} 
                                                user={this.props.user} 
                                                kontratado={kontratado} />
                                        })}
                                    </div> : <div></div>
                            }


                            <UserHomepageQuickLinks routeChange={this.routeChange} />
                        </Wrapper>
                        <Footer />
                    </div>
                    :
                    this.state.type === "favorite" ?
                        <div><UserFavorite updateUser={this.props.updateUser} user={this.props.user} /></div>
                        :
                        <div><UserMailbox updateUser={this.props.updateUser} user={this.props.user} /></div>
                }
            </div>
        )
    }
}
export default UserAfterLogin;