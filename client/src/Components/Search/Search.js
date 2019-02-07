import React, { Component } from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import "./search.css";
import lupita from "../../img/lupita.png";
import StateSelector from "../StateSelector/StateSelector";

class Search extends Component {
	state = {
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
							<InputGroup.Prepend>
								<Button onClick={this.props.handleNameSearch} variant="outline-secondary"><img alt="" src={lupita} className="w18" ></img></Button>
							</InputGroup.Prepend>
							<FormControl placeholder="¿A quién buscas?" aria-describedby="basic-addon1" />
						</InputGroup>

						<InputGroup className="mb-3 col-6">
							<StateSelector />
						</InputGroup>
					</Card.Body>
				</Card>

			</div>

		)
	}
}
export default Search;