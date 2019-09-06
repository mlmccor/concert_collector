import React, { Component } from 'react'
import MyConcertList from '../components/MyConcertList'


const ConcertsCollection = ({concerts, removeConcert}) => <div><h4>My Concerts</h4><MyConcertList concerts={concerts} removeConcert={removeConcert}/></div>

export default ConcertsCollection
