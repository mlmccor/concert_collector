import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './containers/Home'
import MyConcert from './components/MyConcert'
import ConcertShow from './components/ConcertShow'


import { searchArtist, fetchMyArtists, selectArtist } from './actions/artistActions'
import {getArtistConcerts, addConcert, getMyConcerts, removeConcert, showConcert} from './actions/concertActions'

class App extends Component {

  componentDidMount() {
    this.props.getMyArtists()
    this.props.getMyConcerts()
  }



  render() {
    return (
      <Router>
        <div className="App">
          <Link to='/app'>Home</Link>
          // TODO: route paths
          // TODO: add links to concert show
          <Route exact path='/app' render= {props => <Home {...this.props} />}/>
          <Route path='/concerts/:id' render= {props => <ConcertShow {...props} showConcert={this.props.showConcert} concertData={this.props.concerts.concertData} />}/>

        </div>
      </Router>
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
  addConcert: (concert) => dispatch(addConcert(concert)),
  getMyConcerts: () => dispatch(getMyConcerts()),
  removeConcert: (id) => dispatch(removeConcert(id)),
  showConcert: (id) => dispatch(showConcert(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
