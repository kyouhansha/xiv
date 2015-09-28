import Immutable from 'immutable'

export function joinClassNames (names) {
    return Immutable.Seq(names)
        .filter((value, key) => value)
        .flip()
        .join(' ')
}

export function toOrderedImmutable (obj) {
    return Immutable.fromJS(obj, (key, value) => {
        return (Immutable.Iterable.isIndexed(value))
            ? value.toList()
            : value.toOrderedMap()
    })
}
