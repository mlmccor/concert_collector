import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import CurrentArtist from './containers/CurrentArtist'
import ArtistsCollection from './containers/ArtistsCollection'
import { fetchArtist, fetchMyArtists } from './actions/artistActions'




class App extends Component {
  handleSearch(data) {
    let url = `https://rest.bandsintown.com/artists/`+ data + `?app_id=ecd2c12560633b6ddf83a6d2a823ebc7`
    // TODO: extract API key
    fetch(url).then(artist => artist.json()).then(artist => {
      console.log(this)})
  }

  render() {
    return (
      <div className="App">
        <CurrentArtist currentArtist={this.props.currentArtist}/>
        <SearchBar getArtist={this.props.getArtist}/>
        <ArtistsCollection artistList={this.props.artists} getArtists={this.props.getMyArtists}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.artists
}

const mapDispatchToProps = dispatch => ({
  getArtist: (data) => dispatch(fetchArtist(data)),
  getMyArtists: () => dispatch(fetchMyArtists())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
