import React from "react"
import { Container } from "react-bootstrap"
import "./style.css"

function Wrapper(props) {
    return (
        <div className="commonContainer mt-5 mb-5">
            {props.children}
        </div>
    )
}

export default Wrapper