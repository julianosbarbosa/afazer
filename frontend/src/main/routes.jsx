import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Afazer from '../afazer/afazer'
import About from '../about/about'

export default props=>(
    <Router history={hashHistory}>
        <Route path='/afazeres' component={Afazer}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/afazeres'/>
    </Router>
)