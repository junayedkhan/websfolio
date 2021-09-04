import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);

    const nav_link = [
        {to: "/", name: "home", icon: "fas fa-home"},
        {to: "/about", name: "about", icon: "fas fa-user"},
        {to: "/portfolio", name: "portfolio", icon: "fas fa-briefcase"},
        {to: "/blogs", name: "blogs", icon: "fas fa-envelope-open"},
        {to: "/contact", name: "contact", icon: "fas fa-comments"},
    ]

    return (
        
        <>
            <button className={isOpen === false ? 
                "hamburger" : "hamburger active"}
                onClick={openMenu}
                >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={isOpen === false ? "nav_menu" : "nav_menu active" }>

                {nav_link.map((val, index) => {
                    return(
                        <>
                        <Link to={val.to}>
                            <li className="nav_link" key={index}>
                                <i className={val.icon} id="icon"></i>
                                {/* <p className="nav_link_text">{val.name}</p> */}
                            </li>
                        </Link>
                        </>
                    )
                })}

            </ul>
        </>
    )
}

export default Navbar;


