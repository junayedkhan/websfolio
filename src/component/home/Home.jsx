import React from 'react'
import img from "../../assets/image/banner-04.jpg"

const Home = () => {

    const social_share = [
        {
            iconName: "fab fa-facebook-f",
            link: "https://www.facebook.com/"
        },
        {
            iconName: "fab fa-twitter",
            link: "https://twitter.com/"
        },
        {
            iconName: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/"
        }
    ]

    return (
        <>
        <section className="home">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 order-2 order-lg-1">
                            <div className="home_content">
                                <div className="inner">
                                    <span className="subtitle">WELCOME TO MY WORLD</span>
                                    <h1 className="title">
                                        Hi, I’m <span className="text">Jone Lee</span> <br />
                                        <span className="text">a</span> Developer.
                                    </h1>
                                    <p className="description">
                                        I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="social_share">
                                            <span className="title">find with me</span>
                                            <ul className="social_share_inner d-flex">
                                                {social_share.map((val, index) => {
                                                    return(
                                                    <li key={index}>
                                                        <a href={`${val.link}`} target="blank" className="social_icon">
                                                            <i className={val.iconName}></i>
                                                        </a>
                                                    </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12 order-1 order-lg-2">
                            <div className="home_thumbnail">
                                <div className="inner" style={{backgroundImage: `url(${img})`}}></div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}

export default Home;
