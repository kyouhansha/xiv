import { Store } from 'nuclear-js'

import constants from '../constants'
import { toOrderedImmutable } from '../util'

const none = constants.get('none')

const buildStore = Store({
    getInitialState () {
        return toOrderedImmutable({
            items: {}
        })
    },
    initialize () {
        this.on('SET_JOB', (state, id) => {
            return toOrderedImmutable({
                job: constants.getIn(['jobs', id]),
                items: {}
            })
        })

        this.on('SET_BUILD_SLOT', (state, [slot, item]) => {
            var path = ['items', slot.get('id')]

            return (item === none)
                ? state.deleteIn(path)
                : state.setIn(path, item)
        })
    }
})

export default buildStore
