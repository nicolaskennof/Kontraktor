import React from "react"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import Footer from "../Components/Footer/Footer"
import KontratadoKonversationsWrapper from "../Components/KontratadoConversation/KontratadoKonversationsWrapper"
import NoContent from "../Components/reviews/NoContentDiv"


function UserFavorite(props) {
    return (
        <div>
            <HeroImageMailbox />
            <Wrapper>
                <h1>Todas tus conversaciones</h1>
                <hr />
                <br />
                <KontratadoKonversationsWrapper>
                {/* BEGIN PLACEHOLDER NO RESULTADOS */}
                <NoContent noContentMessage="Todavía ningún usuario se ha comunicado contigo" noContentTeam="Tu Equipo Kontratado" />
                {/* END PLACEHOLDER NO RESULTADOS */}
                </KontratadoKonversationsWrapper>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite