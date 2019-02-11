import React from "react";
import { Row, Col } from "react-bootstrap";
import KStats from "../kStats/kStats"
import "./userHome.css"

function HeroImageKontratadoAfterLogin() {
  return (
    <section class="bgimageKontratadoAfterLogin">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Row>
              <Col md={2}></Col>
              <Col md={8}>
              <div class="v-center text-center">
                <KStats/>
                </div>
              </Col>
              <Col md={2}></Col>
          </Row>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroImageKontratadoAfterLogin;