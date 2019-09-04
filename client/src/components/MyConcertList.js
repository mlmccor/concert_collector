import React, { Component } from 'react'
import MyConcert from './MyConcert'

class MyConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate = new Date(concert.datetime)
      return <MyConcert concert={concert} date={newDate.toString()} addConcert={this.props.addConcert} removeConcert={this.props.removeConcert}/>
    })
  }

  render() {
    return (
      <div id='currentArtistConcertList'>
        <ul>
        {this.generateConcerts()}
        </ul>
      </div>
    )
  }
}
export default MyConcertList
