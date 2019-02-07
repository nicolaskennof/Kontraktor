import React from "react";
import NavBarStart from "../navBars/navBarStart"
import InfoCardsWrapper from "../infoCardsWrapper/infoCardsWrapper"
import ModalLogin from "../ModalLogin/ModalLogin"
import Search from "../Search/Search"
import WorkerProfileData from "../WorkerProfileData/WorkerProfileData"

function BeforeLogin(props) {
    return (

        <div>
            <NavBarStart />
            <Search />
            <ModalLogin facebookResponse = {props.facebookResponse} />
            <br/>
            <br/>
            <InfoCardsWrapper />
            <WorkerProfileData />
        </div>
            )
        }
export default BeforeLogin;