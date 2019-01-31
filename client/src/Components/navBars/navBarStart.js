import React from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

function NavBarStart(props) {
    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                
                    {' React Bootstrap'}
                    <Button variant="outline-info">Search</Button>
                
    </Navbar.Brand>
  </Navbar>
            )
        }
export default NavBarStart;