import React from "react";
import { Container, Figure, Button } from "react-bootstrap";
import Modals from "../modals/Modals"
import "./style.css"

let kontraktedAmount = 48;
let firstName = "Nicolas Jules R";
let lastName = "Kennof";
let occupation = "Plomero"
let workerImage = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"

function WorkerCard() {
    return (
        <div>
            <Container>
                <Figure className="workerCard p-1">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <Figure.Image
                                className="workerImage border-right my-2"
                                alt=""
                                src={workerImage}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <h4><span id="workerNames">{firstName}</span> <span id="workerLastNames">{lastName}</span></h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="workerCardDetail"><span id="workerEmployment">{occupation}</span></h5>
                                        </div>
                                        <div className="col-6 text-left">
                                            <Button className="mr-1" variant="danger" id="favoriteBtn"><i class="fas fa-heart"></i></Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <p><b>Rango de precio:</b><br />
                                        <span class="fas fa-dollar-sign checked mr-1"></span>
                                        <span class="fas fa-dollar-sign checked mr-1"></span>
                                        <span class="fas fa-dollar-sign checked mr-1"></span>
                                        <span class="fas fa-dollar-sign mr-1"></span>
                                        <span class="fas fa-dollar-sign mr-1"></span>
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align">
                                        <span className="fa fa-hammer" aria-hidden="true"></span>
                                    </Button>
                                    <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align">
                                        <span className="fa fa-hammer" aria-hidden="true"></span>
                                    </Button>
                                    <Button className="btn rating btn-warning btn-sm mr-1" aria-label="Left Align">
                                        <span className="fa fa-hammer" aria-hidden="true"></span>
                                    </Button>
                                    <Button className="btn rating btn-grey btn-sm mr-1" aria-label="Left Align">
                                        <span className="fa fa-hammer" aria-hidden="true"></span>
                                    </Button>
                                    <Button className="btn rating btn-grey btn-sm" aria-label="Left Align">
                                        <span className="fa fa-hammer" aria-hidden="true"></span>
                                    </Button>
                                </div>
                                <div className="col-md-3 text-center">
                                    <p><b># Kontratado: </b><span className="workerCardDetail" id="timesKontrakted">{kontraktedAmount}</span> x</p>
                                </div>
                                <div className="col-md-3 text-center">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 my-auto">
                            <Modals />
                        </div>
                    </div>
                </Figure>
            </Container>
        </div >
    )
}

export default WorkerCard;