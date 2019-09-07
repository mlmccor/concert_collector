import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteButton from './DeleteButton'
import ConcertShow from './ConcertShow'

const MyConcert = ({date, concert, removeConcert}) => {
  let url = '/concerts/' + concert.id
  return (
    <li id='concert'>
    <Link to={url}>{date}<br/>
      {concert.venue_city}, {concert.venue_region},
      {concert.venue_country}</Link>
      <DeleteButton deleteConcert={removeConcert} concertId={concert.id}/>
      <br/><br/>
    </li>
  )
}

export default MyConcert
