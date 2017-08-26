import apiKey from '../../config/firebase-api-key.js'
let Rebase = require('re-base')
let firebase = require('firebase')

let app = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: 'gel-fb.firebaseio.com',
  databaseURL: 'https://gel-fb.firebaseio.com',
  projectId: 'gel-fb'
})

console.info(app)

let base = Rebase.createClass(app.database())
export default base
