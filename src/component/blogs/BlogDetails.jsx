import React from 'react'
import img from "../../assets/image/blog-01.jpg"
 
const BlogDetails = ({setopenModel}) => {
    return (
        <>
        <section className="react_model_inner">
            <button onClick={() => setopenModel(false)} className="react_model_close"><i class="fas fa-times"></i></button>
            <div className="description_wrap">

                <div className="thumbnail">
                    <div className="inner">
                        <img src={img} alt="blog" />
                    </div>
                </div>

                <div className="details">
                    <p className="meta">20 MAY 2021 - 10.30 PM</p>
                    <h3 className="title">App Design Development.</h3>
                </div>

                <div className="main_content">
                    <div className="description">
                        <p className="bigger">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                        <p>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <div className="quote_box">
                            <div className="icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                            </p>
                        </div>
                        <p>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>

                <div className="comment">
                    <div className="inner">
                        <h3 className="title">leave a replay</h3>

                        <form action="">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">

                                    <div className="from_group">
                                         <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="from_group">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="from_group">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Phone(optional)"
                                        />
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="from_group">
                                        <textarea placeholder="Comment"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="from_group_btn">
                                        <button type="submit">submit now</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section> 
        </>
    )
}

export default BlogDetails
