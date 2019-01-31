import React from "react";
import InfoCard from './infoCard'
import './style.css'



function InfoCardsWrapper(props) {
    return (
        <div >
            <InfoCard title='Favourites' text='bla bla , froy gracias' image='assets/img/NoLoginImages/pintura.jpg' />
            <InfoCard title='New ppl' text='bla bla , ahí va, maso' image='assets/img/NoLoginImages/plomeria.jpg' />
        </div>
    )
}
export default InfoCardsWrapper;