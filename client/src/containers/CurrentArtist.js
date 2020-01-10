import React, { Component } from 'react'
import ConcertList from '../components/ConcertList'
import DeleteArtist from '../components/DeleteArtist'

class CurrentArtist extends Component {

  componentDidMount() {
    this.props.getConcerts(this.props.currentArtist.name)
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentArtist !== prevProps.currentArtist) {
      this.props.getConcerts(this.props.currentArtist.name)
    }
  }

  render() {
    return (
      <div class='container'>

        <h2>{this.props.currentArtist.name}</h2><DeleteArtist id={this.props.currentArtist.id} deleteArtist={this.props.deleteArtist}/>
        <br/><br/>
        <div class='row'>
          <div class='col-lg'>
            <img class='img' src={this.props.currentArtist.image_url}/>
          </div>
          <div className='col-lg'>
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
