import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCardFav from "../Components/WorkerCardFav/WorkerCardFav"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"

function UserFavorite(props) {
    return (
        <div>
            <Filters />
            <WorkersWrapper>
                <WorkerCardFav userId={props.userId}  myFavs={props.myFavs} addFavs={props.addFavs}  favProfession= {props.favProfession} results={props.results} quant={props.resultHires} quality={props.resultQualityRate} costRate={props.resultCostRate} />
            </WorkersWrapper>
        </div>
    )
}

export default UserFavorite