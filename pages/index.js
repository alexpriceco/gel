import React, { Component } from 'react'

import Stylesheet from '../components/general/stylesheet.js'
import sheet from '../components/base.scss'

// TODO: Uncomment if you want Firebase
// import config from '../config/firebase-api-key.js'
// import * as firebase from 'firebase'
// require('firebase/firestore')
// if (!firebase.apps.length) {
//   console.log(
//     '%cCreating a new firebase instance...',
//     'color: grey; font-style: italic'
//   )
//
//   firebase.initializeApp(config)
// }

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: '',

      // Data from Firebase
      data: {}
    }
  }

  componentDidMount () {
    console.debug('Loaded')
    this.setState({ loading: false })

  // TODO: uncomment if you want Firebase
  //   this.getDataFromFirebase().then((data) => {
  //     this.setState({
  //       loading: false,
  //       data
  //     })
  //   }).catch((error) => {
  //     this.setState({
  //       loading: false,
  //       error
  //     })
  //   })
  }

  // TODO: uncomment if you want Firebase
  // async getDataFromFirebase () {
  //   const rootCollection = firebase.firestore().collection('triplebyte')
  //   const rootDoc = await rootCollection.doc('root').get()
  //   return rootDoc.data()
  // }

  render () {
    if (this.state.loading) {
      return (
        <main>
          Just a second...
          <Stylesheet sheet={sheet} />
        </main>
      )
    } else if (this.state.error) {
      return (
        <main>
          <h1>That's bad. The following error occurred:</h1>
          <div className='error'>{this.state.error}</div>
          <Stylesheet sheet={sheet} />
        </main>
      )
    }

    return (
      <main>
        <h1>App title</h1>
        <Stylesheet sheet={sheet} />
      </main>
    )
  }
}

export default Index
