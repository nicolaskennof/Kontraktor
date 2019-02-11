import React from "react"
import WorkersWrapper from "../Components/workersWrapper/WorkersWrapper"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Footer from "../Components/Footer/Footer"


function UserFavorite() {
    return (
        <div>
            <HeroImageMailbox />
            <WorkersWrapper>
              Desde mailbox!
            </WorkersWrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite