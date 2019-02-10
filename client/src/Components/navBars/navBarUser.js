import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

class NavBarUser extends Component {

    chooseRender = () => {
        if (this.props.type === "home") {
            return <div>
                <Button onClick={() => { this.props.routeChange("favorite") }} className="m-2" variant="outline-warning"><i className="fas fa-heart"></i></Button>
                <Button onClick={() => { this.props.routeChange("message") }} variant="outline-warning"><i className="fas fa-comments"></i></Button>
                <Button onClick={this.props.facebookLogout} className="btn btn-danger m-2 ml-2 logoutBtn"><i className="fas fa-sign-out-alt"></i></Button>
            </div>
        } else if (this.props.type === "favorite") {
            return <div>
                <Button onClick={() => { this.props.routeChange("message") }} className="m-2 mr-2" variant="outline-warning"><i className="fas fa-comments"></i></Button>
                <Button onClick={() => { this.props.routeChange("home") }} variant="outline-warning"><i className="fas fa-home"></i></Button>
                <Button onClick={this.props.facebookLogout} className="btn btn-danger m-2 ml-2 logoutBtn"><i className="fas fa-sign-out-alt"></i></Button>
            </div>
        } else {
            return <div>
                <Button onClick={() => { this.props.routeChange("favorite") }} className="m-2" variant="outline-warning"><i className="fas fa-heart"></i></Button>
                <Button onClick={() => { this.props.routeChange("home") }} variant="outline-warning"><i className="fas fa-home"></i></Button>
                <Button onClick={this.props.facebookLogout} className="btn btn-danger m-2 ml-2 logoutBtn"><i className="fas fa-sign-out-alt"></i></Button>
            </div>
        }
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">

                        <img
                            alt=""
                            src="/assets/img/helmet.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />

                        {' Kontractor'}
                    </Navbar.Brand>
                    <div className="signInWrapper">
                        <div className="buttonSignIn">
                            {this.chooseRender()}
                        </div >
                    </div >
                </Navbar >

            </div >
        )
    }
}
export default NavBarUser;