import React, { Component } from 'react'

class CurrentArtist extends Component {
  render() {
    return (
      <div>
        <h2>Current Artist: {this.props.currentArtist.name}</h2>
        <img src={this.props.currentArtist.image_url}/>
      </div>
    )
  }
}
export default CurrentArtist
