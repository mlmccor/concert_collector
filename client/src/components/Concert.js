import React, { Component } from 'react'

import AddButton from './AddButton'


const Concert = ({date, concert, addConcert}) => {
  return (
    <li id='concert'>{date}<br/>
    {concert.venue.city}, {concert.venue.region}, {concert.venue.country}<br/>
    <AddButton addConcert={addConcert} concert={concert}/></li>
  )}

export default Concert
