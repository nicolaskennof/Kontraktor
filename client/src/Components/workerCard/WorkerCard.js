import React, { Component } from "react";
import { Container, Figure, Row, Col } from "react-bootstrap";
import ModalMessage from "../microCompMessage/ModalMessage"
import ModalPhone from "../microCompPhone/ModalPhone"
import Fav from "../microCompFav/Fav"
import Price from "../microCompPrice/Price"
import Rating from "../microCompRating/ModalRating"
import Quant from "../microCompQuant/Quant"
import Hired from "../microCompHired/Hired"
import "./style.css"
import ModalPhoneFav from "../modalPhoneFav/ModalPhoneFav"

let firstName = "Nicolas Jules R";
let lastName = "Kennof";
let occupation = "Plomero"
let workerImage = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"

class WorkerCard extends Component {

    state = {

    }

    calculateCostAverage = () => {
        let sum = 0;
        let total = 0
        this.props.kontratado.costRates.forEach(costRate => {
            sum += costRate.costRating
        })
        total = sum / this.props.kontratado.costRates.length;
        return total
    }



    render() {
        let props = this.props;

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
                        <div className="col-md-8">
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <h4><span id="workerNames">{props.kontratado.firstName} </span> <span id="workerLastNames">{props.kontratado.lastName}</span></h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="workerCardDetail"><span id="workerEmployment">{props.kontratado.profession.profession}</span></h5>
                                        </div>
                                        <div className="col-6 text-left">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <Price costRate={this.calculateCostAverage()} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <Rating quality={props.kontratado.qualityRate} />
                                </div>
                                <div className="col-md-3 text-center">
                                    <Quant quant={props.kontratado.hire} />
                                </div>
                                <div className="col-md-3 text-center">

                                </div>
                            </div>
                            <div className="col-md-2 my-auto">
                                <Row>
                                    <Col md={12} className="mb-2">
                                        <ModalMessage />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} className="mb-2">
                                        <ModalPhone contactPhone={props.kontratado.contactPhone} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Fav userId={props.userId} addFavs={props.addFavs} />
                                    </Col>
                                </Row>
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
            </div>
        )
    }
}

export default WorkerCard;