import React, { Component } from 'react'
import _ from 'lodash'

import Input from '../general/input'
import Style from '../general/style'
import sheet from './day.scss'

export class Day extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      timeline: props.timeline
    }
  }

  renderLog () {
    let lastKey = 0
    let renderedLog = []
    const { timeline } = this.state
    let sortedTimeline = _.orderBy(timeline, ['key'])

    for (let i in sortedTimeline) {
      const entry = sortedTimeline[i]
      const time = `${entry.key.slice(0, 2)}:${entry.key.slice(2)}`
      renderedLog.push(
        <tr className='entry--container' key={i}>
          <td className='entry--end-time'>{time}</td>
          <td className='entry--activity'>{entry.activity}</td>
          <td className='entry--category'>{entry.category}</td>
        </tr>
      )

      lastKey = i
    }

    renderedLog.push(
      <tr className='entry--container' key={lastKey + 'lol'}>
        <td className='entry--end-time'>
          <Input
            placeholder='2400'
            type='time'
          />
        </td>
        <td className='entry--activity'>
          <Input
            placeholder='activity'
            type='activity'
          />
        </td>
        <td className='entry--category'>
          <Input
            placeholder='category'
            type='category'
          />
        </td>
      </tr>
    )

    return (
      <table className='log--rows'>
        <thead>
          <tr>
            <th className='entry--end-time'>Timestamp</th>
            <th className='entry--activity'>Activity</th>
            <th className='entry--category'>Category</th>
          </tr>
        </thead>

        <tbody>
          { renderedLog }
        </tbody>
      </table>
    )
  }

  render () {
    const { selectedDay } = this.props
    return (
      <section className='day'>
        <Style sheet={sheet} />

        <article className='log--container'>
          <h2>Log
          <span>&nbsp;//&nbsp;
            { selectedDay.substring(0, 10) }
          </span>
          </h2>
          { this.renderLog() }
        </article>

        <article className='analytics--container'>
          <h2>ANALYTICS</h2>
          TODO SOON
        </article>
      </section>
    )
  }
}

export default Day
