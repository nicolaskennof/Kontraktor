import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Footer from "../Components/Footer/Footer"


function UserMailbox() {
    return (
        <div>
            <HeroImageMailbox />
            <Wrapper>
                <Filters isUserFilter={true}/>
                <WorkerCard />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserMailbox