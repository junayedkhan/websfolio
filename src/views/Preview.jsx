import React from 'react'
import with_animation from "../assets/image/Untitled-15.png"
import without_animation from "../assets/image/Untitled-16.png"

const Preview = () => {
    return (
        <section className="th_preview">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="th_title">
                            <h1>websfolio</h1>
                            <span>Personal Portfolio React Template</span>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 text-center" style={{paddingRight: "40px"}}>
                        <div className="th_demo">
                            <a href="/home-without-animation" target="_blank">
                                <div className="demo_img">
                                    <img src={without_animation} alt="without_animation" />
                                </div>
                            </a>
                            <p className="demo_title">Websfolio Without Animation</p>
                        </div> 
                    </div>

                    <div className="col-lg-6 col-md-12 col-12 text-center" style={{paddingLeft: "40px"}}>
                        <div className="th_demo">
                            <a href="/home-with-animation" target="_blank">
                                <div className="demo_img">
                                    <img src={with_animation} alt="without_animation" />
                                </div>
                            </a>
                            <p className="demo_title">Websfolio With Animation</p>
                        </div>       
                    </div>

                    <div className="col-12 text-center">
                        <a href="/">
                            <button className="buy_btn">buy now</button>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Preview
