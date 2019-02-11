import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Footer from "../Components/Footer/Footer"


function UserMailbox() {
    return (
        <div>
            <HeroImageMailbox />
            <Filters isUserFilter={true}/>
            <WorkersWrapper>
                Mensajes
                <WorkerCard />
            </WorkersWrapper>
            <Footer />
        </div>
    )
}

export default UserMailbox