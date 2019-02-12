import React, { Component } from "react";
import { Container, Figure, Row, Col } from "react-bootstrap";
import ModalMessage from "../microCompMessage/ModalMessage"
import ModalPhoneFav from "../modalPhoneFav/ModalPhoneFav"
import Fav from "../microCompFav/Fav"
import Price from "../microCompPrice/Price"
import Rating from "../microCompRating/ModalRating"
import Quant from "../microCompQuant/Quant"
import Hired from "../microCompHired/Hired"
import "./style.css"
import UserFavorite from "../../Pages/UserFavorite";



let firstName = "Nicolas";
let lastName = "Kennof";
let occupation = "Plomero"
let workerImage = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"

class WorkerCard extends Component {
    state = {

    }

    calculateCostAverage = () => {
        let sum = 0;
        let total = 0
        this.props.favorite.costRates.forEach(costRate => {
            sum += costRate.costRating
        })
        total = sum / this.props.favorite.costRates.length;
        return total
    }

    calculateRating = () => {
        let sum = 0;
        let total = 0;
        this.props.favorite.qualityRates.forEach(qualityRate => {
            sum += qualityRate.quality
        })
        total = sum / this.props.favorite.qualityRates.length
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
                        <div className="col-md-7">
                            <div className="row my-3">
                                <div className="col-md-6">
                                    <h4><span id="workerNames">{props.favorite.firstName} </span> <span id="workerLastNames">{props.favorite.lastName}</span></h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="workerCardDetail"><span id="workerEmployment">{props.favorite.profession.profession}</span></h5>
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
                                    <Rating quality={this.calculateRating()} />
                                </div>
                                <div className="col-md-3 text-center">
                                    <Quant quant={props.favorite.hires.length} />
                                </div>
                                <div className="col-md-3 text-center">

                                </div>
                            </div>
                        </div>
                        <Col md={3}>
                            <Row className="workerCardBtnRow">
                                <Col md={6}>
                                    <br />
                                    <ModalMessage />
                                    <br />
                                    <ModalPhoneFav contactPhone={props.kontratado.contactPhone} />
                                </Col>
                                <Col md={6}>
                                    <br />
                                    <Fav userId={props.userId} addFavs={props.addFavs} />
                                    <br /><br />
                                    <Hired />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Figure>
            </div >
        )
    }
}
export default WorkerCard;