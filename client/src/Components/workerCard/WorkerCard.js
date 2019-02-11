import React from "react";
import { Container, Figure, Row, Col } from "react-bootstrap";
import ModalMessage from "../microCompMessage/ModalMessage"
import ModalPhone from "../microCompPhone/ModalPhone"
import Fav from "../microCompFav/Fav"
import Price from "../microCompPrice/Price"
import Rating from "../microCompRating/ModalRating"
import Quant from "../microCompQuant/Quant"
import Hired from "../microCompHired/Hired"
import "./style.css"

let firstName = "Nicolas Jules R";
let lastName = "Kennof";
let occupation = "Plomero"
let workerImage = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"

function WorkerCard() {
    return (
        <div>
            <Figure className="workerCard p-1">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <Figure.Image
                            className="workerImage my-2"
                            alt=""
                            src={workerImage}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="row my-3">
                            <div className="col-md-6">
                                <h4><span id="workerNames">{firstName}</span> <span id="workerLastNames">{lastName}</span></h4>
                                <div className="row">
                                    <div className="col-6">
                                        <h5 className="workerCardDetail"><span id="workerEmployment">{occupation}</span></h5>
                                    </div>
                                    <div className="col-6 text-left">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <p><b>Rango de precio:</b></p>
                                <Price />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <Rating />
                            </div>
                            <div className="col-md-3 text-center">
                                <Quant />
                            </div>
                            <div className="col-md-3 text-center">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-auto">
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col md={12} className="mb-2">
                                        <ModalMessage />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="mb-2">
                                        <ModalPhone />
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                        <Col md={12}>
                                            <Fav className="mr-3" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <Hired className="mr-3" />
                                        </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    </div>
            </Figure>
        </div >
            )
        }
        
export default WorkerCard;