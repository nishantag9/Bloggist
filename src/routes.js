import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"

import Home from "./modules/home"
import Posts from "./modules/posts/Posts"
import PostDetails from "./modules/posts/PostDetails"

export default function Routes(){
    return(
        <Router>
            <Switch>
            <Route path="/users" component={Home}/>
            <Route exact path="/posts/:userId" component={Posts}/>
            <Route path="/posts/:userId/post/:postId" component={PostDetails}/>
            <Redirect from="/" to="/users"/>
            </Switch>
        </Router>
    )
}
