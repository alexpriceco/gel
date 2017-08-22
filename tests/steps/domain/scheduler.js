/* eslint-env jasmine */
import Scheduler from '../../../lib/scheduler' // FIXME: replace with root path
// import alphabet from 'alphabet'
import _ from 'lodash'
import assert from 'assert'
import moment from 'moment-timezone'

export default function () {
  this.Given(/^that we have a company$/, function () {
    this.company = {
      id: 'evaline',
      name: 'Evaline'
    }
  })

  this.Given(/^the company has work hours (\d+) to (\d+)$/,
  function (start, end) {
    this.company.workHoursStart = [+start, 0]
    this.company.workHoursEnd = [+end + 12, 0]
  })

  this.Given(/^a charger group that has (\d+) chargers$/,
  function (chargerCount) {
    this.chargerGroup = {
      id: 'chargerGroupId',
      name: 'Charger Group',
      chargers: {
        edges: _.range(1, Number(chargerCount) + 1).map(
          chargerId => ({
            node: {
              id: `A${chargerId}`,
              name: `A${chargerId}`,
              chargingSessions: {
                edges: []
              }
            }
          })
        )
      }
    }
  })

  this.When(/^a timeslot of (\d+) minutes is requested$/, function (duration) {
    this.timeslot = new Scheduler(
      this.company,         // company includes workHoursStart & workHoursEnd
      this.chargerGroup,    // chargerGroup includes chargers & sessions
      duration              // 1 hour timeslot (in minutes)
    ).getNextTime()
  })

  this.When(/^a timeslot is requested$/, function () {
    let scheduler = new Scheduler(
      this.company,         // company includes workHoursStart & workHoursEnd
      this.chargerGroup,    // chargerGroup includes chargers & sessions
      60                    // 1 hour timeslot (in minutes)
    )
    scheduler.busyIntervals = this.busyIntervals || []
    this.timeslot = scheduler.getNextTime()
  })

  this.Then(/^the timeslot should start at (\d+) (am|pm)$/, function (startHour, meridiem) {
    let startHour24 = (meridiem === 'pm' && +startHour < 12) ? +startHour + 12 : +startHour
    assert.equal(this.timeslot.start.getHours(), startHour24)
  })

  this.Then(/^the timeslot should end at (\d+) am$/, function (endHour) {
    assert.equal(this.timeslot.end.getHours(), Number(endHour))
  })

  this.Given(
  /^a session exists at (\d+) am for charger ([A-Z]\d) for (\d+) hour$/,
  function (startHour, chargerId, lengthHours) {
    const start = moment().startOf('day').add(startHour, 'hours').toDate()
    const end = moment(start).add(this.lengthHours * 60, 'minutes').toDate()
    this.chargerGroup.chargers.edges.forEach(edge => {
      if (edge.node.id === chargerId) {
        edge.node.chargingSessions.edges.push({
          node: {
            start,
            end
          }
        })
      }
    })
  })

  this.Then(/^the session should be on charger ([A-Z]\d)$/, function (chargerId) {
    assert.equal(this.timeslot.charger.id, chargerId)
  })

  this.Given(/^the timeslot (\d+) am is full$/, function (startHour) {
    const start = moment().startOf('day').add(startHour, 'hours').toDate()
    const end = moment(start).add(this.lengthHours * 60, 'minutes').toDate()
    this.chargerGroup.chargers.edges.forEach(edge => {
      edge.node.chargingSessions.edges.push({
        node: {
          start,
          end
        }
      })
    })
  })

  this.Then(/^there will be no session scheduled$/, function () {
    assert.deepEqual(this.timeslot, {})
  })

  this.Given(/^that there are no free timeslots$/, function () {
    let start = moment()
      .startOf('day')
      .add(this.company.workHoursStart[0], 'hours')
      .add(this.company.workHoursStart[1], 'minutes')
      .toDate()
    let end = moment(start)
      .add(this.duration, 'minutes')
      .toDate()
    // end of working hours
    let maxEnd = moment().startOf('day')
      .add(this.company.workHoursEnd[0], 'hours')
      .add(this.company.workHoursEnd[1], 'minutes')
      .toDate()

    while (+end <= +maxEnd) {
      this.chargerGroup.chargers.edges.forEach(edge => {
        edge.node.chargingSessions.edges.push({
          node: {
            start,
            end
          }
        })
      })
      start = end
      end = moment(start)
        .add(60, 'minutes')
        .toDate()
    }
  })

  this.Given(/^the user is busy from (\d+) (am|pm) to (\d+) (am|pm)$/, function (startHour, startMeridien, endHour, endMeridien) {
    let startHour24 = (startMeridien === 'pm' && +startHour < 12) ? +startHour + 12 : +startHour
    let endHour24 = (endMeridien === 'pm' && +endHour < 12) ? +endHour + 12 : +endHour
    this.busyIntervals = [{
      start: moment().startOf('day').add(+startHour24, 'hours').toDate(),
      end: moment().startOf('day').add(+endHour24, 'hours').toDate()
    }]
  })

  this.Given(/^the user is busy from (\d+):(\d+) am to (\d+):(\d+) am$/, function (startHour, startMinute, endHour, endMinute) {
    this.busyIntervals = [{
      start: moment().startOf('day')
        .add(+startHour, 'hours')
        .add(+startMinute, 'minutes')
        .toDate(),
      end: moment().startOf('day')
        .add(+endHour, 'hours')
        .add(+endMinute, 'minutes')
        .toDate()
    }]
  })
}
