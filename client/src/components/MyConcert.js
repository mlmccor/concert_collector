import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteButton from './DeleteButton'
import ConcertShow from './ConcertShow'

const MyConcert = ({date, concert, removeConcert}) => {
  return (
    <li id='concert'>
    <Link to='/concert_data'>{date}<br/>
      {concert.venue_city}, {concert.venue_region},
      {concert.venue_country}</Link>
      <DeleteButton deleteConcert={removeConcert} concertId={concert.id}/>
    </li>
  )
}

export default MyConcert
