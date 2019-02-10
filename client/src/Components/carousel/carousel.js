import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import Carpenter from "../../img/carpenter.jpg"
import Electrician from "../../img/electrician.jpg"
import Cleaner from "../../img/cleaner.jpg"


function ImgCarousel() {
    return (

        <div className="carouselContainer">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Electrician}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carpenter}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Cleaner}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default ImgCarousel;