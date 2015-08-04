import reactor from './reactor'

const actions = {
    fillBuildSlot (slot, item) {
        reactor.dispatch('FILL_BUILD_SLOT', [slot, item])
    },
    setJob (job) {
        reactor.dispatch('SET_JOB', job)
    }
}

export default actions
