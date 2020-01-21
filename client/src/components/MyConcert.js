import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DeleteButton from './DeleteButton'
import ConcertShow from './ConcertShow'

const MyConcert = ({date, concert, removeConcert}) => {
  let url = '/concerts/' + concert.id
  let timeString = () => {
    if (date.getHours() === 0) {
      return "No Start Time Listed"
    } else {
      return `Doors Open At ${date.toLocaleTimeString()}`
    }
  }
  return (
    <div className='card'>
      <div className='card-body'>
        <p className='card-title'>{date.toLocaleDateString()}</p>
        <p className='card-title'>{timeString()}</p>
        <p className='card-text'>{concert.venue_city}, {concert.venue_region}, {concert.venue_country}</p>
        <Link className='card-link' to={url}>More Info</Link>
        <DeleteButton deleteConcert={removeConcert} concertId={concert.id}/>
        </div>
    </div>
  )
}

export default MyConcert
