import React, { Component } from 'react';
import { connect } from 'react-redux'

import {searchArtist, selectArtist, getArtistConcerts, addConcert, fetchMyArtists, deleteArtist} from '../actions/artistActions'

import SearchBar from '../components/SearchBar'
import CurrentArtist from './CurrentArtist'
import ArtistsCollection from './ArtistsCollection'
import ConcertsCollection from './ConcertsCollection'
import MyConcertList from '../components/MyConcertList'
import MyConcert from '../components/MyConcert'
import SearchResults from '../components/SearchResults'


class Home extends Component {
  componentDidMount() {
    this.props.getMyArtists()
  }

  searching() {
    if (this.props.searching) {
      return <SearchResults results={this.props.searchResults} selectArtist={this.props.selectArtist}/>
    }
  }


  render() {
    let view

    if (this.props.currentArtist.name) {
      view = <CurrentArtist
        currentArtist={this.props.currentArtist} getConcerts={this.props.getConcerts} concerts={this.props.artistConcerts}
        add={this.props.addConcert}
        deleteArtist={this.props.deleteArtist}/>
    }
    return (
      <div className='home'>
        <SearchBar
          getArtist={this.props.getArtist}/>
        <br/>
        {this.searching()}

        {view}
        <br/>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.artists
}

const mapDispatchToProps = (dispatch) => ({
  getArtist: (data) => dispatch(searchArtist(data)),
  selectArtist: (id, name) => dispatch(selectArtist(id, name)),
  deleteArtist: (id) => dispatch(deleteArtist(id)),
  getConcerts: (id) => dispatch(getArtistConcerts(id)),
  getMyArtists: () => dispatch(fetchMyArtists()),
  addConcert: (concert, artistId) => dispatch(addConcert(concert, artistId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
