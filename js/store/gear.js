import { Store } from 'nuclear-js'

import { toOrderedImmutable } from '../util'
import gearData from '../data/gear'

const gearStore = Store({
    getInitialState () {
        return toOrderedImmutable(gearData)
    },
    initialize () {}
})

export default gearStore
