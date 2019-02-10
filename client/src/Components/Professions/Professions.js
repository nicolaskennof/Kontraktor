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
                    professions: result.data
                })
            })
            .catch(err => console.log(err))
    }

    onProfessionChange = (selectedProfession) => {
        this.props.onProfessionChange(selectedProfession.target.value);
    }

    render() {
        return (
            <Form.Group as={Col}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-hammer"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        value={this.props.currentProfession}
                        as="select" onChange={this.onProfessionChange}
                        className="formInput rounded-right"
                        required
                    >
                        <option value="">¿Cuál es tu habilidad?</option>
                        {this.state.professions.map(professionElement => {
                            return <option key={professionElement._id} value={professionElement._id}>{professionElement.profession}</option>
                        })}
                    </Form.Control>
                    <Form.Control.Feedback>
                        Se ve bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Es necesario ingresar una habilidad.    
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        )
    }
}

export default Professions;