import React, {useState} from 'react'
import {blogsdata} from "./BlogsDtata"
import Title from '../Title'
import BlogDetails from './BlogDetails'

const Blogs = () => {

    const [openModel, setopenModel] = useState(false)

    return (
        <>

        {/* == title area start == */}
        <Title
            title_bg="news"
            text_1="my"
            text_2="blogs"
        />
        {/* == title area end == */}

        {/* == blog area start */}
        <section className="blogs">
            <div className="container">
                <div className="row">

                    {blogsdata.map((val, index) => {
                        return(
                        <div className="col-lg-6 col-xl-4 col-md-6 col-12" key={index}>
                            <div className="card">
                                <div className="inner">

                                    {/* == image area start == */}
                                    <div className="card_thumbnail">
                                        <img onClick={() => setopenModel(true)} src={val.img} alt="blog" />
                                    </div>
                                    {/* == image area end == */}

                                    {/* == text area start == */}
                                    <div className="card_content">
                                        <div className="category_info">
                                            <p className="category_list">{val.category}</p>
                                            <p className="meta">{val.meta}</p>
                                        </div>
                                        <h4 className="title" onClick={() => setopenModel(true)}>
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
            </div>
        </section>
        {/* == blog area end == */}

        {/* == blog details area start */}
        <section className={openModel ? "react_model" : "d-none"}>
            {openModel ? <div onClick={() => setopenModel(false)} className="react_model overlay"></div> : null}
            <BlogDetails setopenModel={setopenModel}/>
        </section>
        {/* == blog details area end == */}
        </>
    )
}

export default Blogs;
