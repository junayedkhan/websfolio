import React from 'react'
import Social from '../Social'

const Home = () => {

    return (
        <>
        {/* == home area start == */}
        <section className="home">
            <div className="container">
                 <div className="row">

                    {/* == home content area start == */}
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

                            {/* == social share area start */}
                            <Social />
                            {/* == social share area end */}

                        </div>
                    </div>
                    {/* == home content area end == */}
                    
                    {/* == home thumbnail area start == */}
                    <div className="col-lg-5 col-md-12 col-12 order-1 order-lg-2">
                        {/* <div className="home_thumbnail">
                            <div className="inner" style={{backgroundImage: "url(assets/image/home-02.png)"}}></div>
                        </div> */}
                        <div className="thumbnail">
                            <div className="inner">
                                <img src={"assets/image/home-01.png"} alt="Personal Portfolio Images" />
                            </div>
                        </div>
                    </div>
                    {/* == home thumbnail area end == */}

                </div>
            </div>
        </section>
        {/* == home area end == */}
        </>
    )
}

export default Home;
