import React from "react";
import { Figure } from "react-bootstrap";
import "./style.css"

function MessageInChat(props) {
    return (
        <div>
            <br/>
            <div className="row">
                <div className="col-md-2 my-auto">
                    <img className='border rounded-circle chatPic' src={props.image} alt='' />
                </div>
                <div className="col-md-10 my-auto">
                    <span>{props.message}</span>
                </div>
            </div>
        </div>
    )
}

export default MessageInChat