import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);

    const nav_link = [
        {to: "/", name: "home", icon: "fas fa-home", text: "home"},
        {to: "/about", name: "about", icon: "fas fa-user", text: "about"},
        {to: "/portfolio", name: "portfolio", icon: "fas fa-briefcase", text: "portfolio"},
        {to: "/blogs", name: "blogs", icon: "fas fa-envelope-open", text: "blogs"},
        {to: "/contact", name: "contact", icon: "fas fa-comments", text: "contact"},
    ]

    return (
        
        <>
            {/* == mobile nev button == */}
            <button className={isOpen === false ? 
                "hamburger" : "hamburger active"}
                onClick={openMenu}
                >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* == navlink area start == */}
            <ul className={isOpen === false ? "nav_menu" : "nav_menu active" }>

                {nav_link.map((val, index) => {
                    return(
                    <Link to={val.to} key={index}>
                        <li className="nav_link" onClick={openMenu}>
                            <i className={val.icon} id="icon"></i>
                            <span className="tooltiptext">{val.text}</span>
                        </li>
                    </Link>
                    )
                })}

            </ul>
            {/* == navlink area end == */}
        </>
    )
}

export default Navbar;


