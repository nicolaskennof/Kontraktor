import React from "react";
import { Button, Modal, ButtonToolbar, Container, Form, Row, Col } from "react-bootstrap";
import "./style.css"
import API from '../../utils/API'


class RatingModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ratingModal: false,
            review : '',
            showErrors : false, 
            currentError : '',
            rating : '',
            cost : ''
        };
    }

    handleCostChange = (e) => {
        this.setState({cost:e.target.value})
    }

    handleRatingChange = (e) => {
        this.setState({rating:e.target.value})
    }

    handleReviewChange = (e) => {
        this.setState({review : e.target.value})
    }

    handleSave = () => {
        const {review,rating,cost} = this.state;
        const {userId,kontratadoId,updateUser} = this.props;
        
        if (review && rating && cost){
            const reviewObject = {
                review,
                kontratado : kontratadoId,
                user : userId
            }
    
            const ratingObject = {
                quality : rating,
                kontratado : kontratadoId, 
                user : userId
            }
    
            const costObject = {
                costRating : cost,
                kontratado : kontratadoId,
                user : userId
            }

            API.insertReview(reviewObject)
                .then(insertedReview=>{
                    API.insertQualityRate(ratingObject)
                        .then(insertedRating=>{
                            API.insertCostRate(costObject)
                                .then(insertedCost=>{
                                    API.getUserById(userId)
                                        .then(result=>{
                                            this.setState({
                                                review : '',
                                                rating : '',
                                                cost : '',
                                                ratingModal : false
                                            }, () => {
                                                updateUser(result.data);
                                            } )
                                        })
                                })
                        })
                })

        } else {
            this.setState({
                showErrors : true, 
                currentError : "Es necesario que ingreses calificación calidad/servicio así como un reseña"
            })
        }
    }

    render() {
        let myClasses = [];
        let ratingClose = () => {
            this.setState({ 
                ratingModal: false,
                review : '',
                showErrors : false,
                currentError : '', 
                cost : '',
                rating : ''
            });
        } 
        let var1 = this.props.quality;
        for (let i = 0; i < 5; i++) {

            if (var1 > i) {
                myClasses.push("btn rating btn-warning btn-sm mr-1")
            } else {
                myClasses.push("btn rating btn-grey btn-sm mr-1")
            }
        }


        return (
            <ButtonToolbar>
                <Button className={myClasses[0]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[1]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[2]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[3]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>
                <Button className={myClasses[4]} aria-label="Left Align" onClick={() => this.setState({ ratingModal: true })}>
                    <span className="fa fa-hammer" aria-hidden="true"></span>
                </Button>

                <Modal
                    size="lg"
                    show={this.state.ratingModal}
                    onHide={ratingClose}
                    aria-labelledby="modal-rating"
                    centered
                >
                    <Modal.Header closeButton className="border-dark">
                        <Modal.Title id="modal-rating">
                            ¿Qué opinan nuestros usuarios de {this.props.workerName}?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            {/*Will insert review component here later!*/}
                        </Container>
                        <br />
                        <div className="row">
                            <div className="col-md-8">
                                <Form.Group className="ratingSubmitBtn">
                                    <Form.Control onChange={this.handleReviewChange} value={this.state.review} as="textarea" rows="3" />
                                </Form.Group>
                            </div>
                            <div className="col-md-2">
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="serviceRating">
                                                <Form.Control  onChange = {this.handleRatingChange} as="select">
                                                    <option value="">Servicio</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Form>
                                            <Form.Group controlId="costRating">
                                                <Form.Control onChange= {this.handleCostChange} as="select">
                                                    <option value="">Costo</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                            </div>
                            <Col md={2} className="text-center">
                                <Button variant="success" onClick={this.handleSave} className="ratingSubmitBtn">
                                    <i className="fas fa-check"></i>
                                </Button>
                            </Col>
                            
                           
                        </div>
                        {
                                this.state.showErrors ? 
                                <p className="error">{this.state.currentError}</p> :
                                <div></div>
                            }
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        );
    }
}

export default RatingModal;