import React from "react";
import "./style.css"

function Quant(props) {
    return (
        <div>
        <p><b># Kontratado: </b>
        <br />
        <span className="workerCardDetail" id="timesKontrakted">{props.quant}</span> x</p>
        </div>
    )
}

export default Quant