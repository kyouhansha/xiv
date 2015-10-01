import Immutable from 'immutable'
import { Store } from 'nuclear-js'

import actions from '../actions'
import remote from '../remote'
import { toOrderedImmutable } from '../util'

const gearStore = Store({
    getInitialState () {
        return Immutable.fromJS({})
    },
    initialize () {
        this.on('SET_GEAR', (state, data) => {
            return toOrderedImmutable(data)
        })

        remote
            .child('gear')
            .once('value', data => actions.setGear(data.val()))
    }
})

export default gearStore
