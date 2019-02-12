import React from "react";
import KStatsCard from './kStatsCard'
import { Container } from "react-bootstrap";
import helpers from "../../utils/helpers"

function KStats(props) {
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        < KStatsCard 
                            header='Calificación promedio' 
                            title={helpers.calculateQualityRating(props.kontratado.qualityRates)} 
                            text={`Cantidad de reseñas de usuarios: ${props.kontratado.reviews.length}`} />
                    </div>
                    <div className="col-md-4">
                        <KStatsCard header='Cantidad de trabajos' 
                        title={props.kontratado.hires.length} 
                        text={`desde tu comienzo en febrero ${new Date(props.kontratado.registered_date).getFullYear()}`} />
                    </div>
                    <div className="col-md-4">
                        <KStatsCard header='Cantidad de favoritos'
                         title={props.kontratado.favourites.length}
                         text='te han añadido a sus favoritos' />
                    </div>
                </div>
            </Container>
        </div >
    )
}
export default KStats;