import React, { Component } from "react"
import { Form, InputGroup, Button, Col, Container, Image } from "react-bootstrap";
import StateSelector from "../StateSelector/StateSelector"
import Professions from "../Professions/Professions"
import "./style.css"
import API from "../../utils/API";

class WorkerProfileData extends Component {

    state = {
        validated: false,
        firstName: '',
        lastName: '',
        contactPhone: '',
        email: '',
        description: '',
        state: '',
        city: '',
        profession: '',
        password: '',
        mdColumnSize: '4',
        workerDataBtnText: ' Guardar Cambios'
    };

    componentDidMount() {
        if(this.props.isSignup){
            this.setState({
                mdColumnSize : "12",
                workerDataBtnText: " Regístrate",
                icon: "save"
            })
        }
        
        if (this.props.kontratado) {
            const { firstName, lastName } = this.props.kontratado;
            this.setState({
                firstName,
                lastName,
                icon: "sign-in-alt"
            })
        }
    }

    handleStateChange = (state) => {
        this.setState({
            state
        });
    }

    handleCityChange = (city) => {
        this.setState({
            city
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
        }
        this.setState({ validated: true });
        const {firstName, lastName, contactPhone, email, description, state, city, profession, password} = this.state;
        const kontratado = {
            firstName,
            lastName,
            contactPhone,
            email,
            description,
            state,
            city,
            profession,
            password
        };

        API.createKontratado(kontratado)
            .then( response =>{
                this.props.logKontratado(response.data);
            })
            .catch(err=>console.log(err)); 
    }

    render() {
        const { validated } = this.state;
        return (
            <Container>
                <Form
                    noValidate
                    validated={validated}
                    className="profileForm"
                >
                    <Form.Row>
                        {!this.props.isSignup ?
                            <Col s={12} md={2}>
                                <div className="imgWrap">
                                    <Image src="http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png" roundedCircle className="profilePicAccount" />
                                    <p className="profilePicChange"><br /><a className="profilePicChangeLink" href="https://localhost:3000"><i className="fas fa-camera"></i><br />Editar tu foto<br />de perfil</a></p>
                                </div>
                            </Col> : ""
                        }

                        <Col md={10}>
                            <Form.Row>
                                <Form.Group as={Col} md={this.state.mdColumnSize}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-user-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nombre"
                                            className="formInput"
                                            value={this.state.firstName}
                                            name="firstName"
                                            onChange = {this.handleInputChange}
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md={this.state.mdColumnSize} >
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-signature"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Apellido"
                                            className="formInput"
                                            value={this.state.lastName}
                                            name = "lastName"
                                            onChange = {this.handleInputChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Looks good!
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                
                                <Professions onProfessionChange = {this.handleProfessionChange} />

                            </Form.Row>
                            <Form.Row>
                                <div className={"col-md-" + this.state.mdColumnSize}>
                                    <Form.Row>
                                    <Form.Group as={Col} md="12">
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-mobile-alt"></i></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="Celular"
                                            className="formInput"
                                            onChange = {this.handleInputChange}
                                            name = "contactPhone"
                                        />
                                        <Form.Control.Feedback>
                                            Looks good!
                                </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="12" >
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Email"
                                                    aria-describedby="inputGroupPrepend"
                                                    className="formInput"
                                                    required
                                                    onChange = {this.handleInputChange}
                                                    name = "email"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Favor de ingresar tu dirección de correo electrónico.
                                        </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    {this.props.isSignup ?
                                        <Form.Row>
                                        <Form.Group as={Col} md="12" >
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text className="formIcon" id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    aria-describedby="inputGroupPrepend"
                                                    className="formInput"
                                                    required
                                                    onChange = {this.handleInputChange}
                                                    name = "password"
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Favor de ingresar una contraseña
                                        </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                        : <div></div>}
                                </div>
                                <Form.Group as={Col} md={this.state.mdColumnSize}>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-hammer"></i></InputGroup.Text>
                                        </InputGroup.Prepend>

                                        <Form.Control onChange={this.handleInputChange} placeholder="Tell us something about you" name="description" as="textarea" rows="3" className="formInput" />
                                    </InputGroup>
                                </Form.Group>
                                <div className={"col-md-" + this.state.mdColumnSize}>
                                    <StateSelector handleStateChange = {this.handleStateChange} handleCityChange={this.handleCityChange} />
                                </div>
                            </Form.Row>
                            <Form.Row>
                                <div className="col-md-4">
                                    <Button className="workerProfileBtn" onClick={this.handleSubmit}><i className={`fas fa-${this.state.icon}`}></i>{this.state.workerDataBtnText}</Button>
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