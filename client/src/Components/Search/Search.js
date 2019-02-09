import React, { Component } from "react";
import { InputGroup, Button, Col, Form } from "react-bootstrap";
import "./search.css";
import Professions from "../Professions/Professions";
import StateSelector from "../StateSelector/StateSelector";
import API from "../../utils/API";

class Search extends Component {

	state = {
		searchProfession: '',
		searchState: ''
	}

	onProfessionChange = (searchProfession) => {
		this.setState({ searchProfession });
	}

	searchClickHandler = () => {
		API.getKontratadoByFilter({
			searchProfession: this.state.searchProfession,
			searchState: this.state.searchState
		}).then(result => {
			console.log(result);
		}).catch(err => console.log(err));
	}

	onStateChange = (searchState) => {
		this.setState({ searchState });
	}

	render() {
		return (
			<div>
				<Form>
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
						<Col s={12} md={4}>
							<Button onClick={() => this.searchClickHandler()} className="workerCardButton"><i class="fas fa-search"></i> Buscar</Button>
						</Col>
					</Form.Row>
				</Form>
			</div>
		)
	}
}
export default Search;