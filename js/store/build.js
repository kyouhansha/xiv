import { Store, toImmutable } from 'nuclear-js'

import constants from '../constants'

const buildStore = Store({
    getInitialState () {
        return toImmutable({})
    },
    initialize () {
        this.on('SET_JOB', (state, id) => toImmutable({ job: constants.getIn(['jobs', id]) }))

        this.on('FILL_BUILD_SLOT', (state, [slot, item]) => state.setIn(['items', slot.get('id')], item))
    }
})

export default buildStore
