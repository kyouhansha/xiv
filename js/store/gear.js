import Immutable from 'immutable'
import { Store } from 'nuclear-js'

import actions from '../actions'
import { remoteGear } from '../remote'
import { toOrderedImmutable } from '../util'

const gearStore = Store({
    getInitialState () {
        return Immutable.fromJS({})
    },
    initialize () {
        this.on('SET_GEAR', (state, data) => {
            return toOrderedImmutable(data)
                .toKeyedSeq()
                .mapKeys((k, v) => v.get('id'))
                .toOrderedMap()
        })

        remoteGear.once("value", data => actions.setGear(data.val()))
    }
})

export default gearStore
