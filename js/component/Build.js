import React from 'react'
import { Link, Navigation } from 'react-router'

import constants from '../constants'
import reactor from '../reactor'

const LANG = 'en'
const none = constants.get('none')

var Build = React.createClass({
    mixins: [reactor.ReactMixin, Navigation],
    getDataBindings () {
        return {
            build: ['build']
        }
    },
    render () {
        return (
            <div>
                <h2>This is the build page</h2>
                {this.renderJobForm()}
            </div>
        )
    },
    renderJobForm () {
        return constants.get('jobs')
            .entrySeq()
            .map(([k, v]) => {
                return (
                    <div key={k} onClick={e => this.handleJobClick(k, e)}>
                        {v.getIn(['name', LANG])}
                    </div>
                )
            })
    },
    handleJobClick (job, e) {
        this.transitionTo('build_form', { job: job })
    }
})

export default Build
