import React, { Component } from 'react'
import MyConcertList from '../components/MyConcertList'

class ConcertsCollection extends Component {

  render() {
    return(
      <div>
        <h4>My Concerts</h4>
        <MyConcertList concerts={this.props.concerts} removeConcert={this.props.removeConcert}/>
      </div>
    )
  }
}
export default ConcertsCollection
