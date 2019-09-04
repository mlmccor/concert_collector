import React, { Component } from 'react'
import ConcertList from '../components/ConcertList'

class CurrentArtist extends Component {

  componentDidUpdate(prevProps) {
    if(this.props.currentArtist !== prevProps.currentArtist) {
      this.props.getConcerts(this.props.currentArtist.name)
    }
  }

  render() {
    return (
      <div>
        <h2>Current Artist: {this.props.currentArtist.name}</h2>
        <img src={this.props.currentArtist.image_url}/>
        <ConcertList concerts={this.props.concerts} addConcert={this.props.add}/>
      </div>
    )
  }
}
export default CurrentArtist
