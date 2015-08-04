import React from 'react'
import Router from 'react-router'
import { Route } from 'react-router'

import About from './component/About'
import App from './component/App'
import Build from './component/Build'
import BuildForm from './component/BuildForm'

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="about" path="about" handler={About}/>
        <Route name="build" path="build" handler={Build}/>
        <Route name="build_form" path="/build/:job" handler={BuildForm}/>
    </Route>
)

export default routes
