import React, { Component } from "react";
import NavBarStart from "../navBars/navBarStart"
import InfoCardsWrapper from "../infoCardsWrapper/infoCardsWrapper"
import ModalLogin from "../ModalLogin/ModalLogin"
import Search from "../Search/Search"
import WorkerProfileData from "../WorkerProfileData/WorkerProfileData"

class BeforeLogin extends Component {
    
    state = {
        show:false
    }
    
    handleClose = () =>{
        this.setState({show:false});
    }
    handleShow = () => {
        this.setState({show:true});
    }

    render() {
        return (
            <div>
                <NavBarStart handleShow = {this.handleShow} />
                <Search />
                <ModalLogin handleClose = {this.handleClose} show = {this.state.show} facebookResponse={this.props.facebookResponse} />
                <br />
                <br />
                <InfoCardsWrapper />
                <WorkerProfileData />
            </div>
        )
    }
}
export default BeforeLogin;