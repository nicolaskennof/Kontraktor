import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./style.css"



class Filters extends Component {
    createFilter = () => {
        if (this.props.isUserFilter) {
            return (
            <Row>          
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Veces Kontratado <i className="fas fa-map-marker-alt"></i></Button></Col>
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Costo <i className="fas fa-funnel-dollar"></i></Button></Col>
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Puntaje <i className="fas fa-star"></i></Button></Col>
            </Row>
            )
        } else {
            return (
            <Row>
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Fecha ultimo mensaje <i className="fas fa-map-marker-alt"></i></Button></Col>
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Profesión <i className="fas fa-funnel-dollar"></i></Button></Col>
                <Col md={4}><Button className="filtersBtn rounded-0" variant="secondary">Ya lo Kontrataste <i className="fas fa-hammer"></i></Button></Col>
            </Row>
            )
        }
    }

    render() {
        return (
            <div>
                    <div className="filtersWrapper p-2 my-2" aria-label="filter-group">
                        {this.createFilter()}
                    </div>
            </div>
        )
    }
}

export default Filters;