import React, { Component } from 'react'

class Concert extends Component {
  render() {
    return(
      <li id='concert'>
        {this.props.date}<br/>
        {this.props.venue.city}, {this.props.venue.region}, {this.props.venue.country}
      </li>
    )
  }
}

export default Concert
