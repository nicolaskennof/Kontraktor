import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkerCard from "../Components/workerCard/WorkerCard"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"

function UserFavorite() {
    return (
        <div>
            <Filters />
            <WorkersWrapper>
              Desde profile!
            </WorkersWrapper>
        </div>
    )
}

export default UserFavorite