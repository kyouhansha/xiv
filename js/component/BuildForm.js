import Immutable from 'immutable'
import React from 'react'

import BuildTableHeader from './BuildTableHeader'
import BuildTableRow from './BuildTableRow'
import actions from '../actions'
import constants from '../constants'
import reactor from '../reactor'
import { calculateBuildStat, joinClassNames } from '../util'

const lang = constants.get('lang')
const none = constants.get('none')

const T = Immutable.fromJS({
    "item_level": {
        "en": "Item Level"
    }
})

var BuildForm = React.createClass({
    mixins: [reactor.ReactMixin],
    statics: {
        willTransitionTo (transition, { job }) {
            actions.setJob(job)
        }
    },
    getDataBindings () {
        return {
            build: ['build'],
            gear: [['gear'], ['build'], (gear, build) => {
                return gear.filter(v => isItemSuitable(v, build.get('job', none)))
            }]
        }
    },
    render () {
        var { build, gear } = this.state
        var job = build.get('job', none)

        return (
            <div className="page" data-page="buildForm">
                <h2 className="page-title">
                    {job.getIn(['name', lang])}
                </h2>
                <div className="build-table">
                    {this.renderTableHeader()}
                    <div className="build-slots">
                        {this.renderBuildSlots()}
                    </div>
                </div>
                <div className="build-items">
                    {this.renderBuildItems()}
                </div>
                <div className="build-stats">
                    {this.renderBuildStats()}
                </div>
            </div>
        )
    },
    renderBuildItems () {
        var { build } = this.state
        var items = build.get('items', none)

        return constants.get('slots')
            .entrySeq()
            .map(([slotId, slot]) => {
                var item = items.get(slotId, none)

                if (item === none) return null

                let subhead = [
                    T.getIn(['item_level', lang]),
                    item.get('item_level'),
                    slot.getIn(['name', lang])
                ].join(' ')

                return (
                    <div key={slotId} className="build-item">
                        <div className="build-item-image" />
                        <div className="build-item-header">
                            <div className="build-item-name">
                                {item.getIn(['name', lang])}
                            </div>
                            <div className="build-item-subhead">
                                {subhead}
                            </div>
                        </div>
                    </div>
                )
            })
            .toArray()
    },
    renderBuildSlots () {
        var gear = this.state.gear.entrySeq()

        return constants.get('slots')
            .entrySeq()
            .map(([slotId, slot]) => {
                var slotGear = gear
                    .filter(([itemId, item]) => isItemSlottable(item, slot))

                if (!slotGear.count()) return null

                return (
                    <div key={slotId} className="build-slot">
                        <h3 className="build-slot-name">
                            {slot.getIn(['name', lang])}
                        </h3>
                        <ul className="build-slot-items">
                            {this.renderTableRows(slot, slotGear)}
                        </ul>
                    </div>
                )
            })
            .toArray()
    },
    renderBuildStats () {
        var { build } = this.state
        var items = build.get('items', none)
        var job = build.get('job', none)

        return job.get('secondary_stats')
            .valueSeq()
            .map(v => {
                return (
                    <div key={v} className="build-stat">
                        <div className="build-stat-label">
                            {v}
                        </div>
                        <div className="build-stat-value">
                            {calculateBuildStat(items, v)}
                        </div>
                    </div>
                )
            })
            .toArray()
    },
    renderTableHeader () {
        var { build } = this.state
        var job = build.get('job', none)

        var headerProps = {
            key: 'header',
            build: build,
            job: job,
            className: joinClassNames({
                'build-slot-item': true,
                'build-table-header': true
            }),
        }

        return (
            <BuildTableHeader {...headerProps} />
        )
    },
    renderTableRows (slot, slotGear) {
        var { build, gear } = this.state
        var job = build.get('job', none)

        return slotGear.map(([k, v]) => {
            var isSelected = (build.getIn(['items', slot.get('id')]) === v)

            var rowProps = {
                key: k,
                item: v,
                job: job,
                slot: slot,
                className: joinClassNames({
                    'build-slot-item': true,
                    'is-selected': isSelected
                }),
                onClick: e => this.selectItem(slot, v, e)
            }

            return (
                <BuildTableRow {...rowProps} />
            )
        })
    },
    selectItem (slot, item, e) {
        var { build } = this.state

        if (build.getIn(['items', slot.get('id')]) === item) item = none

        actions.setBuildSlot(slot, item)
    }
})

function isItemSlottable (item, slot) {
    var slotKey = slot.get('compatibility') || slot.get('id')

    return item.get('slot') === slotKey
}

function isItemSuitable (item, job) {
    if (job === none) return true

    let jobKey = job.get('id')
    let classes = item.get('classes')

    if (classes.includes(jobKey)) return true

    let stats = item.get('stats')
    let jobStats = job.get('primary_stats')

    return classes.includes('all') && jobStats.some(v => stats.has(v))
}

export default BuildForm
