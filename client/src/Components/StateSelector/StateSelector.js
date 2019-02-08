import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Col, InputGroup } from "react-bootstrap";

class StateSelector extends Component {

    state = {
        states: [],
        cities: [],
    }

    handleStateChange = (selectedState) => {
        const cities = this.state.states.filter(stateElement=>{
            return stateElement.value === selectedState.target.value;
        })[0].counties;
        this.setState({cities})
        this.props.handleStateChange(selectedState.target.value);
    }

    handleCityChange = (selectedCity) => {
        this.props.handleCityChange(selectedCity.target.value);
    }

    componentDidMount() {
        API.getStates().then(result => {
            this.setState({
                states: result.data.map(stateElement => {
                    return { value: stateElement._id, label: stateElement.state, counties: stateElement.counties }
                })
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-map-marked-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                placeholder="¿Dónde?"
                                as="select"
                                className="formInput"
                                onChange={this.handleStateChange}
                            >
                                <option value="">Elija tu estado...</option>
                                {this.state.states.map(stateElement => {
                                    return <option key={stateElement.value} value={stateElement.value}>{stateElement.label}</option>
                                })}
                            </Form.Control>

                            <Form.Control.Feedback type="invalid">
                                Favor de ingresar tu estado.
                                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                {!this.props.isSearch ? 
                    <Form.Row>
                    <Form.Group as={Col} md="12">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-university"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control as="select" className="formInput" onChange={this.handleCityChange}>
                                <option>Elija tu ciudad...</option>
                                {this.state.cities.map(cityElement => {
                                    return <option key={cityElement._id} value={cityElement._id}>{cityElement.county}</option>
                                })}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Favor de ingresar tu ciudad.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                    : <div></div>}
                
            </div>
        )
    }
}

export default StateSelector;