import Immutable from 'immutable'
import React from 'react'

import Action from './Action'
import constants from '../constants'
import { toOrderedImmutable } from '../util'

const lang = constants.get('lang')

var BuildItem = React.createClass({
    render () {
        var { item, job, slot, ...props } = this.props
        var children = []

        children.push(
            this.renderControl(),
            this.renderName(item),
            this.renderItemLevel(item),
            ...this.renderStats(item, job)
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
    renderName (item) {
        return (
            <div key="name" className="build-item-name">
                {item.getIn(['name', lang])}
            </div>
        )
    },
    renderItemLevel(item) {
        return (
            <div key="ilvl" className="build-item-ilvl">
                {item.get('item_level')}
            </div>
        )
    },
    renderStats (item, job) {
        var itemStats = item.get('stats')
        const zeroText = '--'

        return job.get('secondary_stats')
            .map(v => (
                <div key={v} className="build-item-stat">
                    {itemStats.get(v) || zeroText}
                </div>
            ))
            .values()
    }
})

export default BuildItem
