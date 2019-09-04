import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import CurrentArtist from './containers/CurrentArtist'
import ArtistsCollection from './containers/ArtistsCollection'
import { searchArtist, fetchMyArtists, selectArtist } from './actions/artistActions'




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
        <SearchBar getArtist={this.props.getArtist}/>
        <CurrentArtist currentArtist={this.props.currentArtist}/>
        <ArtistsCollection artistList={this.props.artists} getArtists={this.props.getMyArtists} selectArtist={this.props.selectArtist}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.artists
}

const mapDispatchToProps = dispatch => ({
  getArtist: (data) => dispatch(searchArtist(data)),
  getMyArtists: () => dispatch(fetchMyArtists()),
  selectArtist: (id) => dispatch(selectArtist(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
