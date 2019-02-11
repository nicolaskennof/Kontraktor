import React from "react"
import KontratadoConversation from "../KontratadoConversation/KontratadoConversation"
import "./style.css"
import "./KontratadoKonversationsWrapper.css"



function KontratadoKonversationsWrapper(props) {
    return (
        <div>
            <KontratadoConversation userLastMessage="Entonces cuanto me cobrarías para todo eso?" userFirstName="Nicolas Jules R" userLastName="Kennof" userFacebookPic="https://avatars3.githubusercontent.com/u/41691887?s=460&v=4" />
        </div>
    )
}

export default KontratadoKonversationsWrapper