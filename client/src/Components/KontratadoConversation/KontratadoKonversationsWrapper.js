import React from "react"
import KontratadoConversation from "../KontratadoConversation/KontratadoConversation"
import "./style.css"
import "./KontratadoKonversationsWrapper.css"

function getDistinctUserMessages(messages){
    const users = messages.map(message=>message.user._id);
    const distinctUsers = new Set(users);
    return [...distinctUsers].map(distinctUser=>{
        const userMessages =  messages.filter(message=>{
            return message.user._id === distinctUser && message.isUserMessage
        });
        return userMessages[userMessages.length-1];
    })
}

function createKontratadoConversations({messages,image}){
    const lastUserMessages = getDistinctUserMessages(messages);
    return lastUserMessages.map(lastUserMessage=>{
        const userMessages =  messages.filter(message=>{
            return lastUserMessage.user._id === message.user._id; 
        })
        return <KontratadoConversation 
        key = {lastUserMessage.user._id}
        kontratadoImage = {image}
        userMessages = {userMessages}
        userLastMessage={lastUserMessage.message} 
        fullName = {lastUserMessage.user.fullName}
        userFacebookPic={`https://graph.facebook.com/${lastUserMessage.user.facebookProvider.id}/picture?type=square`} />
    })   
}

function KontratadoKonversationsWrapper(props) {
    return (
        <div>
            {createKontratadoConversations(props.kontratado)}
        </div>
    )
}

export default KontratadoKonversationsWrapper