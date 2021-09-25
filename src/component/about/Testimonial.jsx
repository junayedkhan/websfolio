import React from 'react';
import {testimonial} from "./AboutData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
    };


    return (
        <>
        {/* == single testimonial area start == */}
        <Slider {...settings} className="testimonial">

            {testimonial.map((val, index) => {
                return(
                <div className="inner" key={index}>
                    <div className="row">
                        {/* == info area start == */}
                        <div className="col-12">
                            <div className="card_info">
                                <div className="card_img">
                                    <img src={val.img} alt={val.alt} className="img" />
                                </div>
                                <div className="card_content">
                                    <span className="subtitle">{val.subtitle}</span>
                                    <h3 className="name">{val.name}</h3>
                                    <span className="designation">{val.designation}</span>
                                </div>
                            </div>
                        </div>
                        {/* == info area end == */}

                        {/* == description area start == */}
                        <div className="col-12">
                            <div className="card_description">
                                <div className="title_area">
                                    <div className="title_info">
                                        <h4 className="title">{val.title}</h4>
                                        <span className="date">{val.date}</span>
                                    </div>
                                </div>
                                <p className="description">{val.description}</p>
                            </div>
                        </div>
                        {/* == description area start == */}

                    </div>
                </div>
                )
            })}

        </Slider>
        {/* == single testimonial area end == */}
        </>
    )
}

export default Testimonial;


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
    <div className="slick_next" onClick={onClick}>
        <i className="fas fa-arrow-right"></i>
    </div>
    );
}
  
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
    <div className="slick_prev" onClick={onClick}>
        <i className="fas fa-arrow-left"></i>
    </div>
    );
}