import React, { Component } from 'react'

import DeleteButton from './DeleteButton'

class MyConcert extends Component {
  render() {
    return(
      <li id='concert'>
        {this.props.date}<br/>
        {this.props.concert.venue_city}, {this.props.concert.venue_region}, {this.props.concert.venue_country}<br/>
        <DeleteButton deleteConcert={this.props.removeConcert} concertId={this.props.concert.id}/>
      </li>
    )
  }
}

export default MyConcert
