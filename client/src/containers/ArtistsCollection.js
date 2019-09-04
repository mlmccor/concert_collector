import React, { Component } from 'react'

class ArtistsCollection extends Component {

  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getArtists()
  }

  handleClick(e) {
    this.props.selectArtist(e.target.id)
  }

  generateArtists() {
    return this.props.artistList.map((artist) => <p id={artist.id} onClick={this.handleClick}>{artist.name}</p>)
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
