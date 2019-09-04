import React, { Component } from 'react'
import Concert from './Concert'

class ConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate = new Date(concert.datetime)
      console.log(newDate)
      return <Concert {...concert} date={newDate.toString()}/>
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
