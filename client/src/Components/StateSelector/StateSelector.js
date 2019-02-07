import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';
import Select from 'react-select';

class StateSelector extends Component {

    state = {
        states: [],
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        /*let counties = this.state.states.filter(state=>{
            return state.value === selectedOption.value;
        })[0].counties;*/
        this.setState({ selectedOption });
    }

    componentDidMount() {
        API.getStates().then(result => {
            this.setState({
                states: result.data.map(stateElement => {
                    return {value: stateElement._id, label: stateElement.state, counties: stateElement.counties}
                })
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <Select placeholder="¿Dónde?" className="stateList"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={this.state.states}
            />
        )
    }
}

export default StateSelector;