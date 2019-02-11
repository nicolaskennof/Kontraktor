import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerProfileData from "../Components/WorkerProfileData/WorkerProfileData"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import HeroImageProfile from "../Components/HeroImage/HeroImageProfile"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import Reviews from "../Components/reviews/reviews"


function KontratadoProfile() {
    return (
        <div>
            <HeroImageProfile />
            <Wrapper>
                <h1>Tu datos</h1>
                <hr />
                <WorkerProfileData />
                <br />
                <br />
                <h1>Tus reseñas</h1>
                <hr />
                <Reviews />
            </Wrapper>
            <Footer />
        </div>
    )
}

export default KontratadoProfile