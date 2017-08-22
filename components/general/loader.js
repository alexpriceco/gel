import React, { Component } from 'react'
import sheet from './loader.scss'
import Style from './style'

export class Loader extends Component {
  render () {
    const { style } = this.props || {}

    let color = '#EEEEEE'
    if (this.props.dark) color = '#333333'
    if (this.props.halfway) color = '#BABABA'
    if (this.props.blue) color = '#9CD1F4'
    if (this.props.callout) color = '#DB9D23'
    if (this.props.green) color = '#12874B'

    let indicator = '#27DD7E'
    if (this.props.halfway) indicator = '#1B1B1B'
    if (this.props.blue) indicator = '#FFFFFF'
    if (this.props.callout) indicator = '#1B1B1B'
    if (this.props.green) indicator = '#FFFFFF'

    return (
      <div style={style}>
        <Style sheet={sheet} />
        <div className='_standard-loader' style={{
          'border': `0.15em solid ${color}`,
          'borderTop': `0.15em solid ${indicator}`}} />
      </div>
    )
  }
}

export default Loader
