import Immutable from 'immutable'

function toOrderedImmutable (obj) {
    return Immutable.fromJS(obj, (key, value) => {
        return (Immutable.Iterable.isIndexed(value))
            ? value.toList()
            : value.toOrderedMap()
    })
}

export { toOrderedImmutable }
