import React, { Component } from "react";
import { InputGroup, Button, Col, Form } from "react-bootstrap";
import "./search.css";
import Professions from "../Professions/Professions";
import StateSelector from "../StateSelector/StateSelector";


class Search extends Component {

	state = {
		searchProfession: '',
		searchState: ''
	}

	onProfessionChange = (searchProfession) => {
		this.setState({ searchProfession });
	}

	

	onStateChange = (searchState) => {
		this.setState({ searchState });
	}


	onSearchHandler= ()=>{
		let searchProfession = this.state.searchProfession;
		let searchState = this.state.searchState;
		this.props.mySearch(searchProfession, searchState)
	}

	render() {
		return (
			<div>
				<Form>
					<Form.Row className="searchContainer darkBackground pt-4 pb-2 pl-5 text-center rounded">
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
							<Button onClick={() => this.onSearchHandler()} className="workerCardButton" id="searchBtn"><i class="fas fa-search"></i> Buscar</Button>
						</Col>
					</Form.Row>
				</Form>
			</div>
		)
	}
}
export default Search;