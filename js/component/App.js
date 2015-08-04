import React from 'react'
import { Link, RouteHandler } from 'react-router'

import reactor from '../reactor'

var App = React.createClass({
    mixins: [reactor.ReactMixin],
    getDataBindings () {
        return {
            gear: ['gear']
        }
    },
    render () {
        return (
            <div>
                <nav>
                    <Link to="about">About</Link>
                    <Link to="build">Build</Link>
                </nav>
                <RouteHandler/>
            </div>
        )
    }
})

export default App
