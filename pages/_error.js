import React, { Component } from 'react'
import Style from '../components/general/style'
import sheet from '../components/base.scss'

export default class Error extends Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res
      ? res.statusCode
      : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    return (
      <section>
        <Style sheet={sheet} />
        Error {this.props.statusCode}
      </section>
    )
  }
}
