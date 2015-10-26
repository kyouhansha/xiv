import Immutable from 'immutable'

export function calculateBuildStat (items, stat) {
    return items
        .reduce((r, v) => r += v.getIn(['stats', stat], 0), 0)
}

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
