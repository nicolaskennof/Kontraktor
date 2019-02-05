import React from "react";
import NavBarUser from "../navBars/navBarUser"
import LogInCardsWrapper from "../infoCardsWrapper/logInCardsWrapper"
import ImgCarousel from '../carousel/carousel'

function UserIn(props) {
    return (

        <div>

            <NavBarUser />
            <br />
            <br />
            <ImgCarousel />
            <br />
            <LogInCardsWrapper />
            <br />
        </div>
    )
}
export default UserIn;