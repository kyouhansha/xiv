import React from 'react'

import actions from '../actions'
import constants from '../constants'
import reactor from '../reactor'

const LANG = 'en'
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
            <div>
                <h2>
                    {job.getIn(['name', LANG])}
                </h2>
                {this.renderGearSlots()}
            </div>
        )
    },
    renderGearItems (slot) {
        var { build, gear } = this.state

        return gear
            .entrySeq()
            .filter(([k, v]) => isItemSlottable(v, slot))
            .map(([k, v]) => {
                var style = {
                    fontStyle: build.getIn(['items', slot.get('id')]) === v ? 'italic' : 'normal'
                }

                return (
                    <li key={k} style={style} onClick={e => this.handleGearItemClick(slot, v, e)}>
                        {v.getIn(['name', LANG])}
                    </li>
                )
            })
    },
    renderGearSlots () {
        return constants.get('slots')
            .entrySeq()
            .map(([k, v]) => {
                return (
                    <div key={k}>
                        <h3>{v.getIn(['name', LANG])}</h3>
                        <ul>
                            {this.renderGearItems(v)}
                        </ul>
                    </div>
                )
            })
    },
    handleGearItemClick (slot, item, e) {
        actions.fillBuildSlot(slot, item)
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
