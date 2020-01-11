import React, { Component } from 'react'
import Concert from './Concert'

class ConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate = new Date(concert.start.datetime)
      let time = newDate.getHours() + ':' + newDate.getMinutes()
      return <Concert concert={concert} date={newDate.toDateString() + ' at ' + time + '0'} time={newDate.getTime()} addConcert={this.props.addConcert}/>
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
