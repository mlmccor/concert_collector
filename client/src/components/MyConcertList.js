import React, { Component } from 'react'
import MyConcert from './MyConcert'

const MyConcertList = ({concerts, removeConcert}) => {
  return (
    <div id='currentArtistConcertList'>
      <ul>
      {concerts.map((concert) => {
        let newDate = new Date(concert.datetime)
        return <MyConcert concert={concert} date={newDate.toString()}  removeConcert={removeConcert}/>
      })}
      </ul>
    </div>
  )
}
export default MyConcertList
