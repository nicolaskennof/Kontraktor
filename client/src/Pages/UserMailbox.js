import React from "react"
import Filters from "../Components/resultsFilters/Filters"
import Wrapper from "../Components/workersWrapper/commonWrapper"
import WorkerCard from "../Components/workerCard/WorkerCard"
import HeroImageMailbox from "../Components/HeroImage/HeroImageMailbox"
import Footer from "../Components/Footer/Footer"
import NoContent from "../Components/reviews/NoContentDiv"


function getDistinctKontratadoMessages(messages) {
    const kontratados = messages.map(message => message.kontratado._id);
    const distinctKontratados = new Set(kontratados);
    return [...distinctKontratados].map(distinctKontratado => {
        const kontratadoMessages = messages.filter(message => {
            return message.kontratado._id === distinctKontratado && !message.isUserMessage
        })
        return kontratadoMessages[kontratadoMessages.length - 1];
    })
}

function displayUserMessages({ user, updateUser }) {
    const kontratadoLastMessage = getDistinctKontratadoMessages(user.messages);
    if (kontratadoLastMessage === undefined) {
        return <NoContent noContentMessage="Todavía no te has comunicado con un Kontratado" noContentTeam="Tu Equipo Kontratado" />
    } else {
        return (
            <div>
                <Filters isUserFilter={true} />
                {kontratadoLastMessage.map(lastMessage => {
                    const kontratadoMessages = user.messages.filter(message => {
                        return lastMessage.kontratado._id === message.kontratado._id;
                    })
                    return <WorkerCard key={lastMessage._id} userMessages={kontratadoMessages} updateUser={updateUser} user={user} kontratado={lastMessage.kontratado} />
                })}
            </div>)
    }
}

function UserMailbox(props) {
    return (
        <div>
            <HeroImageMailbox />
            <Wrapper>
                {
                    props.user.messages.length ?
                        <div>
                            {displayUserMessages(props)}
                        </div>
                        : <NoContent noContentMessage="Todavía no te has comunicado con un Kontratado" noContentTeam="Tu Equipo Kontratado" />
                }
            </Wrapper>
            <Footer />
        </div>
    )
}

export default UserMailbox