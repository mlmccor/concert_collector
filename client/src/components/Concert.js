import React, { Component } from 'react'

import AddButton from './AddButton'

class Concert extends Component {
  render() {
    return(
      <li id='concert'>
        {this.props.date}<br/>
        {this.props.venue.city}, {this.props.venue.region}, {this.props.venue.country}<br/>
        <AddButton/>
      </li>
    )
  }
}

export default Concert
