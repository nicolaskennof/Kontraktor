import React, { Component } from "react"
import NavBarUser from "../Components/navBars/navBarUser"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import UserFavorite from "./UserFavorite"
import API from "../utils/API";
import UserMailbox from "./UserMailbox"
import HeroImage from "../Components/HeroImage/HeroImageUserHome"
import UserHomepageQuickLinks from "../Components/Steps/UserHomepageQuickLinks"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"


class UserAfterLogin extends Component {

    state = {
        type: "home",
        searchProfession: '',
        searchState: '',
        results: [],
        resultsProfession: [],
        resultCostRate: [],
        resultQualityRate: [],
        resultHires: null,
        userId: '',
        favorites: [],
        kontratados: [],
        myBool: false,
        favClass:"Danger",
    }

    addFavs = () => {
        console.log("we are trying to addfavs")
     
        let fav = {
            kontratado: this.state.results._id,
            user: this.props.userId
        }
        API.insertFavourite(fav).then(result => {
            this.setState({ favorites: result });
            console.log(result);
            API.getKontratado(result.data._id).then(result2=>{
                console.log(result2);
                let temp1=this.state.favorites
                temp1.push(result2)
                this.setState({favorites: temp1});
            }).catch(err=> console.log(err))
        }).catch(err => console.log(err));
    }

    searchClickHandler = (searchProfession, searchState) => {

        API.getKontratadoByFilter({
            searchProfession,
            searchState
        }).then(result => {
            this.setState({ kontratados: result.data })
            this.setState({ results: result.data[0] })
            console.log("resultado de kontratados: ", result);
            this.setState({resultsProfession: result.data[0].profession.profession})
            this.setState({resultCostRate: result.data[0].costRates[0].costRating})
            this.setState({resultQualityRate: result.data[0].qualityRates[0].quality})
            this.setState({resultHires: result.data[0].hires.length})
            //this.setState({userId: this.props.userId})

        }).catch(err => console.log(err));
    }

    routeChange = (type) => {
        this.setState({
            type
        })
    }

    render() {
        return (
            <div>
                <NavBarUser facebookLogout={this.props.facebookLogout} type={this.state.type} getkon={this.props.getkon} routeChange={this.routeChange}  />{this.state.type === "home" ?
                    <div>
                        <HeroImage mySearch={this.searchClickHandler} />
                        <Wrapper>
                            <Filters />
                            {this.state.kontratados.map(kontratado => {
                                return <WorkerCard userId={kontratado._id} favClass={this.state.favClass} addFavs={this.addFavs} kontratado={kontratado} />

                            })}
                            <UserHomepageQuickLinks routeChange={this.routeChange}/>
                        </Wrapper>
                        <Footer />
                    </div>
                    :
                    this.state.type === "favorite" ?
                        <div><UserFavorite userId={this.props.userId}  addFavs={this.addFavs} fullfav={this.props.fullfav}  results={this.state.results} quant={this.state.resultHires} quality={this.state.resultQualityRate} costRate={this.state.resultCostRate} /></div>
                        :
                        <div><UserMailbox /></div>
                }
            </div>
        )
    }
}
export default UserAfterLogin;