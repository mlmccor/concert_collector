import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import { fetchArtist } from './actions/artistActions'




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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtist: (data) => dispatch(fetchArtist(data))
})

export default connect(null,mapDispatchToProps)(App);
