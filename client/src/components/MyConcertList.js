import React, { Component } from 'react'
import MyConcert from './MyConcert'

const MyConcertList = ({concerts, removeConcert}) => {
  return (
    <div class='container' id='currentArtistConcertList'>
      <ul>
      {concerts.map((concert) => {
        let newDate = new Date(concert.datetime)
        let time = newDate.getHours() + ':' + newDate.getMinutes()

        return <MyConcert concert={concert} date={newDate.toDateString() + ' at ' + time + '0'}  removeConcert={removeConcert}/>
      })}
      </ul>
    </div>
  )
}
export default MyConcertList
