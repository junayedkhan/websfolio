import React, { useEffect, useState } from 'react';
import Title from '../Title'
import { portfolio } from './PortfolioData';
import PortfolioDetails from './PortfolioDetails';


const Portfolio = () => {
	const [tag, setTag] = useState('all');
	const [filtered, setFiltered] = useState([]);
    const [data, setData] = useState([])
    const [openModel, setopenModel] = useState(false)

	useEffect(
		() => {
			tag === 'all' ? setFiltered(portfolio) : setFiltered(portfolio.filter(image => image.tag === tag));
		},
		[tag]
	);

    const TagButton = ({ name, handleSetTag, tagActive }) => {
        return (
            <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
                {name.toUpperCase()}
            </button>
        );
    };

	return (
        <>
        <section className="portfolio">

            {/* == title == */}
            <Title
                title_bg="works"
                text_1="my"
                text_2="portfolio"
            />
            {/* == portfolio area start == */}

            <div className="container">

                {/* == portfolio navigation area start == */}
                <div className="portfolio_tags">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="webdesign" tagActive={tag === 'webdesign' ? true : false} handleSetTag={setTag} />
                    <TagButton name="devolapment" tagActive={tag === 'devolapment' ? true : false} handleSetTag={setTag} />
                    <TagButton name="photoshop" tagActive={tag === 'photoshop' ? true : false} handleSetTag={setTag} />
                </div>
                {/* == portfolio navigation area end == */}
                
                {/* == portfolio card area start == */}
                <div className="row">
                    {filtered.map((val, index) => {
                        return(
                        <div className="col-lg-6 col-xl-4 col-md-6 col-12 _mb_20_" key={index}>
                            <div className="card">
                                <div className="inner">

                                    {/* == thumbnail area start == */}
                                    <div className="card_thumbnail">
                                        <img src={val.img} alt={val.alt}
                                        onClick={() => {
                                            setopenModel(true)
                                            setData(val)
                                        }}
                                        />
                                    </div>
                                    {/* == thumbnail area end == */}

                                    {/* == text area start == */}
                                    <div className="card_content">
                                        <div className="category_info">
                                            <p className="category_list">{val.tag}</p>
                                            <p className="meta"><i class="fas fa-heart"></i> {val.meta}</p>
                                        </div>
                                        <h4 className="title"
                                        onClick={() => {
                                            setopenModel(true)
                                            setData(val)
                                        }}>
                                        {val.title}
                                        </h4>
                                    </div>
                                    {/* == text area end == */}

                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                {/* == portfolio card area end == */}

            </div>
        </section>
        {/* == portfolio area end == */}

        {/* == portfolio model area start == */}
        <section className={openModel ? "react_model" : "d-none"}>
            {openModel ? <div onClick={() => setopenModel(false)} className="react_model overlay"></div> : null}
            <PortfolioDetails data={data} setopenModel={setopenModel}/>
        </section>
        {/* == portfolio model area end == */}
        </>
	);
}

export default Portfolio;

