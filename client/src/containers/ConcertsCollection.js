import React, { Component } from 'react'
import MyConcertList from '../components/MyConcertList'


const ConcertsCollection = ({concerts, removeConcert}) => <div className="container"><h3>My Concerts</h3><br/><MyConcertList concerts={concerts} removeConcert={removeConcert}/></div>

export default ConcertsCollection
