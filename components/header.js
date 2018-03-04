import React, { Component } from 'react'

import Stylesheet from './general/stylesheet.js'
import sheet from './header.scss'

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: ''
    }
  }

  componentDidMount () {
    this.setState({ loading: false })
  }

  day () {
    switch (new Date().getDay()) {
      case 0: return 'Sunday'
      case 1: return 'Monday'
      case 2: return 'Tuesday'
      case 3: return 'Wednesday'
      case 4: return 'Thursday'
      case 5: return 'Friday'
      default: return 'Saturday'
    }
  }

  month () {
    switch (new Date().getMonth()) {
      case 0: return 'January'
      case 1: return 'February'
      case 2: return 'March'
      case 3: return 'April'
      case 4: return 'May'
      case 5: return 'June'
      case 6: return 'July'
      case 7: return 'August'
      case 8: return 'September'
      case 9: return 'October'
      case 10: return 'November'
      default: return 'December'
    }
  }

  date () {
    switch (new Date().getDate()) {
      case 0: return 'first'
      case 1: return 'second'
      case 2: return 'third'
      case 3: return 'fourth'
      case 4: return 'fifth'
      case 5: return 'sixth'
      case 6: return 'seventh'
      case 7: return 'eighth'
      case 8: return 'ninth'
      case 9: return 'tenth'
      case 20: return '21st'
      case 21: return '22nd'
      case 22: return '23rd'
      case 23: return new Date().getDate() + 'th'
      case 30: return '31st'
      default: return new Date().getDate()
    }
  }

  greeting () {
    const now = new Date().getHours()
    if (now <= 0 && now < 6) return 'Schlaft gut'
    else if (now >= 6 && now < 11) return `Happy ${this.day()} morning!`
    else if (now >= 11 && now < 15) return 'Good day'
    else if (now >= 15 && now < 18) return 'Afternoon'
    else if (now > 18) return 'Evening'
    else return 'Hello'
  }

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

    const todoistString = ''

    console.debug(this, this.day, this.date, this.month)

    return (
      <header>
        <h1>{this.greeting()}</h1>
        <p>It's {`${this.day()}, the ${this.date()} of ${this.month()}`}.
          {todoistString}</p>
        <Stylesheet sheet={sheet} />
      </header>
    )
  }
}

export default Index
