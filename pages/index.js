import React, { Component } from 'react'
import Selector from '../components/selector/selector'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import Week from '../components/week'
import Day from '../components/day'

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      activeSection: 'day'
    }
  }

  renderSection (section) {
    switch (section) {
      case 'day': return <Day />
      case 'week': return <Week />
      default: return <div>Err</div>
    }
  }

  render () {
    return (
      <main>
        <header>
          <h1>Gel</h1>
          <Selector
            options={['Infinite', 'Week', 'Day']}
            updateSelected={(option) => {
              this.setState({ activeSection: option.toLowerCase() })
            }}
            defaultOption={'Day'}
          />
          <Style sheet={sheet} />
        </header>

        { this.renderSection(this.state.activeSection) }
      </main>
    )
  }
}

export default Layout
