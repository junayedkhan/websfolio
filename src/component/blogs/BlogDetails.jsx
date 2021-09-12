import React from 'react'
import Comment from './Comment'
 
const BlogDetails = ({setopenModel, blog}) => {

    console.log(blog)
    return (
        <>

        {/* == blog details area start */}
        <section className="react_model_inner">

            {/* == button area start */}
            <button onClick={() => setopenModel(false)} className="react_model_close"><i className="fas fa-times"></i></button>
            {/* == button area end */}

            <div className="blog_details">

                {/* == image area start */}
                <div className="thumbnail">
                    <div className="inner">
                        <img src={blog.img} alt="blog" />
                    </div>
                </div>
                {/* == imgage area end */}

                <div className="details">
                    <p className="meta">{blog.meta}</p>
                    <h3 className="title">{blog.title}</h3>
                </div>

                {/* == test area start == */}
                <div className="main_content">
                    <div className="description">
                        <p className="bigger">
                            {blog.designation_01}
                        </p>
                        <p>
                            {blog.description_01}
                        </p>
                        <p>
                        {blog.description_02}
                        </p>
                        <div className="quote_box">
                            <div className="icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p>
                            {blog.designation_02}
                            </p>
                        </div>
                        <p>
                        {blog.description_03}
                        </p>
                        <p>
                        {blog.description_04}
                        </p>
                    </div>
                </div>
                {/* == test area end == */}

                {/* == comment area start == */}
                <Comment />
                {/* == comment area end == */}

            </div>
        </section> 
        {/* == blog details area end == */}

        </>
    )
}

export default BlogDetails
