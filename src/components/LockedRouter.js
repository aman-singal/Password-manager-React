import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Nomatch from './Nomatch'
import Signout from './UserSignout'


function ReactRouter() {
    return (
        <div>
            <>
             <Router>
              <Switch>
                
                <Route exact path="/" component={Home} />
                <Route  path="/login" component={Login} />
                <Route  path="/signup" component={Signup} />
                <Route  path="/signout" component={Signout} />
                <Route component={Nomatch} />
              </Switch>
             </Router>
            </>
        </div>
    )
}

export default ReactRouter
