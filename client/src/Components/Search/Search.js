import React, {Component} from "react";
import {Card,InputGroup,Button,FormControl} from "react-bootstrap";
import classes from "./search.css";
import lupita from "../../img/lupita.png"

class Search extends Component{
state = {
}
render () {
	
return (
		<div class="search-container" align="center">
			<Card class="card-container">
			<Card.Body>
				<Card.Title>Hola preciosa!</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">¿Qué necesitas hoy?</Card.Subtitle>
			</Card.Body>
			</Card>
			<br/>
			
			
				<Card  class="card-search-container">
				<Card.Body className="row">
					<InputGroup className="mb-3 col-6">
						<InputGroup.Prepend>
						<Button variant="outline-secondary"><img src={lupita} class="w18" ></img></Button>
						</InputGroup.Prepend>
						<FormControl placeholder="¿A quién buscas?" aria-describedby="basic-addon1" />
					</InputGroup>
					
					<InputGroup className="mb-3 col-6">
						<InputGroup.Prepend>
						<Button variant="outline-secondary"><img src={lupita} class="w18" ></img></Button>
						</InputGroup.Prepend>
						<FormControl placeholder="¿Dónde?" aria-describedby="basic-addon1" />
					</InputGroup>
					</Card.Body>
				</Card>
		
		</div>

		)
	}
}
export default Search;