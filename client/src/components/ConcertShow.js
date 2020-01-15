import React, { Component } from 'react';

class ConcertShow extends Component {
  constructor() {
    super()
    this.generateArtist = this.generateArtist.bind(this)
  }
  componentDidMount() {
    this.props.showConcert(this.props.match.params.id)

  }

  generateArtist() {
    if (this.props.concertData.artist) {
      return this.props.concertData.artist.name
    }
  }

  render() {
    let realDate
    if (this.props.concertData.datetime) {
      realDate = this.props.concertData.datetime.substring(0, this.props.concertData.datetime.length - 1)

    }
    let newDate = new Date(realDate)
    let time = newDate.toLocaleTimeString()
    return (
      <div>
        <h4>Artist: {this.generateArtist()}</h4>
        <p>Date: {newDate.toLocaleDateString()}</p>
        <p>Time: {time}</p>
        <p>Venue: {this.props.concertData.venue_name}</p>
        <p>{this.props.concertData.venue_city},
             {this.props.concertData.venue_region} {this.props.concertData.venue_country}</p>
      </div>
    )
  }
}

export default ConcertShow
