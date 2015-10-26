import Immutable from 'immutable'
import React from 'react'

import Action from './Action'
import constants from '../constants'
import { calculateBuildStat, toOrderedImmutable } from '../util'

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
        var { build, job, ...props } = this.props
        var items = build.get('items')
        var children = []

        children.push(
            this.renderControl(),
            this.renderName(),
            this.renderItemLevel(),
            ...this.renderStats(job.get('primary_stats'), items),
            ...this.renderStats(job.get('secondary_stats'), items)
        )

        return (
            <li {...props}>
                {children}
            </li>
        )
    },
    renderControl () {
        return (
            <div key="control" className="build-slot-item-control">
                <i className="icon icon--touch" data-icon="checkbox" />
            </div>
        )
    },
    renderName () {
        return (
            <div key="name" className="build-slot-item-name">
                {T.getIn(["name", lang])}
            </div>
        )
    },
    renderItemLevel() {
        return (
            <div key="ilvl" className="build-slot-item-ilvl">
                {T.getIn(["ilvl", lang])}
            </div>
        )
    },
    renderStats (jobStats, items) {
        return jobStats
            .map(v => {
                var total = calculateBuildStat(items, v)

                return (
                    <div key={v} className="build-slot-item-stat">
                        <span className="build-slot-item-stat-total">
                            {total}
                        </span>
                        <span>
                            {v}
                        </span>
                    </div>
                )
            })
            .values()
    }
})

export default BuildTableHeader
