import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import HeroImageFav from "../Components/HeroImage/HeroImageFav"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import WorkerCardFav from "../Components/WorkerCardFav/WorkerCardFav"


function UserFavorite(props) {

    return (
        <div>
            <HeroImageFav />
            <Wrapper>
            <Filters isUserFilter={true}/>
            {props.fullfav.map(favorite=>{
                                return  <WorkerCardFav userId={props.userId} favorite={favorite} addFavs={props.addFavs}  />
            })}
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite


