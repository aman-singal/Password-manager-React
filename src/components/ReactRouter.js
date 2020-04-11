import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home'
import View from './View'
import Edit from './Edit'
import Add from './Add'
import Nomatch from './Nomatch'
import Signout from './UserSignout'
import {UserContext} from './UserContext'


function ReactRouter() {
  
  
    return (
        <div>
            <>
             <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/edit" component={Edit} />
                <Route  path="/view" component={View} />
                <Route  path="/add" component={Add} />
                <Route path='/signout' component={Signout} />
                <Route component={Nomatch} />
              </Switch>
             </Router>
            </>
        </div>
    )
}

export default React.memo(ReactRouter )
