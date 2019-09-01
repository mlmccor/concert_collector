import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import SearchBar from './components/SearchBar'
import { fetchArtist } from './actions/artistActions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar fetchArtist={this.props.getArtist}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtist: () => dispatch(fetchArtist())
})

export default connect(null,mapDispatchToProps)(App);
