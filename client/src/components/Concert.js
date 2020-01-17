import React, { Component } from 'react'

import AddButton from './AddButton'


const Concert = ({date, concert, addConcert, artistId}) => {
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
        <p className='card-title' id='concert'>{date.toDateString()}</p>
        <p className='card-text'>{timeString()}</p>
        <p className='card-text'>
        {concert.venue.metroArea.displayName}, {concert.venue.metroArea.state ? concert.venue.metroArea.state.displayName : false}, {concert.venue.metroArea.country.displayName}
        </p>
        <AddButton addConcert={addConcert} concert={concert} artistId={artistId}/><br/><br/>

      </div>
    </div>
  )}

export default Concert
