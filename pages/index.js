import React, { Component } from 'react'

import base from '../components/general/rebase'
import Selector from '../components/selector/selector'
import Style from '../components/general/style'
import sheet from '../components/base.scss'
import Week from '../components/week/week'
import Day from '../components/day/day'

export class Layout extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      selectedDay: new Date(new Date().setHours(0, 0, 0, 0))
        .toISOString().replace(/\./, ''),
      activeSection: 'day',
      loading: true
    }
  }

  componentDidMount () {
    this.ref = base.syncState('alexprice', {
      context: this,
      state: 'timeline',
      then: () => this.setState({ loading: false })
    })
  }

  renderSection (section) {
    const {
      loading,
      selectedDay,
      timeline
    } = this.state

    if (loading) return <div>Loading...</div>

    switch (section) {
      case 'day': return (
        <Day
          timeline={timeline[selectedDay]}
          selectedDay={selectedDay}
        />
      )
      case 'week': return (
        <Week />
      )
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
