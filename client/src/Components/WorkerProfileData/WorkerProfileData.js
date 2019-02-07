import React, { Component } from "react"
import { Form, InputGroup, Button, Col, Container, Image } from "react-bootstrap";
import "./style.css"

let lastProfilePicValue = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png";
let lastFNameValue = "Nicolas Jules R";
let lastLNameValue = "Kennof";
let lastEmailValue = "nicolas.kennof@gmail.com";
let lastCountyValue = "Santiago Momóxpan";
let lastCityValue = "Puebla";
let lastStateValue = "Puebla";
let lastPhoneValue = "2229038667";
let stateArray = "No olvides integrar eso!";
let countyArray = "No olvides esto tampoco amigo!";
let skillsArray = "No olvides esoooooo tu!";
let cityArray = "Bueno ya sabes que hay que arreglar este desmadre"


class WorkerProfileData extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = { validated: false };
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    render() {
        const { validated } = this.state;
        return (
            <Container>
                <Form
                    noValidate
                    validated={validated}
                    onSubmit={e => this.handleSubmit(e)}
                    className="profileForm"
                >
                    <Form.Row>
                        <Col s={12} md={2}>
                            <div className="imgWrap">
                            <Image src="http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png" roundedCircle className="profilePicAccount" />
                            <p className="profilePicChange"><br /><a className="profilePicChangeLink" href="#"><i class="fas fa-camera"></i><br />Editar tu foto<br />de perfil</a></p>
                            </div>
                        </Col>
                        <Col md={10}>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-user-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    defaultValue={lastFNameValue}
                                    className="formInput"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-hammer"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select" className="formInput">
                                    <option>Elija tus habilidades (3 max.)</option>
                                    <option>{skillsArray}</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Favor de ingresar minimo una habilidad.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom05">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-archway"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control as="select" className="formInput">
                                    <option>Elija tu municipio...</option>
                                    <option>{countyArray}</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Favor de ingresar tu municipio.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <div className="col-md-4">
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-signature"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Apellido"
                                            defaultValue={lastLNameValue}
                                            className="formInput"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            defaultValue={lastEmailValue}
                                            aria-describedby="inputGroupPrepend"
                                            className="formInput"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Favor de ingresar tu dirección de correo electrónico.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </div>
                        <Form.Group as={Col} md="4" controlId="exampleForm.ControlTextarea1">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-hammer"></i></InputGroup.Text>
                                </InputGroup.Prepend>

                                <Form.Control as="textarea" rows="3" className="formInput" />
                            </InputGroup>
                        </Form.Group>
                        <div className="col-md-4">
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-university"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" className="formInput">
                                            <option>Elija tu ciudad...</option>
                                            <option>{cityArray}</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Favor de ingresar tu ciudad.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-map-marked-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" className="formInput">
                                            <option>Elija tu estado...</option>
                                            <option>{stateArray}</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            Favor de ingresar tu estado.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </div>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i class="fas fa-mobile-alt"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Celular"
                                    defaultValue={lastPhoneValue}
                                    className="formInput"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <div className="col-md-4">
                            <Button className="workerProfileBtn" type="submit"><i class="fas fa-save"></i> Guardar cambios</Button>
                        </div>
                    </Form.Row>
                    </Col>
                    </Form.Row>
                </Form>
            </Container >
        );
    }
}

export default WorkerProfileData