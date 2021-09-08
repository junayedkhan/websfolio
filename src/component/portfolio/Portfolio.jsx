
import React, { useEffect, useState } from 'react';
import Title from '../Title'
import { portfolio } from './PortfolioData';
import { Link } from 'react-router-dom';
import PortfolioDetails from './PortfolioDetails';


const Portfolio = () => {
	const [tag, setTag] = useState('all');
	const [filtered, setFiltered] = useState([]);
    const [openModel, setopenModel] = useState(false)

	useEffect(
		() => {
			tag === 'all' ? setFiltered(portfolio) : setFiltered(portfolio.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
        <>
        <Title
            title_bg="works"
            text_1="my"
            text_2="portfolio"
        />

        <section className="portfolio">
            <div className="container">
                <div className="portfolio_tags">
                    <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} />
                    <TagButton name="webdesign" tagActive={tag === 'webdesign' ? true : false} handleSetTag={setTag} />
                    <TagButton name="devolapment" tagActive={tag === 'devolapment' ? true : false} handleSetTag={setTag} />
                    <TagButton name="photoshop" tagActive={tag === 'photoshop' ? true : false} handleSetTag={setTag} />
                </div>

                <div className="row">
                    {filtered.map((val, index) => {
                        return(
                        <div className="col-lg-6 col-xl-4 col-md-6 col-12" key={index}>
                            <div className="card">
                                <div className="inner">
                                    <div className="card_thumbnail">
                                        <img src={val.img} alt={val.alt} onClick={() => setopenModel(true)} />
                                    </div>
                                    <div className="card_content">
                                        <div className="category_info">
                                            <p className="category_list">{val.tag}</p>
                                            <p className="meta"><i class="fas fa-heart"></i> {val.meta}</p>
                                        </div>
                                        <h4 className="title" onClick={() => setopenModel(true)}>{val.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

            </div>
        </section>

        <section className={openModel ? "react_model" : "d-none"}>
            {openModel ? <div onClick={() => setopenModel(false)} className="react_model overlay"></div> : null}
            <PortfolioDetails setopenModel={setopenModel}/>
        </section>
        </>
	);
}

export default Portfolio;

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};
