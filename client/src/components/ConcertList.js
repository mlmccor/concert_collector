import React, { Component } from 'react'
import Concert from './Concert'

class ConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate
      if (concert.start.datetime) {
        newDate = new Date(concert.start.datetime.substring(0, concert.start.datetime.length - 5))
      } else {
        newDate = new Date(concert.start.date)
      }
      debugger
      let time = newDate.toLocaleTimeString()
      return <Concert concert={concert} date={newDate.toDateString() + ' at ' + time} time={newDate.getTime()} addConcert={this.props.addConcert} artistId = {this.props.artistId}/>
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
export default ConcertList
