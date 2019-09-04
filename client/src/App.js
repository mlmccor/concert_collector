import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import CurrentArtist from './containers/CurrentArtist'
import ArtistsCollection from './containers/ArtistsCollection'


import { searchArtist, fetchMyArtists, selectArtist } from './actions/artistActions'

class App extends Component {

  componentDidMount() {
    this.props.getMyArtists()
  }

  render() {
    return (
      <div className="App">
        <SearchBar getArtist={this.props.getArtist}/>
        <CurrentArtist currentArtist={this.props.currentArtist}/>
        <ArtistsCollection artistList={this.props.artists} selectArtist={this.props.selectArtist}/>
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
