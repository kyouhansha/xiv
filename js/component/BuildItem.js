import React from 'react'

import Action from './Action'
import constants from '../constants'
import { toOrderedImmutable } from '../util'

const lang = constants.get('lang')

const text = toOrderedImmutable({
    "button-select": {
        "en": "Select"
    },
    "tab-stats": {
        "en": "Stats"
    },
    "tab-source": {
        "en": "Source"
    }
})

var BuildItem = React.createClass({
    render () {
        var { item, ...props } = this.props

        return (
            <li {...props}>
                <div className="build-item-header">
                    <div className="build-item-image">
                    </div>
                    <div className="build-item-titles">
                        <div className="build-item-name">
                            {item.getIn(['name', lang])}
                        </div>
                        <div className="build-item-itemLevel">
                            {`Item Level ${item.get('item_level')}`}
                        </div>
                    </div>
                </div>
                <div className="build-item-tabs">
                    <div className="build-item-tab" data-tab="stats">
                        {text.getIn(['tab-stats', lang])}
                    </div>
                    <div className="build-item-tab" data-tab="source">
                        {text.getIn(['tab-source', lang])}
                    </div>
                </div>
                <div className="build-item-panes">
                </div>
                <div className="build-item-actions">
                    <Action className="action--flat" data-action="select">
                        {text.getIn(['button-select', lang])}
                    </Action>
                </div>
            </li>
        )
    }
})

export default BuildItem
