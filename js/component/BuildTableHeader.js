import Immutable from 'immutable'
import React from 'react'

import Action from './Action'
import constants from '../constants'
import { toOrderedImmutable } from '../util'

const lang = constants.get('lang')

const T = Immutable.fromJS({
    "name": {
        "en": "Name"
    },
    "ilvl": {
        "en": "ilvl"
    }
})

var BuildTableHeader = React.createClass({
    render () {
        var { job, ...props } = this.props
        var children = []

        children.push(
            this.renderControl(),
            this.renderName(),
            this.renderItemLevel(),
            ...this.renderStats(job.get('primary_stats')),
            ...this.renderStats(job.get('secondary_stats'))
        )

        return (
            <li {...props}>
                {children}
            </li>
        )
    },
    renderControl () {
        return (
            <div key="control" className="build-item-control">
                <i className="icon icon--touch" data-icon="checkbox" />
            </div>
        )
    },
    renderName () {
        return (
            <div key="name" className="build-item-name">
                {T.getIn(["name", lang])}
            </div>
        )
    },
    renderItemLevel() {
        return (
            <div key="ilvl" className="build-item-ilvl">
                {T.getIn(["ilvl", lang])}
            </div>
        )
    },
    renderStats (jobStats) {
        return jobStats
            .map(v => (
                <div key={v} className="build-item-stat">
                    {v}
                </div>
            ))
            .values()
    }
})

export default BuildTableHeader
