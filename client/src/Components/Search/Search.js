import React, { Component } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import "./search.css";
import StateSelector from "../StateSelector/StateSelector";
import API from "../../utils/API";

class Search extends Component {
	
	state = {
		searchProfession : '',
		searchState : null
	}

	searchProfessionChangeHandler = (e) => {
		this.setState({
			searchProfession : e.target.value
		});
	}

	searchClickHandler = () => {
		API.getKontratadoByFilter({
			searchProfession : this.state.searchProfession,
			searchState : this.state.searchState.value
		}).then(result=>{
			console.log (result);
		}).catch(err=> console.log(err));
	}

	getSelectedState = (selectedOption) => {
		this.setState({
			searchState : selectedOption
		});
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
							<FormControl value={this.state.searchProfession} onChange={this.searchProfessionChangeHandler} placeholder="¿Qué necesitas?" aria-describedby="basic-addon1" />
						</InputGroup>
						<InputGroup className="mb-3 col-6">
							<StateSelector getSelectedState = {this.getSelectedState}/>
						</InputGroup>
						<Button onClick={()=>this.searchClickHandler()}>Submit form</Button>
					</Card.Body>
				</Card>
			</div>
		)
	}
}
export default Search;