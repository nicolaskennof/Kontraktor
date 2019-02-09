import React, { Component } from 'react'
import { Row } from "react-bootstrap"
import "./style.css";


function Reviews() {
    
    return (
        <div>
            <Row>
                <div class="col-8">
                    <div class="row">
                        <div class="col-12"><div class="mini-box">Ana estuvo muy linda y hermosa conmigo, Arregló mis tuberias en tiempo record</div></div>
                        <div class="col-12"><div class="mini-box">Nico estuvo muy lindo y hermoso conmigo, Arregló mis tuberias en tiempo record</div></div>
                        <div class="col-12"><div class="mini-box">Paco estuvo muy lindo y hermoso conmigo, Arregló mis tuberias en tiempo record</div></div>
                        <div class="col-12"><div class="mini-box">Froys estuvo muy lindo y hermoso conmigo, Arregló mis tuberias en tiempo record</div></div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="big-box">Tu calificación promedia</div>

                    <div class="big-box">Tu costo promedio<div className="col-md-3 text-right">
                        <span class="fas fa-dollar-sign checked mr-1"></span>
                        <span class="fas fa-dollar-sign checked mr-1"></span>
                        <span class="fas fa-dollar-sign mr-1"></span>
                        <span class="fas fa-dollar-sign mr-1"></span>

                    </div></div>

                </div>

            </Row>

        </div>
    )
}

export default Reviews;