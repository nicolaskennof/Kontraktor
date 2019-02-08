import React, { Component } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import "./search.css";
import Professions from "../Professions/Professions";
import StateSelector from "../StateSelector/StateSelector";
import API from "../../utils/API";

class Search extends Component {
	
	state = {
		searchProfession : '',
		searchState : ''
	}

	onProfessionChange = (searchProfession) => {
		this.setState({searchProfession});
	}

	searchClickHandler = () => {
		API.getKontratadoByFilter({
			searchProfession : this.state.searchProfession,
			searchState : this.state.searchState
		}).then(result=>{
			console.log (result);
		}).catch(err=> console.log(err));
	}

	onStateChange = (searchState) => {
		this.setState({searchState});
	}

	render() {
		return (
			<div className="search-container" align="center">
				<Card className="card-container">
					<Card.Body>
						<Card.Title>Hola preciosa!</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">¿Qué necesitas hoy?</Card.Subtitle>
					</Card.Body>
				</Card>
				<br />
				<Card className="card-search-container">
					<Card.Body className="row">
						<InputGroup className="mb-3 col-6">
							<Professions onProfessionChange = {this.onProfessionChange} />
						</InputGroup>
						<InputGroup className="mb-3 col-6">
							<StateSelector isSearch = {true} handleStateChange = {this.onStateChange}/>
						</InputGroup>
						<Button onClick={()=>this.searchClickHandler()}>Submit form</Button>
					</Card.Body>
				</Card>
			</div>
		)
	}
}
export default Search;