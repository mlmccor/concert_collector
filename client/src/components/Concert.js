import React, { Component } from 'react'

import AddButton from './AddButton'


const Concert = ({date, concert, addConcert}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <p className='card-title' id='concert'>{date}</p>
        <p className='card-text'>
        {concert.venue.metroArea.displayName}, {concert.venue.metroArea.state ? concert.venue.metroArea.state.displayName : false}, {concert.venue.metroArea.country.displayName}
        </p>
        <AddButton addConcert={addConcert} concert={concert}/><br/><br/>

      </div>
    </div>
  )}

export default Concert
