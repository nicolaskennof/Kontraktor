import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"

function UserMailbox() {
    return (
        <div>
            <Filters isUserFilter={true}/>
            <WorkersWrapper>
                Mensajes
                <WorkerCard />
            </WorkersWrapper>
        </div>
    )
}

export default UserMailbox