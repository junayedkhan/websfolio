import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Preview from '../views/Preview';
import Home_without_animation from '../views/all-home-version/Home_without_animation';
import Home_with_animation from '../views/all-home-version/Home_with_animation';
import NotFound from '../views/NotFound';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Preview} />
            <Route exact path="/home-with-animation" component={Home_with_animation} />
            <Route exact path="/home-without-animation" component={Home_without_animation} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router;
