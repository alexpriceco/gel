import React, { Component } from 'react'
import sheet from './button.scss'
import Style from './style'

export class Button extends Component {
  render () {
    const { active: status } = this.props
    const active = !(status === false)
    return (
      <div
        className={'button' + (active ? '' : ' inactive')}
        onClick={active ? this.props.action : null}
      >
        <Style sheet={sheet} />
        {this.props.content}
      </div>
    )
  }
}

export default Button
