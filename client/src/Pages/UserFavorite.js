import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import HeroImageFav from "../Components/HeroImage/HeroImageFav"
import Footer from "../Components/Footer/Footer"

function UserFavorite() {
    return (
        <div>
            <HeroImageFav />
            <Wrapper>
                <Filters isUserFilter={true}/>
                <WorkerCard />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite