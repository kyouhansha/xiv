import { Store } from 'nuclear-js'

import { toOrderedImmutable } from '../util'
import gearData from '../data/gear'

const gearStore = Store({
    getInitialState () {
        return toOrderedImmutable(gearData)
            .toKeyedSeq()
            .mapKeys((k, v) => v.get('id'))
            .toOrderedMap()
    },
    initialize () {}
})

export default gearStore
