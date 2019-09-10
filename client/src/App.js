import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './containers/Home'
import MyConcert from './components/MyConcert'
import ConcertShow from './components/ConcertShow'
import ConcertsCollection from './containers/ConcertsCollection'



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
          <Link to='/concerts'>My Concerts</Link>
          <Route exact path='/app' render= {props => <Home {...this.props} />}/>
          <Route path='/concerts/:id' render= {props => <ConcertShow {...props} showConcert={this.props.showConcert} concertData={this.props.concerts.concertData} />}/>
          <Route exact path='/concerts' render= {props => <ConcertsCollection
            concerts={this.props.concerts.myConcerts} getConcerts={this.props.getMyConcerts} removeConcert={this.props.removeConcert}/>}/>

        </div>
      </Router>
      // TODO: fix artist relation to concerts
      // TODO: add more styles
      // TODO: fix columns for Artist Search page
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
