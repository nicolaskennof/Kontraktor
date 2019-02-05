import React from "react";
import NavBarUser from "../navBars/navBarUser"
import LogInCardsWrapper from "../infoCardsWrapper/logInCardsWrapper"
import ImgCarousel from '../carousel/carousel'
import Filters from "../resultsFilters/Filters"
import WorkerCard from "../workerCard/WorkerCard"

function AfterLogin(props) {
    return (

        <div>
            <NavBarUser />
            <br />
            <br />
            <button onClick={props.facebookLogout} className="button">Log out</button>
            <ImgCarousel />
            <br />
            <LogInCardsWrapper />
            <br />
            <Filters />
            <WorkerCard />
        </div>
    )
}
export default AfterLogin;