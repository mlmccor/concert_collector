import React, { Component } from 'react'

class ArtistsCollection extends Component {

  componentDidMount() {
    this.props.getArtists()
  }

  generateArtists() {
    return this.props.artistList.map((artist) => <h4>{artist.name}</h4>)
  }

  render() {
    return (
      <div id='artistCollection'>
        <h4>My Artists</h4>
        {this.generateArtists()}
      </div>
    )
  }
}
export default ArtistsCollection
