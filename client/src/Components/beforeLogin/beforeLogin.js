import React from "react";
import NavBarStart from "../navBars/navBarStart"
import InfoCardsWrapper from "../infoCardsWrapper/infoCardsWrapper"
import ModalLogin from "../ModalLogin/ModalLogin"
import Search from "../Search/Search"

function BeforeLogin(props) {
    return (

        <div>
            <NavBarStart />
            <Search />
            <ModalLogin />
            
            <br/>
            <br/>
            <InfoCardsWrapper />
        </div>
            )
        }
export default BeforeLogin;