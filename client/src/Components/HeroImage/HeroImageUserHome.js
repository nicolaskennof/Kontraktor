import React from "react";
import "./userHome.css"
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import Search from "../Search/Search"

function HeroImage(props) {
  return (
    <section class="bgimage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
            <WelcomeMessage />
            <br />
            <br />
            <Search mySearch={props.mySearch} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroImage;