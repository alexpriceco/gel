import React, { Component } from 'react'
import sheet from './button.scss'
import Style from './style'

export class Button extends Component {
  render () {
    console.info(this.props)
    return (
      <div
        className='button'
        onClick={(this.props.active !== false)
          ? this.props.action
          : null}
      >
        <Style sheet={sheet} />
        {this.props.content}
      </div>
    )
  }
}

export default Button
