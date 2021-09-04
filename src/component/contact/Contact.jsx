import React from 'react'
import { Link } from 'react-router-dom'
import Title from "../Title"
import img from "../../assets/image/contact1.png"

const Contact = () => {

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
        <section className="contact">
            <Title
                title_bg="withme"
                text_1="con"
                text_2="tact"
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12 _mb_50">
                        <div className="contact_about_area">
                            <div className="thumbnail">
                                <img src={img} alt="contact" />
                            </div>
                            <div className="title_area">
                                <h4 className="title">Nevine Acotanza</h4>
                                <span>Chief Operating Officer</span>
                            </div>
                            <div className="description">
                                <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                                <span className="phone">Phone: <Link to="tel:01941043264">+01234567890</Link></span>
                                <span className="mail">Email: <Link to="mailto:admin@example.com">admin@example.com</Link></span>
                            </div>
                            <div className="social_share">
                                <span className="title">find with me</span>
                                <ul className="social_share_inner d-flex">
                                    {social_share.map((val, index) => {
                                        return(
                                        <li key={index}>
                                            <Link to={val.link} className="social_icon">
                                                <i class={val.iconName}></i>
                                            </Link>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="contact_form_wrapper">
                            <form className="row" id="contact_form" method="POST" action="">

                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <label for="contact_name">Your Name</label>
                                        <input name="contact_name" id="contact_name" type="text" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <label for="contact_phone">Phone Number</label>
                                        <input name="contact_phone" id="contact_phone" type="text" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="contact_email">Email</label>
                                        <input id="contact_email" name="contact_email" type="email" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="subject">subject</label>
                                        <input id="subject" name="subject" type="text" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="contact_message">Your Message</label>
                                        <textarea name="contact_message" id="contact_message"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <button name="submit" type="submit" id="submit" className="contact_btn">
                                        <span>SEND MESSAGE</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Contact;
