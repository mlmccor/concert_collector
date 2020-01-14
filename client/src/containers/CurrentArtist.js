import React, { Component } from 'react'
import ConcertList from '../components/ConcertList'
import DeleteArtist from '../components/DeleteArtist'

class CurrentArtist extends Component {

  componentDidMount() {
    this.props.getConcerts(this.props.currentArtist.id)
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentArtist !== prevProps.currentArtist) {
      this.props.getConcerts(this.props.currentArtist.name)
    }
  }



  render() {
    let view

    return (
      <div class='container'>

        <br/><br/>
        <div class='row'>
          <div class='col-lg'>
            <h2>{this.props.currentArtist.name}</h2><br/>
            <img class='img-fluid' src={this.props.currentArtist.image_url}/><br/><br/>
            <DeleteArtist id={this.props.currentArtist.id} deleteArtist={this.props.deleteArtist}/><br/>
          </div>
          <div className='col-lg'>
            <ConcertList
            concerts={this.props.concerts}
            artistId = {this.props.currentArtist.id}
            addConcert={this.props.add}/>
          </div>
        </div>
      </div>
    )
  }
}
export default CurrentArtist
