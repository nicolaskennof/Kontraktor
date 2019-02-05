import React, { Component } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import "./style.css"

function Filters() {
    return (
        <div>
            <Container>
                <ButtonGroup className="filtersWrapper p-2 my-2" aria-label="Basic example">
                    <div className="filterText text-center"><p className="pt-3">Filtrar resultados por:</p></div>
                    <Button className="filtersBtn mx-2 rounded-0" variant="secondary">Municipio <i class="fas fa-map-marker-alt"></i></Button>
                    <Button className="filtersBtn mr-2 rounded-0" variant="secondary">Costo <i class="fas fa-funnel-dollar"></i></Button>
                    <Button className="filtersBtn rounded-0" variant="secondary">Puntaje <i class="fas fa-star"></i></Button>
                </ButtonGroup>
            </Container>
        </div>
    )
}

export default Filters;