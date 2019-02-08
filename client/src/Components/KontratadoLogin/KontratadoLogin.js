import React, { Component } from 'react';
import { Form, InputGroup, Button, Col, Container } from "react-bootstrap";
import API from '../../utils/API';

class KontratadoLogin extends Component {

    state = {
        validated: false,
        email: '',
        password: '',

    };

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
        const {email, password} = this.state;
        const kontratado = {
            email,
            password
        };

        API.loginKontratado(kontratado)
            .then(result=>{
                this.props.logKontratado(result.data.kontratadoId);
            })
            .catch(err=>console.log(err.response));
    }

    render() {
        const { validated } = this.state;
        return (
            <Container>
                <Form
                    noValidate
                    validated={validated}
                    className="profileForm">

                    <Col md={10}>

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
                                        onChange={this.handleInputChange}
                                        name="email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Favor de ingresar tu dirección de correo electrónico.
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
                                        type="password"
                                        placeholder="Password"
                                        aria-describedby="inputGroupPrepend"
                                        className="formInput"
                                        required
                                        onChange={this.handleInputChange}
                                        name="password"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Favor de ingresar una contraseña
                                        </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <div className="col-md-12 text-center">
                                <Button className="workerProfileBtn" onClick={this.handleSubmit}><i className="fas fa-save"></i> Log In </Button>
                            </div>
                        </Form.Row>

                    </Col>
                </Form>
            </Container>
        )
    }
}

export default KontratadoLogin;