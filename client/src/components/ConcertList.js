import React, { Component } from 'react'
import Concert from './Concert'

class ConcertList extends Component {

  formatDate(dateString) {
    let dateArray = dateString.split(/\W|[T]/)
    return new Date(dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5])

  }

  generateConcerts() {
    if (!this.props.concerts) return null
    return this.props.concerts.map((concert) => {
      let newDate
      if (concert.start.datetime) {
        let dateArray = concert.start.datetime.split(/\W|[T]/)
        newDate = new Date(dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4], dateArray[5])
      } else {
        let dateArray = concert.start.date.split(/\W|[T]/)
        newDate = new Date(dateArray[0], dateArray[1], dateArray[2])
      }
      return <Concert concert={concert} date={newDate}  addConcert={this.props.addConcert} artistId = {this.props.artistId}/>
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
