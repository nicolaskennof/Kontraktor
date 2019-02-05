import React from "react";
import InfoCard from './infoCard';
import './style.css';
import { Container } from "react-bootstrap";



function LogInCardsWrapper(props) {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        <InfoCard title='Tus favoritos' image='assets/img/NoLoginImages/pintura.jpg' />
                    </div>
                    <div className="col-md-4">
                        <InfoCard title='Los destacados' image='assets/img/NoLoginImages/plomeria.jpg' />
                    </div>
                    <div className="col-md-4">
                        <InfoCard title='Tu historial' image='assets/img/NoLoginImages/carpintero.jpg' />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default LogInCardsWrapper;