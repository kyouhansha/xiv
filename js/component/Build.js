import React from 'react'
import { Navigation, State } from 'react-router'

import constants from '../constants'
import reactor from '../reactor'

const LANG = 'en'
const none = constants.get('none')

var Build = React.createClass({
    mixins: [reactor.ReactMixin, Navigation, State],
    getDataBindings () {
        return {
            build: ['build']
        }
    },
    render () {
        return (
            <div className="page--build">
                <h2 className="page-title">Build</h2>
                <div className="gridList">
                    {this.renderJobTiles()}
                </div>
            </div>
        )
    },
    renderJobTiles () {
        return constants.get('jobs')
            .entrySeq()
            .map(([k, v]) => {
                var uri = this.makeHref('build_form', { job: k })

                return (
                    <div key={k} className="gridList-cell">
                        <a href={uri} className="gridList-tile"
                            onClick={ev => this.handleJobClick(k, ev)}>
                            {v.getIn(['name', LANG])}
                        </a>
                    </div>
                )
            })
    },
    handleJobClick (job, ev) {
        ev.preventDefault()

        this.transitionTo('build_form', { job: job })
    }
})

export default Build
