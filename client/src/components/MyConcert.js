import React, { Component } from 'react'

import DeleteButton from './DeleteButton'


const MyConcert = ({date, concert, removeConcert}) => {
  return (
    <li id='concert'>
      {date}<br/>
      {concert.venue_city}, {concert.venue_region}, {concert.venue_country}<br/>
      <DeleteButton deleteConcert={removeConcert} concertId={concert.id}/>
    </li>
  )
}

export default MyConcert
