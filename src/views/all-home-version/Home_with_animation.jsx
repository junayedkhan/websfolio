import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HeroAnimation from "../../component/hero/HeroAnimation"
import AboutAnimation from '../../component/about/AboutAnimation'
import PortfolioAnimation from '../../component/portfolio/PortfolioAnimation'
import BlogsAnimation from '../../component/blogs/BlogsAnimation'
import ContactAnimation from '../../component/contact/ContactAnimation'

const Home_with_animation = () => {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);

    // === dark mode area start === //
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const json = localStorage.getItem("dark-mode");
      const currentMode = JSON.parse(json);
      if (currentMode) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    }, []);
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
      localStorage.setItem("dark-mode", json);
    }, [darkMode]);
    // === dark mode area end === //

    const nav_item = [
        { menuName: "home", icon: "fas fa-home"},
        { menuName: "about", icon: "fas fa-user"},
        { menuName: "portfolio", icon: "fas fa-briefcase"},
        { menuName: "blogs", icon: "fas fa-envelope-open"},
        { menuName: "contact", icon: "fas fa-comments"},
    ]

    return (
        <main className="websfolio_th">
            <button
                className="dark_and_light_btn"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ?
                (<i className="fas fa-sun" style={{color: "#c4cfde"}}></i>) :
                (<i className="fas fa-moon" style={{color: "#212428"}}></i>)}
            </button>
            {/* == dark mode button end == */}
            <Tabs>
                <div className={isOpen === false ? "nav_menu" : "nav_menu active" }>
                    <TabList>
                        {nav_item.map((val, index) => {
                            return(
                            <Tab key={index} className="nav_item" onClick={openMenu}>
                                <i className={val.icon} id="icon"></i>
                                <span className="tooltiptext">{val.menuName}</span>
                            </Tab>
                            )
                        })}
                    </TabList>
                </div>
                <button className={isOpen === false ? 
                    "hamburger" : "hamburger active"}
                    onClick={openMenu}
                    >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                {/* == mobile nev button == */}
                {/* end menu content == */}
                <TabPanel>
                    <HeroAnimation />
                </TabPanel>
                {/* == hero animation area end == */}
                <TabPanel>
                    <AboutAnimation />
                </TabPanel>
                {/* == about animation area end == */}
                <TabPanel>
                    <PortfolioAnimation />
                </TabPanel>
                {/* == portfolio animation area end == */}
                <TabPanel>
                    <BlogsAnimation />
                </TabPanel>
                {/* == blog animation area end == */}
                <TabPanel>
                    <ContactAnimation />
                </TabPanel>
                {/* == contact animation area end == */}
                {/* === all tabpanel end === */}
            </Tabs>
            {/* === tab area end === */}


        </main>
    )
}

export default Home_with_animation;

