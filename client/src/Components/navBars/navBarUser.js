import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

function NavBarUser(props) {
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
                        <Button onClick={() => {props.routeChange("favorite")}} className="buttonMargin" variant="outline-warning"><i className="fas fa-heart"></i></Button>
                        <Button onClick={() => {props.routeChange("message")}} variant="outline-warning"><i className="fas fa-comments"></i></Button>
                    </div >
                </div >
            </Navbar >

        </div >
    )
}
export default NavBarUser;