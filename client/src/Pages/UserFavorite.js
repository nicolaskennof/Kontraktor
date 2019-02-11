import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import HeroImageFav from "../Components/HeroImage/HeroImageFav"
import Footer from "../Components/Footer/Footer"

function UserFavorite() {
    return (
        <div>
            <HeroImageFav />
            <Filters isUserFilter={true}/>
            <WorkersWrapper>
                <WorkerCard />
            </WorkersWrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite