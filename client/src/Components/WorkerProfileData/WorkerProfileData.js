import React, { Component } from "react"
import { Form, InputGroup, Button, Col, Container, Image } from "react-bootstrap";
import StateSelector from "../StateSelector/StateSelector"
import Professions from "../Professions/Professions"
import "./style.css"
import API from "../../utils/API";

class WorkerProfileData extends Component {

    state = {
        validated: false,
        kontratadoId: '',
        firstName: '',
        lastName: '',
        contactPhone: '',
        email: '',
        description: '',
        state: '',
        county: '',
        profession: '',
        password: '',
        image: '',
        mdColumnSize: '4',
        workerDataBtnText: ' Guardar Cambios'
    };

    componentDidMount() {
        if (this.props.isSignup) {
            this.setState({
                mdColumnSize: "12",
                workerDataBtnText: " Regístrate",
                icon: "save"
            })
        }

        if (this.props.kontratado) {
            const { contactPhone, description, email, firstName, lastName, state, county, profession, _id, image } = this.props.kontratado;
            this.setState({
                kontratadoId: _id,
                contactPhone,
                description,
                email,
                firstName,
                lastName,
                state: state._id,
                county,
                profession: profession._id,
                image,
                icon: "sign-in-alt"
            })
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    handleStateChange = (state) => {
        this.setState({
            state
        });
    }

    handleCityChange = (county) => {
        this.setState({
            county
        });
    }

    handleProfessionChange = (profession) => {
        this.setState({
            profession
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            this.setState({ validated: true });
        } else {
            event.preventDefault();
            const { firstName, lastName, contactPhone, email, description, state, county, profession } = this.state;
            let kontratado = {
                firstName,
                lastName,
                contactPhone,
                email,
                description,
                state,
                county,
                profession,
            };

            if (this.props.isSignup) {
                kontratado.password = this.state.password;
                API.createKontratado(kontratado)
                    .then(response => {
                        this.props.logKontratado(response.data);
                    })
                    .catch(err => console.log(err));
            } else {
                while (document.querySelectorAll('div.valid-feedback').length > 0) {
                    document.querySelector('div.valid-feedback').remove();
                }
                API.updateKontratado(kontratado)
                    .then(result => {
                        API.getKontratado(result.data._id)
                            .then(currentKontratado => {
                                this.props.kontratadoUpdate(currentKontratado.data);
                            })
                            .catch(err => console.log(err.response))
                    })
                    .catch(err => console.log(err.response))
            }
        }
    }

    loadImage = () => {
        const selector = document.querySelector('input#uploadFileInput');
        selector.click();
    }

    selectorChange = () => {
        const button = document.querySelector('button#triggerUploadButton');
        button.click();
    }

    handleImageUpload = () => {
        const data = new FormData();
        data.append('uploadFile', document.getElementById('uploadFileInput').files[0]);
        API.saveImage(data, this.state.kontratadoId)
            .then(result => {
                API.getKontratado(this.state.kontratadoId)
                    .then(currentKontratado => {
                        this.setState({
                            image: result.data
                        }, () => {
                            this.props.kontratadoUpdate(currentKontratado.data);
                        })
                    })
                    .catch(err => console.log(err.response))
            })
            .catch(err => { console.log(err.response) })
    }

    render() {
        const { validated } = this.state;
        return (
            <Container>
                <div className="fileControl">
                    <input id="uploadFileInput" onChange={this.selectorChange} className="form-control" type="file" />
                    <button id="triggerUploadButton" onClick={this.handleImageUpload}></button>
                </div>
                <Form
                    noValidate
                    validated={validated}
                    className="profileForm"
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <Form.Row>
                        {!this.props.isSignup ?
                            <Col s={12} md={2}>
                                <div className="imgWrap">

                                    <Image
                                        src={this.state.image ? `/api/image/${this.state.image}` : "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png"}
                                        roundedCircle className="profilePicAccount" />
                                    <p className="profilePicChange"><br /><span onClick={this.loadImage} className="profilePicChangeLink"><i className="fas fa-camera"></i><br />Editar tu foto<br />de perfil</span></p>
                                </div>
                            </Col> : ""
                        }

                        <Col md={10}>
                            <Form.Row>
                                <Form.Group as={Col} md={this.state.mdColumnSize}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend"><i className="fas fa-user-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nombre"
                                            className="formInput rounded-right"
                                            value={this.state.firstName}
                                            name="firstName"
                                            onChange={this.handleInputChange}
                                        />
                                        <Form.Control.Feedback>
                                            Se ve bien!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Es necesario que ingreses tu nombre.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md={this.state.mdColumnSize} >
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend"><i className="fas fa-signature"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Apellido"
                                            className="formInput rounded-right"
                                            value={this.state.lastName}
                                            name="lastName"
                                            onChange={this.handleInputChange}
                                        />
                                        <Form.Control.Feedback>
                                            Se ve bien!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Es necesario que ingreses tu apellido.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Professions currentProfession={this.state.profession} onProfessionChange={this.handleProfessionChange} />

                            </Form.Row>
                            <Form.Row>
                                <div className={"col-md-" + this.state.mdColumnSize}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="12">
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend"><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    required
                                                    type="number"
                                                    placeholder="Celular"
                                                    className="formInput rounded-right"
                                                    value={this.state.contactPhone}
                                                    onChange={this.handleInputChange}
                                                    name="contactPhone"
                                                />
                                                <Form.Control.Feedback>
                                                    Se ve bien!
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Es necesario que ingreses tu celular.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="12" >
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Email"
                                                    aria-describedby="inputGroupPrepend"
                                                    className="formInput rounded-right"
                                                    required
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange}
                                                    name="email"
                                                />
                                                <Form.Control.Feedback>
                                                    Se ve bien!
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    Es necesario que ingreses tu correo electrónico.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    {this.props.isSignup ?
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" >
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend">@</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        aria-describedby="inputGroupPrepend"
                                                        className="formInput rounded-right"
                                                        required
                                                        onChange={this.handleInputChange}
                                                        name="password"
                                                    />
                                                <Form.Control.Feedback>
                                                        Se ve bien!
                                                </Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                        Es necesario que ingreses una contraseña.
                                                </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                        </Form.Row>
                                        : <div></div>}
                                </div>
                                <Form.Group as={Col} md={this.state.mdColumnSize}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon rounded-left" id="inputGroupPrepend"><i className="fas fa-hammer"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            onChange={this.handleInputChange}
                                            value={this.state.description}
                                            placeholder="Tell us something about you"
                                            name="description"
                                            as="textarea"
                                            rows="3"
                                            className="formInput rounded-right" />
                                        <Form.Control.Feedback>
                                            Se ve bien!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Es necesario que ingreses una descripción.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <div className={"col-md-" + this.state.mdColumnSize}>
                                    <StateSelector currentState={this.state.state} currentCity={this.state.county} handleStateChange={this.handleStateChange} handleCityChange={this.handleCityChange} />
                                </div>
                            </Form.Row>
                            <Form.Row>
                                <div className="col-md-4">
                                    <Button className="workerProfileBtn" type="submit"><i className={`fas fa-${this.state.icon}`}></i>{this.state.workerDataBtnText}</Button>
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