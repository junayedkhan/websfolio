import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {blogsdata} from "./BlogsDtata"
import Title from '../Title'
import BlogDetails from './BlogDetails'

const Blogs = () => {

    const [openModel, setopenModel] = useState(false)
    const [data, setData] = useState([])
    const {id} = useParams()

    return (
        <>

        <Title
            title_bg="news"
            text_1="my"
            text_2="blogs"
        />

        <section className="blogs">
            <div className="container">
                <div className="row">
                    {blogsdata.map((val, index) => {
                        return(
                        <div className="col-lg-6 col-xl-4 col-md-6 col-12" key={index}>
                            <div className="card">
                                <div className="inner">
                                    <div className="card_thumbnail">
                                        <img onClick={() => setopenModel(true)} src={val.img} alt="blog" />
                                    </div>
                                    <div className="card_content">
                                        <div className="category_info">
                                            <p className="category_list">{val.category}</p>
                                            <p className="meta">{val.meta}</p>
                                        </div>
                                        <h4 className="title" onClick={() => setopenModel(true)}>
                                            {val.title} 
                                        </h4>
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
            <BlogDetails setopenModel={setopenModel}/>
        </section>
        </>
    )
}

export default Blogs
