import React from "react"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import Footer from "../Components/Footer/Footer"
import KontratadoKonversationsWrapper from "../Components/KontratadoConversation/KontratadoKonversationsWrapper"

function UserFavorite(props) {
    return (
        <div>
            <HeroImageMailbox />
            <Wrapper>
                <h1>Todas tus conversaciones</h1>
                <hr />
                <br />
                <KontratadoKonversationsWrapper kontratadoUpdate={props.kontratadoUpdate} kontratado={props.kontratado} />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite