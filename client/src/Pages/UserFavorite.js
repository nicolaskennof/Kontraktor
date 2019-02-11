import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCardFav from "../Components/WorkerCardFav/WorkerCardFav"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import HeroImageFav from "../Components/HeroImage/HeroImageFav"
import Footer from "../Components/Footer/Footer"

function UserFavorite(props) {

    return (
        <div>
            <HeroImageFav />
            <Filters isUserFilter={true}/>
            <WorkersWrapper>
            {props.myFavs.map(favorite=>{
                                return  <WorkerCardFav userId={props.userId} myFavs={props.myFavs} addFavs={props.addFavs} favorite={favorite}/>
            })}
            </WorkersWrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite


