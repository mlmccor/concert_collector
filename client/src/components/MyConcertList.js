import React, { Component } from 'react'
import MyConcert from './MyConcert'

const MyConcertList = ({concerts, removeConcert}) => {

  const upcoming = () => {
    return concerts.filter(concert => concert.past_event === false)
  }

  const past = () => {
    return concerts.filter(concert => concert.past_event === true)
  }

  return (
    <div class='container border border-dark w-75' id='currentArtistConcertList'>
    <h4>Upcoming Concerts</h4>
      <ul>
        {upcoming().map((concert) => {
          let improvedDate = concert.datetime
          if (concert.datetime) {
            improvedDate = concert.datetime.substring(0, concert.datetime.length - 1)
          }
          let newDate = new Date(improvedDate)
          let time = newDate.getHours() + ':' + newDate.getMinutes()
          return <MyConcert concert={concert} date={newDate.toDateString() + ' at ' + time + '0'}  removeConcert={removeConcert}/>
        })}
      </ul>
      <h4>Past Concerts</h4>
      <ul>
      {past().map((concert) => {
        let newDate = new Date(concert.datetime)
        let time = newDate.getHours() + ':' + newDate.getMinutes()
        return <MyConcert concert={concert} date={newDate.toDateString() + ' at ' + time + '0'}  removeConcert={removeConcert}/>
      })}
      </ul>
    </div>
  )
}
export default MyConcertList
