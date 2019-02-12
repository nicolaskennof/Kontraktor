import React, { Component } from "react";
import { Figure, Row, Col } from "react-bootstrap";
import ModalPhone from "../microCompPhone/ModalPhone"
import Fav from "../microCompFav/Fav"
import Price from "../microCompPrice/Price"
import Rating from "../microCompRating/ModalRating"
import Quant from "../microCompQuant/Quant"
import Hired from "../microCompHired/Hired"
import "./style.css"
import helpers from "../../utils/helpers"
import ModalMessage from "../microCompMessage/ModalMessage"

class WorkerCard extends Component {

    state = {


    }

    getFavouriteId = () => {
        const kontratadoId = this.props.kontratado._id;
        const favouriteFilter = this.props.user.favourites.filter(favourite => {
            return favourite.kontratado._id === kontratadoId
        })
        return favouriteFilter.length ? favouriteFilter[0]._id : '';
    }

    getHiredId = () => {
        const kontratadoId = this.props.kontratado._id;
        const hiredFilter = this.props.user.hires.filter(hire => {
            return hire.kontratado === kontratadoId
        })
        return hiredFilter.length ? hiredFilter[0]._id : '';
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
                                src={props.kontratado.image ? `/api/image/${props.kontratado.image}` : helpers.getDefaultImage() } 
                            />
                        </div>
                        <div className="col-md-7">
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
                                    <p><b>Rango de precio:</b></p>
                                    <Price costRate={helpers.calculateCostRating(props.kontratado.costRates)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 text-left">
                                    <Rating userId = {props.user._id} kontratadoId = {props.kontratado._id} updateUser={props.updateUser} workerName = {`${props.kontratado.firstName} el ${props.kontratado.profession.profession}`} quality={helpers.calculateQualityRating(props.kontratado.qualityRates)} />
                                </div>
                                <div className="col-md-3 text-center">
                                    <Quant quant={props.kontratado.hires.length} />
                                </div>
                                <div className="col-md-3 text-center">

                                </div>
                            </div>
                        </div>
                        <Col md={3}>
                            <Row className="workerCardBtnRow">
                                <Col md={6}>
                                    <br />
                                    <ModalMessage 
                                    updateUser={props.updateUser}
                                    user = {props.user}
                                    isKontratado={false}
                                    fullName={`${props.kontratado.firstName} ${props.kontratado.lastName}`}
                                    userMessages={props.userMessages}
                                    kontratadoImage={props.kontratado.image}
                                    kontratadoId={props.kontratado._id}
                                    userId={props.user._id}
                                    />
                                    <br />
                                    <ModalPhone firstName={props.kontratado.firstName} lastName={props.kontratado.lastName} contactPhone={props.kontratado.contactPhone} />
                                </Col>
                                <Col md={6}>
                                    <br />
                                    <Fav updateUser={this.props.updateUser} kontratadoId={this.props.kontratado._id} userId={this.props.user._id} favouriteId={this.getFavouriteId()} />
                                    <br />
                                    <Hired updateUser={this.props.updateUser} kontratadoId={this.props.kontratado._id} userId={this.props.user._id} hireId={this.getHiredId()} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Figure>
            </div>
        )
    }
}

export default WorkerCard;