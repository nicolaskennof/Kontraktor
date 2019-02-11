import React, { Component } from "react";
import API from '../../utils/API';
import { Form, Col, InputGroup } from "react-bootstrap";

class StateSelector extends Component {

    state = {
        states: [],
        cities: [],
    }

    handleStateChange = (selectedState) => {
        const cities = this.state.states.filter(stateElement => {
            return stateElement.value === selectedState.target.value;
        })[0].counties;
        const currentState = selectedState.target.value;
        this.setState({ cities }, () => {
            this.props.handleStateChange(currentState);
        })
    }

    handleCityChange = (selectedCity) => {
        this.props.handleCityChange(selectedCity.target.value);
    }

    componentDidMount() {

        API.getStates().then(result => {
            this.setState({
                states: result.data.map(stateElement => {
                    return { value: stateElement._id, label: stateElement.state, counties: stateElement.counties }
                }, () => { console.log(this.props) })
            })
        }).catch(err => console.log(err))

    }

    componentWillReceiveProps(newProps) {
        if (newProps.currentState && newProps.currentCity) {
            API.getStates().then(result => {
                this.setState({
                    states: result.data.map(stateElement => {
                        return { value: stateElement._id, label: stateElement.state, counties: stateElement.counties }
                    }),
                    cities: result.data.filter(stateElement => {
                        return stateElement._id === newProps.currentState;
                    })[0].counties
                })
            }).catch(err => console.log(err))
        }
    }

    chooseRender = () => {
        if (this.props.isSearch) {
            return <Form.Group as={Col} md="12">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-map-marked-alt"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        as="select"
                        className="formInput rounded-right"
                        onChange={this.handleStateChange}
                        value={this.props.currentState}
                        required
                    >
                        <option value="">Elige tu estado...</option>
                        {this.state.states.map(stateElement => {
                            return <option key={stateElement.value} value={stateElement.value}>{stateElement.label}</option>
                        })}
                    </Form.Control>
                    <Form.Control.Feedback>
                        Se ve bien!
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Es necesario elegir un estado.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        }
        else {
            return <div>
                <Form.Row>
                    <Form.Group as={Col} md="12">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text className="formIcon" id="inputGroupPrepend"><i className="fas fa-map-marked-alt"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                placeholder="¿Dónde?"
                                as="select"
                                className="formInput rounded-right"
                                onChange={this.handleStateChange}
                                value={this.props.currentState}
                                required
                            >
                                <option value="">Elige tu estado...</option>
                                {this.state.states.map(stateElement => {
                                    return <option key={stateElement.value} value={stateElement.value}>{stateElement.label}</option>
                                })}
                            </Form.Control>
                            <Form.Control.Feedback>
                                Se ve bien!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Es necesario elegir un estado.
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
                                <Form.Control value={this.props.currentCity} as="select" className="formInput rounded-right" onChange={this.handleCityChange}>
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
        }
    }

    render() {
        return (
            this.chooseRender()
        )
    }
}

export default StateSelector;