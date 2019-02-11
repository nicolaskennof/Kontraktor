import React, { Component } from "react";
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import "./style.css"



class Filters extends Component {
    createFilter = () => {
        if (this.props.isUserFilter) {
            return <Row>
                <Col md={3}><div className="filterText text-center"><p className="pt-3">Ordenar/Filtrar resultados por:</p></div></Col>            
                <Col md={3}><Button className="filtersBtn mx-2 rounded-0" variant="secondary">Veces Kontratado <i className="fas fa-map-marker-alt"></i></Button></Col>
                <Col md={3}><Button className="filtersBtn mr-2 rounded-0" variant="secondary">Costo <i className="fas fa-funnel-dollar"></i></Button></Col>
                <Col md={3}><Button className="filtersBtn rounded-0" variant="secondary">Puntaje <i className="fas fa-star"></i></Button></Col>
            </Row>
        } else {
            return <div className="filterText text-center"><p className="pt-3">Ordenar/Filtrar resultados por:</p>
                <Button className="filtersBtn mx-2 rounded-0" variant="secondary">Fecha ultimo mensaje <i className="fas fa-map-marker-alt"></i></Button>
                <Button className="filtersBtn mr-2 rounded-0" variant="secondary">Profesión <i className="fas fa-funnel-dollar"></i></Button>
                <Button className="filtersBtn rounded-0" variant="secondary">Ya lo Kontrataste <i className="fas fa-star"></i></Button>
            </div>
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <ButtonGroup className="filtersWrapper p-2 my-2" aria-label="filter-group">
                        {this.createFilter()}
                    </ButtonGroup>
                </Container>
            </div>
        )
    }
}

export default Filters;