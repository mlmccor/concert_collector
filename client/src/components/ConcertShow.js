import React, { Component } from 'react';

class ConcertShow extends Component {
  constructor() {
    super()
    this.ticketDate = this.ticketDate.bind(this)
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

  ticketDate() {
    if (this.props.concertData.on_sale_datetime) {
      let newDate = new Date(this.props.concertData.on_sale_datetime)
      return newDate.toDateString()
    } else {
      return '(No Date Listed)'
    }
  }

  render() {
    let realDate
    if (this.props.concertData.datetime) {
      realDate = this.props.concertData.datetime.substring(0, this.props.concertData.datetime.length - 1)

    }
    let newDate = new Date(realDate)
    let time = newDate.getHours() + ':' + newDate.getMinutes()
    return (
      <div>
        <h4>Artist: {this.generateArtist()}</h4>
        <p>Date: {newDate.toDateString()}</p>
        <p>Time: {time + '0'}</p>
        <p>Venue: {this.props.concertData.venue_name}</p>
        <p>{this.props.concertData.venue_city},
             {this.props.concertData.venue_region} {this.props.concertData.venue_country}</p>
        <p>Tickets Go On Sale: {this.ticketDate()}</p>
      </div>
    )
  }
}

export default ConcertShow
