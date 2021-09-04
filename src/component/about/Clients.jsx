import React from 'react'
import {clients} from "./AboutData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Clients = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ],
    };

    return (
        <>
        <Slider {...settings} className="client_slider">
            {clients.map((val, index) => {
                return(
                <div className="inner">
                    <div className="client" key={index}>
                        <div className="thumbnail">
                            <img src={val.img} alt={val.name} className="img"/>
                        </div>
                        <div className="client_name">
                            <span>{val.name}</span>
                        </div>
                    </div>
                </div>
                )
            })}
        </Slider>
        </>
    )
}

export default Clients
