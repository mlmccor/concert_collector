import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => 
export default connect(null)(App);
