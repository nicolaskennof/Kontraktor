import React from "react";
import { Jumbotron, Row, Col } from 'react-bootstrap'
import './style.css'

function Footer() {
    return (
        <div>
            <Jumbotron bg="dark" variant="dark" className="jumbofoot mb-0 mt-5 rounded-0">
                <Row>
                    <Col className="text-center">
                        <p>Copyright © 2019 Designed with ❤ by Los Patos de Tampico - Web Design & Marketing</p>
                    </Col>
                </Row>
            </Jumbotron >
        </div >
    )
}
export default Footer;