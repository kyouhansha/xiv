import React from 'react'

import BuildItem from './BuildItem'
import actions from '../actions'
import constants from '../constants'
import reactor from '../reactor'
import { joinClassNames } from '../util'

const lang = constants.get('lang')
const none = constants.get('none')

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
                <div className="build-slots">
                    {this.renderGearSlots()}
                </div>
                <div className="build-stats">
                    {this.renderBuildStats()}
                </div>
            </div>
        )
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
    },
    renderGearItems (slot, slotGear) {
        var { build, gear } = this.state
        var job = build.get('job', none)

        return slotGear.map(([k, v]) => {
            var isSelected = (build.getIn(['items', slot.get('id')]) === v)

            var listItemProps = {
                key: k,
                item: v,
                job: job,
                slot: slot,
                className: joinClassNames({
                    'build-item': true,
                    'is-selected': isSelected
                }),
                onClick: e => this.handleGearItemClick(slot, v, e)
            }

            return (
                <BuildItem {...listItemProps} />
            )
        })
    },
    renderGearSlots () {
        var gear = this.state.gear.entrySeq()

        return constants.get('slots')
            .entrySeq()
            .map(([slotId, slot]) => {
                var slotGear = gear
                    .filter(([itemId, item]) => isItemSlottable(item, slot))

                if (slotGear.count()) {
                    return (
                        <div key={slotId} className="build-slot">
                            <h3 className="build-slot-name">{slot.getIn(['name', lang])}</h3>
                            <ul className="build-items">
                                {this.renderGearItems(slot, slotGear)}
                            </ul>
                        </div>
                    )
                } else {
                    return null
                }
            })
    },
    handleGearItemClick (slot, item, e) {
        var { build } = this.state

        if (build.getIn(['items', slot.get('id')]) === item) item = none

        actions.setBuildSlot(slot, item)
    }
})

function calculateBuildStat (items, stat) {
    return items
        .reduce((r, v) => r += v.getIn(['stats', stat], 0), 0)
}

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
