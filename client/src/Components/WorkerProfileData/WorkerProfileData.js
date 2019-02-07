import React, { Component } from "react"
import { Form, InputGroup, Button, Col, Container } from "react-bootstrap";
import "./style.css"

let lastProfilePicValue = "http://nicolas-kennof.com/wp-content/uploads/2018/07/Perfil-2018.png";
let lastFNameValue = "Nicolas Jules R";
let lastLNameValue = "Kennof";
let lastEmailValue = "nicolas.kennof@gmail.com";
let lastCountyValue = "Santiago Momóxpan";
let lastCityValue = "Puebla";
let lastStateValue = "Puebla";
let lastPhoneValue = "2229038667";
let stateArray = "No olvides integrar eso!"

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
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                defaultValue={lastFNameValue}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellido"
                defaultValue={lastLNameValue}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  defaultValue={lastEmailValue}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Favor de ingresar tu dirección de correo electrónico.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ciudad"
                defaultValue={lastCityValue}
                required />
              <Form.Control.Feedback type="invalid">
                Favor de ingresar tu ciudad.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select">
                <option>Elija...</option>
                <option>{stateArray}</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Favor de ingresar tu estado.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Municipio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        </Container>
      );
    }
  }

  export default WorkerProfileData