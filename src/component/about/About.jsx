import React from 'react';
import Title from '../Title';
import Testimonial from './Testimonial';
import Clients from './Clients';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
        tab_list,
        personal_info_left,
        personal_info_right,
        stats_box,
        educational_quality,
        Job_Experience,
        skill_left,
        skill_right,
        experience_left,
        experience_right
    } from './AboutData';



const About = () => {

    return (
        <>
        {/* == resume area start == */}
        <section className="about">

            {/* == title area start == */}
            <Title
                title_bg="resume"
                text_1="about"
                text_2="me"
            />
            {/* == title area end */}

            <div className="container">

                   {/* == tab content wrapper area start == */}
                    <Tabs className="tab_inner">

                        {/* == tab list area start == */}
                        <TabList className="tablist">
                            <div className="row">
                                {tab_list.map((val, index) => {
                                    return(
                                    <Tab className="col-lg-3 col-md-3 col-sm-12" key={index}>
                                        <div className="tab">
                                            <span>{val.name}</span>
                                        </div>
                                    </Tab>
                                    )
                                })}
                            </div>
                        </TabList>
                        {/* == tab list area end == */}

                        {/* == personal info tab area start == */}
                        <TabPanel className="personal_info">
                            <div className="row">
                                <div className="col-12 col-lg-5 _mb_60">
                                    <div className="row">
                                        <h4 className="main_title">porsonal info</h4>
                                        <div className="col-6">
                                            <div className="inner">
                                                <ul className="inner_list">

                                                    {/* personal info left side */}
                                                    {personal_info_left.map((val, index) => {
                                                        return(
                                                        <li className="list_item" key={index}>
                                                            <span className="title">{val.title}: </span>
                                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.value}</span>
                                                        </li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="inner">
                                                <ul className="inner_list">

                                                    {/* == personal info right side == */}
                                                    {personal_info_right.map((val, index) => {
                                                        return(
                                                        <li className="list_item" key={index}>
                                                            <span className="title">{val.title}: </span>
                                                            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">{val.value}</span>
                                                        </li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* == status box area start == */}
                                <div className="col-12 col-lg-7">
                                    <div className="row">
                                        {stats_box.map((val, index) => {
                                            return(
                                            <div className="col-6" key={index}>
                                                <div className="stats_box">
                                                    <h3>{val.number}</h3>
                                                    <p>
                                                        {val.text_1}
                                                        <span className="d-block">{val.text_2}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* == status box area end == */}

                            </div>
                        </TabPanel>
                        {/* == personal info tab area end == */}

                        {/* == education tab area start ==  */}
                        <TabPanel className="education">
                            <div className="row">
                                
                                {/* == single list area start == */}
                                <div className="col-lg-6 col-md-12 col-12 _mb_60">
                                    <div className="inner">
                                        <span className="subtitle">2008 - 2015</span>
                                        <h3 className="main_title">educational quality</h3>
                                
                                        <div className="inner_list">
                                            {educational_quality.map((val, index) => {
                                                return(
                                                <div className="item" key={index}>
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>{val.title}</h4>
                                                            <span>{val.subtitle}</span>
                                                        </div>
                                                        <div className="date_of_time">
                                                            <span>{val.date_of_time}</span>
                                                        </div>
                                                    </div>
                                                        <p className="description">{val.description}</p>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* == single list area end == */}
                                
                                {/* == single list area start == */}
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="inner">
                                        <span className="subtitle">2008 - 2015</span>
                                        <h3 className="main_title">Job Experience</h3>
                                        
                                        <div className="inner_list">
                                            {Job_Experience.map((val, index) => {
                                                return(
                                                <div className="item" key={index}>
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>{val.title}</h4>
                                                            <span>{val.subtitle}</span>
                                                        </div>
                                                        <div className="date_of_time">
                                                            <span>{val.date_of_time}</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">{val.description}</p>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* == single list area end == */}

                            </div>
                        </TabPanel>
                        {/* == education tab area end == */}

                        {/* == skill tab area start == */}
                        <TabPanel className="skill">
                            <div className="row">

                                {/* == single list area start == */}
                                <div className="col-lg-6 col-md-6 col-12 _mb_60">
                                    <div className="inner">
                                        <span className="subtitle">features</span>
                                        <h4 className="main_title">design skill</h4>
                                        
                                        <div className="skill_charts">
                                            {skill_left.map((val, index) => {
                                                return(
                                                <div className="skill_charts_inner" key={index}>
                                                    <div className="heading">
                                                        <h6 className="lavel">{val.lavel}</h6>
                                                        <h6 className="number">{val.number}</h6>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_inner" style={{width: val.number}}></div>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* == single list area start == */}

                                {/* == single list area start == */}
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="inner">
                                        <span className="subtitle">features</span>
                                        <h4 className="main_title">Development Skill</h4>
                                        
                                        <div className="skill_charts">
                                            {skill_right.map((val, index) => {
                                                return(
                                                <div className="skill_charts_inner" key={index}>
                                                    <div className="heading">
                                                        <h6 className="lavel">{val.lavel}</h6>
                                                        <h6 className="number">{val.number}</h6>
                                                    </div>
                                                    <div className="progress_bar">
                                                        <div className="progress_bar_inner" style={{width: val.number}}></div>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* == single list area start == */}

                            </div>
                        </TabPanel>
                        {/* == skill tab area end == */}

                        {/* == experience tab area start ==  */}
                        <TabPanel className="experience">
                            <div className="row">

                                {/* == single list area start == */}
                                <div className="col-lg-6 col-md-12 col-12 _mb_60">
                                    <div className="inner">
                                        <span className="subtitle">2008 - 2015</span>
                                        <h3 className="main_title">educational quality</h3>
                                        
                                        <div className="inner_list">
                                            {experience_left.map((val, index) => {
                                                return(
                                                <div className="item" key={index}>
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>{val.title}</h4>
                                                            <span>{val.subtitle}</span>
                                                        </div>
                                                        <div className="date_of_time">
                                                            <span>{val.date_of_time}</span>
                                                        </div>
                                                    </div>
                                                        <p className="description">{val.description}</p>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                               {/* == single list area end == */}

                                
                               {/* == single list area start == */}
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="inner">
                                        <span className="subtitle">2008 - 2015</span>
                                        <h3 className="main_title">Job Experience</h3>
                                        
                                        <div className="inner_list">
                                            {experience_right.map((val, index) => {
                                                return(
                                                <div className="item" key={index}>
                                                    <div className="heading">
                                                        <div className="title">
                                                            <h4>{val.title}</h4>
                                                            <span>{val.subtitle}</span>
                                                        </div>
                                                        <div className="date_of_time">
                                                            <span>{val.date_of_time}</span>
                                                        </div>
                                                    </div>
                                                    <p className="description">{val.description}</p>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* == single list area end == */}


                            </div>
                        </TabPanel>
                        {/* == education tab area end == */}
                        
                    </Tabs>
                    {/* == tab content wrapper area end == */}
            </div>
        </section>
        {/* == resume area end */}
        
        
        {/* == testimonial area start == */}
        <section>

            {/* == title area start == */}
            <Title
                title_bg="CLIENT"
                text_1="Testimo"
                text_2="nial"
            />
            {/* == title area end == */}

            <div className="container">
                <Testimonial />
            </div>

        </section>
        {/* == testimonial area start == */}


        {/* == client area start == */}
        <section>

            {/* == title area start == */}
            <Title
                title_bg="some"
                text_1="Client"
                text_2="s"
            />
            {/* == title area end == */}

            <div className="container">
                <Clients /> 
            </div>

        </section>
        {/* == client area start == */}
        
        </>
    )
}

export default About;
