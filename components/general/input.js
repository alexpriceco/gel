import React, { Component } from 'react'

export class Input extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: this.props.value || ''
    }
  }

  render () {
    const {
      type,
      nofield,
      placeholder
    } = this.props

    if (type === 'numeric') {

    }


    return (
      <input
        className={nofield ? 'no-field' : ''}
        value={this.state.value}
        placeholder={placeholder}
        onChange={(e) => {
          this.setState({ value: e.target.value })
        }}
      />
    )
  }
}

export default Input
