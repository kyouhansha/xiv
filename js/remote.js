import Firebase from 'firebase'

const uri = 'https://intense-heat-6572.firebaseio.com'

export default new Firebase(uri)

export const remoteGear = new Firebase(`${uri}/gear`)
