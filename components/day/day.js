import React, { Component } from 'react'
import Style from '../general/style'
import sheet from './day.scss'

export class Day extends Component {
  render () {
    const { timeline, selectedDay } = this.props
    console.info(timeline)
    return (
      <section className='day'>
        <Style sheet={sheet} />

        <article className='log'>
          <h2>Log <span>// { selectedDay.substring(0, 10) }</span></h2>
        </article>

        <article className='analytics'>
          ANALYTICS
        </article>
      </section>
    )
  }
}

export default Day
