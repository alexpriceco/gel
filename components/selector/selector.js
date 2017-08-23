import React, { Component } from 'react'
import Style from '../general/style'
import sheet from './selector.scss'

export class Selector extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      selected: props.defaultOption
    }
  }

  updateSelected (option) {
    this.setState({ selected: option })
    this.props.updateSelected(option)
  }

  render () {
    return (
      <div className='selector'>
        <Style sheet={sheet} />
        {
          this.props.options.map((option) => {
            if (option === this.state.selected) {
              return (
                <div
                  onClick={() => this.updateSelected(option)}
                  className='selector--option selector--selected'>
                  { option }
                </div>
              )
            } else {
              return (
                <div
                  onClick={() => this.updateSelected(option)}
                  className='selector--option'>
                  { option }
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default Selector
