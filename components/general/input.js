import React, { Component } from 'react'

export class Input extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }

  render () {
    const {
      placeholder
    } = this.props

    return (
      <input
        placeholder={placeholder}
      />
    )
  }
}

export default Input
