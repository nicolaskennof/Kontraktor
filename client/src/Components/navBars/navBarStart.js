import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

function NavBarStart(props) {
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
                        <Button className="buttonMargin" onClick={()=>props.handleShow(false)} variant="outline-warning"><i className="fas fa-sign-in-alt"></i></Button>
                        <Button href="#" onClick={()=>props.handleShow(true)} variant="outline-warning"><i className="fas fa-user-plus"></i></Button>
                    </div>
                </div>
            </Navbar >

        </div >
    )
}
export default NavBarStart;