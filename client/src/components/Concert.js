import React, { Component } from 'react'

import AddButton from './AddButton'

class Concert extends Component {
  render() {
    return(
      <li id='concert'>
        {this.props.date}<br/>
        {this.props.concert.venue.city}, {this.props.concert.venue.region}, {this.props.concert.venue.country}<br/>
        <AddButton addConcert={this.props.addConcert} concert={this.props.concert}/>
      </li>
    )
  }
}

export default Concert
