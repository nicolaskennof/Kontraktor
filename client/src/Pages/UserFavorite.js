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
<<<<<<< HEAD
            <Filters isUserFilter={true}/>
            <WorkersWrapper>
            {props.myFavs.map(favorite=>{
                                return  <WorkerCardFav userId={props.userId} myFavs={props.myFavs} addFavs={props.addFavs} favorite={favorite}/>
            })}
            </WorkersWrapper>
=======
            <Wrapper>
                <Filters isUserFilter={true}/>
                <WorkerCardFav userId={props.userId}  myFavs={props.myFavs} addFavs={props.addFavs}  favProfession= {props.favProfession} results={props.results} quant={props.resultHires} quality={props.resultQualityRate} costRate={props.resultCostRate} />
            </Wrapper>
>>>>>>> master
            <Footer />
        </div>
    )
}

export default UserFavorite


