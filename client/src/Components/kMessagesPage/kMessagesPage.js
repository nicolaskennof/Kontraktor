import React from "react";
import KNavBar from "../kNavBar/kNavBar"
import KMessages from "../kMessagesPage/kMessages"
import { Container } from "react-bootstrap"



function KMessagesPage(props) {
    return (

        <div>
            <h1>Kontratado Messages Page</h1>
            <br />
            <KNavBar />
            <br />
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <KMessages user='Ana G' text='Entonces sería aprox $200, ¿cierto?' />
                        <br />
                    </div>

                    <div className="col-md-12">
                        <KMessages user='Arly BB' text='Gracias Paco, no se te olvide...' />
                        <br />
                    </div>

                    <div className="col-md-12">
                        <KMessages user='Nico BB' text='Entonces nos vemos a las 5 pm' />
                        <br />
                    </div>

                </div>
            </Container>
            <br />

        </div>
    )
}
export default KMessagesPage;