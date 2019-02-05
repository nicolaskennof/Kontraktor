import React from "react";
import InfoCard from './infoCard';
import './style.css';
import { Container } from "react-bootstrap";



function InfoCardsWrapper(props) {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        <InfoCard title='Quiénes somos' text='' image='assets/img/NoLoginImages/quienessomos.jpg' />
                    </div>
                    <div className="col-md-4">
                        <InfoCard title='Por qué Kontratando' text='Contrata a los expertos para que hagan el trabajo' image='assets/img/NoLoginImages/pintor.jpg' />
                    </div>
                    <div className="col-md-4">
                        <InfoCard title='Historias de éxito' text='5K usuarios en CDMX' image='assets/img/NoLoginImages/historiasdeexito.jpg' />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default InfoCardsWrapper;