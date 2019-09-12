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
      <div className='container'>

        <h2>Current Artist: {this.props.currentArtist.name}</h2>
        <div class='row'>
          <div class='col-lg'>
            <img class='img-fluid' src={this.props.currentArtist.image_url}/>
          </div>
          <div class='col-lg'>
            <ConcertList
              concerts={this.props.concerts}
              addConcert={this.props.add}/>
          </div>
        </div>
      </div>
    )
  }
}
export default CurrentArtist
