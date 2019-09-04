import React, { Component } from 'react'
import MyConcert from './MyConcert'

class MyConcertList extends Component {

  generateConcerts() {
    return this.props.concerts.map((concert) => {
      let newDate = new Date(concert.datetime)
      console.log(newDate)
      return <MyConcert concert={concert} date={newDate.toString()} addConcert={this.props.addConcert}/>
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
