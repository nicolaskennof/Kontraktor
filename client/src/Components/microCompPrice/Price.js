import React from "react";
import "./style.css"

function Price(props) {
    let myClasses=[];
    
for(let i=0; i<5; i++){
 
    if(props.costRate>i){
        myClasses.push("fas fa-dollar-sign checked mr-1")
    }else{
        myClasses.push("fas fa-dollar-sign mr-1")
    }
}

    return (
        <p> <b>Rango de precio:</b><br />
            <span  className={myClasses[0]}></span> 
            <span className={myClasses[1]}></span>
            <span className={myClasses[2]}></span>
            <span  className={myClasses[3]}></span>
            <span className={myClasses[4]}></span>
        </p>
    )
}

export default Price