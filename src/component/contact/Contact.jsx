import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Title from "../Title"
import img from "../../assets/image/contact1.png"
import swal from 'sweetalert'

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

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

    const onSubmit = () => {
        swal("Good Job!", "Successfully Submitted", "success", {
            timer: 3000,
            button:{
                text: "close",
                value: true,
                visible: true,
                className: "alert_btn",
                closeModal: true,
            }
        })
    }


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
                                <span className="phone">Phone: <a href="tel:00000000000">+01234567890</a></span>
                                <span className="mail">Email: <a href="mailto:admin@example.com">admin@example.com</a></span>
                            </div>
                            <div className="social_share">
                                <span className="title">find with me</span>
                                <ul className="social_share_inner d-flex">
                                    {social_share.map((val, index) => {
                                        return(
                                        <li key={index}>
                                            <a href={val.link} target="blank" className="social_icon">
                                                <i class={val.iconName}></i>
                                            </a>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="contact_form_wrapper">

                            <form className="row" id="contact_form" onSubmit={handleSubmit(onSubmit)}>

                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <label for="contact_name">Your Name</label>
                                        <input                                         
                                            type="text"
                                            id="contact_name"
                                            {...register("name", { required: "Name is required." })}
                                        />
                                        {errors.name?.message && <p className="errors">{errors.name.message}</p>}
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form_group">
                                        <label for="contact_phone">Phone Number</label>
                                        <input 
                                            name="contact_phone"
                                            id="contact_phone"
                                            type="text"
                                            {...register("phone",
                                            { required: false,
                                            pattern: {value: /^[0-9\b]+$/,
                                            message: "Invalid phone number"} })}
                                        />
                                        {errors.phone?.message && <p className="errors">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="contact_email">Email</label>
                                        <input
                                            id="contact_email"
                                            name="contact_email"
                                            type="email"
                                            {...register("email",
                                            { required: "Email is required.",
                                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"} })}
                                        />
                                        {errors.email?.message && <p className="errors">{errors.email.message}</p>}
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="subject">subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            {...register("subject", { required: "Subject is required." })}
                                        />
                                        {errors.subject?.message && <p className="errors">{errors.subject.message}</p>}
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    <div className="form_group">
                                        <label for="contact_message">Your Message</label>
                                        <textarea
                                            name="contact_message"
                                            id="contact_message"
                                            {...register("massage", { required: "Massage is required." })}
                                        >
                                        </textarea>
                                        {errors.massage?.message && <p className="errors">{errors.massage.message}</p>}
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
