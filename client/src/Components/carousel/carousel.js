import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './style.css'

function ImgCarousel(props) {
    return (

        <div className="carouselContainer">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/img/carousel/retapizCarousel.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/img/carousel/carpinteriaCarousel.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/img/carousel/electricosCarousel.jpg"
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