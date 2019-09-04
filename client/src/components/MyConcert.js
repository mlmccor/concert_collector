import React, { Component } from 'react'

import AddButton from './AddButton'

class MyConcert extends Component {
  render() {
    return(
      <li id='concert'>
        {this.props.date}<br/>
        {this.props.concert.venue_city}, {this.props.concert.venue_region}, {this.props.concert.venue_country}<br/>
      </li>
    )
  }
}

export default MyConcert
