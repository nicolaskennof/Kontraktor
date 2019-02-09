import React, { Component } from "react"
import { Form, Col, InputGroup } from "react-bootstrap";
import API from '../../utils/API'

class Professions extends Component {

    state = {
        professions: []
    }

    componentDidMount() {
        API.getProfessions()
            .then(result => {
                this.setState({
                    professions : result.data
                })
            })
            .catch(err => console.log(err))
    }

    onProfessionChange = (selectedProfession) => {
        this.props.onProfessionChange(selectedProfession.target.value);
    }

    render() {
        return (
            <Form.Group as={Col} md={this.state.mdColumnSize}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-hammer"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control as="select" onChange={this.onProfessionChange} className="formInput">
                        <option>¿Qué profesional buscas?</option>
                        {this.state.professions.map(professionElement=>{
                            return <option key = {professionElement._id} value = {professionElement._id}>{professionElement.profession}</option>
                        })}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        Favor de seleccionar un profesional.
                                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        )
    }
}

export default Professions;