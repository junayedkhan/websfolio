import React from 'react';
import img from "../../assets/image/portfolio-01.jpg"

const PortfolioDetails = ({setopenModel}) => {
    return (
        <>
        <section className="react_model_inner">
            <div className="porfolio_details">
                <button onClick={() => setopenModel(false)} className="react_model_close"><i class="fas fa-times"></i></button>
                
                <div className="align-items-center">
    
                    <div className="porfolio_details_thumbnail">
                        <div className="inner">
                            <img src={img} alt="portfolio" />
                        </div>
                    </div>

                    <div className="text_content">
                        <div className="inner">
                            <span className="subtitle">Featured - Design</span>
                            <h3 className="title">App Design Development.</h3>
                            <p className="description_1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
                            </p>
                            <p className="description_2">
                                Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!
                            </p>
                            <div className="btn_group">
                                <button className="button _mb_20">like this <i class="far fa-thumbs-up"></i></button>
                                <button className="button">view project <i class="fas fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default PortfolioDetails;
