import React, { Component } from 'react';

const ConcertShow = ({concert}) => {
  return (    
  <div>
    <p>{concert.datetime}</p>
    <p>{concert.venue_name}</p>
    <p>{concert.venue_city},{concert.venue_region} {concert.venue_country}</p>
  </div>
  )
}
