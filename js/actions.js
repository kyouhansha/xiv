import reactor from './reactor'

const actions = {
    setBuildSlot (slot, item) {
        reactor.dispatch('SET_BUILD_SLOT', [slot, item])
    },
    setGear (data) {
        reactor.dispatch("SET_GEAR", data)
    },
    setJob (job) {
        reactor.dispatch('SET_JOB', job)
    }
}

export default actions
