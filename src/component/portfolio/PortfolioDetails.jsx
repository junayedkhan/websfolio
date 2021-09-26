import React from 'react';

const PortfolioDetails = ({setopenModel, data}) => {

    return (
        <>
        <section className="react_model_inner">
            <div className="porfolio_details">
                <button onClick={() => setopenModel(false)} className="react_model_close"><i class="fas fa-times"></i></button>
                
                <div className="align-items-center">
    
                    <div className="thumbnail">
                        <div className="inner">
                            <img src={data.img} alt={data.alt} />
                        </div>
                    </div>

                    <div className="text_content">
                        <div className="inner">
                            <span className="subtitle">{data.tag}</span>
                            <h3 className="title">{data.title}</h3>
                            <p className="description_1">
                               {data.description_1}
                            </p>
                            <p className="description_2">
                                {data.description_2}
                            </p>
                        </div>
                    </div>

                    <div className="btn_group">
                        <button className="button _mb_20">like this <i className="far fa-thumbs-up"></i></button>
                        <button className="button">view project <i className="fas fa-chevron-right"></i></button>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

export default PortfolioDetails;
