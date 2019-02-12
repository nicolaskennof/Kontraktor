import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import HeroImageFav from "../Components/HeroImage/HeroImageFav"
import Footer from "../Components/Footer/Footer"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"
import NoContent from "../Components/reviews/NoContentDiv"


function getUserMessages(user, kontratadoId) {
    return user.messages.filter(message => {
        return message.kontratado._id === kontratadoId
    })
}

function UserFavorite(props) {

    return (
        <div>
            <HeroImageFav />
            <Wrapper>
                {
                    props.user.favourites.length ?
                        <div>
                            <Filters isUserFilter={true} />
                            {props.user.favourites.map(favourite => {
                                return <WorkerCard key={favourite._id} userMessages={getUserMessages(props.user, favourite.kontratado._id)} updateUser={props.updateUser} user={props.user} kontratado={favourite.kontratado} />
                            })}
                        </div> :
                        <NoContent noContentMessage="Todavía no has añadido ningún Kontratado a tu lista de Favoritos" noContentTeam="Tu Equipo Kontratado" />
                }
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserFavorite


