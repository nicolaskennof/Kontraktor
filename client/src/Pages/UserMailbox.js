import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Footer from "../Components/Footer/Footer"
import NoContent from "../Components/reviews/NoContentDiv"


function UserMailbox() {
    return (
        <div>
            <HeroImageMailbox />
            <Wrapper>
                <Filters isUserFilter={true}/>
                {/* BEGIN PLACEHOLDER NO RESULTADOS */}
                <NoContent noContentMessage="Todavía no te has comunicado con un Kontratado" noContentTeam="Tu Equipo Kontratado" />
                {/* END PLACEHOLDER NO RESULTADOS */}
                <WorkerCard />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserMailbox