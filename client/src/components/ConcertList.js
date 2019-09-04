import React, { Component } from 'react'
import Concert from './Concert'

class ConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate = new Date(concert.datetime)
      console.log(newDate)
      return <Concert concert={concert} date={newDate.toString()} addConcert={this.props.addConcert}/>
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
