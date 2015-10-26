import Immutable from 'immutable'
import React from 'react'

import Action from './Action'
import constants from '../constants'
import { toOrderedImmutable } from '../util'

const lang = constants.get('lang')
const zeroText = '--'

var BuildTableRow = React.createClass({
    render () {
        var { item, job, slot, ...props } = this.props
        var itemStats = item.get('stats')
        var children = []

        children.push(
            this.renderControl(),
            this.renderName(item),
            this.renderItemLevel(item),
            ...this.renderStats(itemStats, job.get('primary_stats')),
            ...this.renderStats(itemStats, job.get('secondary_stats'))
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
    renderName (item) {
        return (
            <div key="name" className="build-slot-item-name">
                {item.getIn(['name', lang])}
            </div>
        )
    },
    renderItemLevel(item) {
        return (
            <div key="ilvl" className="build-slot-item-ilvl">
                {item.get('item_level')}
            </div>
        )
    },
    renderStats (itemStats, jobStats) {
        return jobStats
            .map(v => (
                <div key={v} className="build-slot-item-stat">
                    {itemStats.get(v) || zeroText}
                </div>
            ))
            .values()
    }
})

export default BuildTableRow
