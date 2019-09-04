import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import CurrentArtist from './containers/CurrentArtist'
import ArtistsCollection from './containers/ArtistsCollection'


import { searchArtist, fetchMyArtists, selectArtist } from './actions/artistActions'
import {getArtistConcerts, addConcert} from './actions/concertActions'

class App extends Component {

  componentDidMount() {
    this.props.getMyArtists()
  }

  render() {
    return (
      <div className="App">
        <SearchBar getArtist={this.props.getArtist}/>
        <CurrentArtist currentArtist={this.props.artists.currentArtist} getConcerts={this.props.getConcerts} concerts={this.props.concerts.artistConcerts}/>
        <ArtistsCollection artistList={this.props.artists.artists} selectArtist={this.props.selectArtist}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getArtist: (data) => dispatch(searchArtist(data)),
  getMyArtists: () => dispatch(fetchMyArtists()),
  selectArtist: (id) => dispatch(selectArtist(id)),
  getConcerts: (name) => dispatch(getArtistConcerts(name)),
  addConcert: (concert) => dispatch(addConcert(concert))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
