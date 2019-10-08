import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteButton from './DeleteButton'
import ConcertShow from './ConcertShow'

const MyConcert = ({date, concert, removeConcert}) => {
  let url = '/concerts/' + concert.id
  return (
    <div className='card'>
      <div className='card-body'>
        <p className='card-title'>{date}</p>
        <p className='card-text'>{concert.venue_city}, {concert.venue_region},
        {concert.venue_country}</p>
        <Link className='card-link' to={url}>More Info</Link>
        <DeleteButton deleteConcert={removeConcert} concertId={concert.id}/>
        </div>
    </div>
  )
}

export default MyConcert
