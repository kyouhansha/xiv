import React from 'react'
import Router from 'react-router'

import reactor from './reactor'
import routes from './routes'
import buildStore from './store/build'
import gearStore from './store/gear'

reactor.registerStores({
    build: buildStore,
    gear: gearStore
})

Router.run(routes, Router.HistoryLocation, Root => {
    React.render(<Root/>, document.getElementById('app'))
})
