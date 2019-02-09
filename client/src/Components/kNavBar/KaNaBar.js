import React, { Component } from "react"
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

class KaNaBar extends Component {

    chooseRender = () => {
        if (this.props.type === "home") {
            return <div>
                <Button onClick={() => { this.props.routeChange("profile") }} className="m-2" variant="outline-warning"><i class="fas fa-user-alt"></i></Button>
                <Button onClick={() => { this.props.routeChange("message") }} variant="outline-warning"><i className="fas fa-comments"></i></Button>
            </div>
        } else if (this.props.type === "profile") {
            return <div>
                <Button onClick={() => { this.props.routeChange("message") }} className="m-2 mr-2" variant="outline-warning"><i className="fas fa-comments"></i></Button>
                <Button onClick={() => { this.props.routeChange("home") }} variant="outline-warning"><i class="fas fa-home"></i></Button>
            </div>
        } else {
            return <div>
                <Button onClick={() => { this.props.routeChange("profile") }} className="m-2" variant="outline-warning"><i class="fas fa-user-alt"></i></Button>
                <Button onClick={() => { this.props.routeChange("home") }} variant="outline-warning"><i class="fas fa-home"></i></Button>
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
export default KaNaBar;