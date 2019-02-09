import React from "react";
import KStatsCard from './kStatsCard'
import { Container } from "react-bootstrap";

function KStats(props) {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        < KStatsCard header='Calificación promedio' title='4.5' text='Cantidad de reseñas: 45' />
                    </div>
                    <div className="col-md-4">
                        <KStatsCard header='Cantidad de trabajos realizados' title='100' text='desde tu comienzo en feb 2019' />
                    </div>
                    <div className="col-md-4">
                        <KStatsCard header='Cantidad de favoritos' title='10' text='Personas que te han añadido a sus favoritos' />
                    </div>
                </div>
            </Container>
        </div >
    )
}
export default KStats;