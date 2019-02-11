import React, { Component } from "react"
import NavBarUser from "../Components/navBars/navBarUser"
import LogInCardsWrapper from "../Components/infoCardsWrapper/logInCardsWrapper"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
//import Search from "../Components/Search/Search"
import UserFavorite from "./UserFavorite"
import UserMailbox from "./UserMailbox"
import WelcomeMessage from "../Components/WelcomeMessage/WelcomeMessage"
import API from "../utils/API";
import { InputGroup, Button, Col, Form } from "react-bootstrap";
import Professions from "../Components/Professions/Professions";
import StateSelector from "../Components/StateSelector/StateSelector";


class UserAfterLogin extends Component {

    state = {
        type: "home",
        searchProfession: '',
		searchState: '',
        results:[],
        resultsProfession:[],
        resultCostRate:[],
        resultQualityRate:[],
        resultHires:null,
        userId: '',
        favorites:[],
    }

  addFavs =()=>{
      let fav={
        kontratado: this.state.results._id,    
        user: this.state.userId    
      }
      console.log("we are on addfavs", fav)
    API.insertFavourite(fav).then(result=>{
        this.setState({favorites: result});
        console.log(result);
    }).catch(err=> console.log(err));
}

  
       
    searchClickHandler = () => {
       
		API.getKontratadoByFilter({
			searchProfession: this.state.searchProfession,
			searchState: this.state.searchState
		}).then(result => {
            
            this.setState({results: result.data[0]})
            this.setState({resultsProfession: result.data[0].profession.profession})
            this.setState({resultCostRate: result.data[0].costRates[0].costRating})
            this.setState({resultQualityRate: result.data[0].qualityRates[0].quality})
            this.setState({resultHires: result.data[0].hires.length})
            this.setState({userId: this.props.userId})

         console.log(result.data);
		}).catch(err => console.log(err));
    }
    
    onProfessionChange = (searchProfession) => {
		this.setState({ searchProfession });
	}

	onStateChange = (searchState) => {
		this.setState({ searchState });
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
                        <WelcomeMessage />
                        <br />
                        <Form >
					<Form.Row className="containerHard">
						<Col s={12} md={4}>
							<InputGroup>
								<Professions onProfessionChange={this.onProfessionChange} className="searchItem" />
							</InputGroup>
						</Col>
						<Col s={12} md={4}>
							<InputGroup>
								<StateSelector isSearch={true} handleStateChange={this.onStateChange} className="searchItem" />
							</InputGroup>
                            </Col>
                        <Col s={12} md={4} className="text-center">
							<Button onClick={() => this.searchClickHandler()} className="workerCardButton" id="searchBtn"><i class="fas fa-search"></i> Buscar</Button>
						</Col>

						
					</Form.Row>
				</Form>

                        <br />
                        <button onClick={this.props.facebookLogout} className="button">Cerrar sesión</button>
                        
                        <br />
                        <LogInCardsWrapper />
                        <br />
                        <Filters />
                        <WorkersWrapper> 
                            <WorkerCard userId={this.props.userId}  addFavs={this.addFavs}  profession= {this.state.resultsProfession} results={this.state.results} quant={this.state.resultHires} quality={this.state.resultQualityRate} costRate={this.state.resultCostRate}/>
                            
                        </WorkersWrapper>
                        
                    </div>
                    :
                    this.state.type === "favorite" ?
                        <div><UserFavorite  userId={this.props.userId}  addFavs={this.addFavs} myFavs={this.props.myFavs} favProfession= {this.props.favProfession} results={this.state.results} quant={this.state.resultHires} quality={this.state.resultQualityRate} costRate={this.state.resultCostRate} /></div>
                        :
                        <div><UserMailbox /></div>
                }
            </div>
        )
    }
}
export default UserAfterLogin;