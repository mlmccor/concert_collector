import React, { Component } from 'react';
import { connect } from 'react-redux'

import {searchArtist, selectArtist, getArtistConcerts, addConcert, fetchMyArtists} from '../actions/artistActions'

import SearchBar from '../components/SearchBar'
import CurrentArtist from './CurrentArtist'
import ArtistsCollection from './ArtistsCollection'
import ConcertsCollection from './ConcertsCollection'
import MyConcertList from '../components/MyConcertList'
import MyConcert from '../components/MyConcert'

class Home extends Component {
  componentDidMount() {
    this.props.getMyArtists()
  }

  render() {
    return (
      <div className='home'>
        <SearchBar
          getArtist={this.props.getArtist}/>
        <br/>
        <CurrentArtist
          currentArtist={this.props.currentArtist} getConcerts={this.props.getConcerts} concerts={this.props.artistConcerts}
          add={this.props.addConcert}/>

        <ArtistsCollection
          artistList={this.props.myArtists} selectArtist={this.props.selectArtist}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.artists
}

const mapDispatchToProps = (dispatch) => ({
  getArtist: (data) => dispatch(searchArtist(data)),
  selectArtist: (id) => dispatch(selectArtist(id)),
  getConcerts: (name) => dispatch(getArtistConcerts(name)),
  getMyArtists: () => dispatch(fetchMyArtists()),
  addConcert: (concert) => dispatch(addConcert(concert))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
