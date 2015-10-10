import React from 'react'
import { Navigation, State } from 'react-router'

import constants from '../constants'
import reactor from '../reactor'

const lang = constants.get('lang')
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
            <div className="page" data-page="build">
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
                var linkProps = {
                    className: 'gridList-tile',
                    href: this.makeHref('build_form', { job: k }),
                    onClick: ev => this.handleJobClick(k, ev)
                }

                return (
                    <div key={k} className="gridList-cell">
                        <a {...linkProps}>
                            {v.getIn(['name', lang])}
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
