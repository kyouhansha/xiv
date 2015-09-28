import React from 'react'
import { Navigation, RouteHandler } from 'react-router'

import reactor from '../reactor'

var App = React.createClass({
    mixins: [reactor.ReactMixin, Navigation],
    getDataBindings () {
        return {
            gear: ['gear']
        }
    },
    render () {
        return (
            <div className="app">
                <header className="appBar">
                    <a href="/" className="appBar-title"
                        onClick={ev => this.handleLinkClick('/', ev)}>
                        xiv
                    </a>
                    <a href="/build" className="appBar-link"
                        onClick={ev => this.handleLinkClick('build', ev)}>
                        Build
                    </a>
                    <a href="/about" className="appBar-link"
                        onClick={ev => this.handleLinkClick('about', ev)}>
                        About
                    </a>
                </header>
                <RouteHandler/>
            </div>
        )
    },
    handleLinkClick (page, ev) {
        ev.preventDefault()

        this.transitionTo(page)
    }
})

export default App
