import React, { Component } from "react"
import NavBarStart from "../Components/navBars/navBarStart"
import InfoCardsWrapper from "../Components/infoCardsWrapper/infoCardsWrapper"
import ModalLogin from "../Components/ModalLogin/ModalLogin"
import ImgCarousel from "../Components/carousel/Carousel"
import { Container } from "react-bootstrap"

class BeforeLogin extends Component {
    
    state = {
        show:false,
        isSignup: false
    }
    
    handleClose = () =>{
        this.setState({show:false});
    }
    
    handleShow = (isSignup) => {
        this.setState({
            isSignup,
            show:true
        });
    }

    render() {
        return (
            <div>
                <NavBarStart handleShow = {this.handleShow} />
                <ImgCarousel />
                <Container>
                <ModalLogin logKontratado = {this.props.logKontratado} isSignup = {this.state.isSignup} handleClose = {this.handleClose} show = {this.state.show} facebookResponse={this.props.facebookResponse} />
                <br />
                <InfoCardsWrapper />
                <br />
                </Container>
            </div>
        )
    }
}
export default BeforeLogin;