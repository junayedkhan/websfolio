import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import with_animation from "../assets/image/th-with-animation.png"
import without_animation from "../assets/image/th-without-animation.png"

const Preview = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
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
        <section className="th_preview">
            <div className="th_title">
                <h1>websfolio</h1>
                <span>Personal Portfolio React Template</span>
            </div>
            {/* == title area end == */}
            <div className="text-center price_btn">
                <a href="/">
                    <button className="buy_btn">buy now</button>
                </a>
            </div>
            {/* == price btn area end == */}
            <div className="container">
                <Slider {...settings}>
                    <div className="text-center">
                        <div className="th_demo">
                            <a href="/home-without-animation" target="_blank">
                                <div className="demo_img">
                                    <img src={without_animation} alt="without_animation" />
                                </div>
                            </a>
                            <p className="demo_title">Websfolio Without Animation</p>
                        </div> 
                    </div>
                    <div className="text-center">
                        <div className="th_demo">
                            <a href="/home-with-animation" target="_blank">
                                <div className="demo_img">
                                    <img src={with_animation} alt="without_animation" />
                                </div>
                            </a>
                            <p className="demo_title">Websfolio With Animation</p>
                        </div>       
                    </div>
                </Slider>
                {/* == theme demo area end == */}
            </div>
        </section>
    )
}

export default Preview;
