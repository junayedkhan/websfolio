import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../component/navbar/Navbar'
import Home from '../component/home/Home'
import About from '../component/about/About'
import Portfolio from '../component/portfolio/Portfolio'
import Blogs from '../component/blogs/Blogs'
import Contact from '../component/contact/Contact'


const Router = () => {
    return (
    <section className="websfolio_th">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/themewithoutanimation" component={Home} />
        </Switch>
    </section>
    )
}

export default Router;
