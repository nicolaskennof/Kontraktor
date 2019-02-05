import React from "react";
import NavBarStart from "../navBars/navBarStart"
import InfoCardsWrapper from "../infoCardsWrapper/infoCardsWrapper"
import Filters from "../resultsFilters/Filters"
import WorkerCard from "../workerCard/WorkerCard"

function BeforeLogin(props) {
    return (

        <div>
            <NavBarStart />
            
            <br/>
            <br/>
            <InfoCardsWrapper />
            <Filters />
            <WorkerCard />
        </div>
            )
        }
export default BeforeLogin;