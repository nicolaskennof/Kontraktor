import React from "react";
import "./style.css"

let kontraktedAmount = 48;

function Quant() {
    return (
        <div>
        <p><b># Kontratado: </b>
        <br />
        <span className="workerCardDetail" id="timesKontrakted">{kontraktedAmount}</span> x</p>
        </div>
    )
}

export default Quant