import apiKey from '../../config/firebase-api-key.js'
import firebase from 'firebase'
import Rebase from 're-base'

const config = {
  apiKey: apiKey,
  authDomain: 'gel-fb.firebaseio.com',
  databaseURL: 'https://gel-fb.firebaseio.com',
  projectId: 'gel-fb'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

let base = Rebase.createClass(firebase.apps[0].database())
export default base
