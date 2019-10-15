import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './containers/Home'
import MyConcert from './components/MyConcert'
import ConcertShow from './components/ConcertShow'
import ConcertsCollection from './containers/ConcertsCollection'
import Success from './components/Success'



import { searchArtist, fetchMyArtists, selectArtist } from './actions/artistActions'
import {getArtistConcerts, addConcert, getMyConcerts, removeConcert, showConcert, removeAlert} from './actions/concertActions'

class App extends Component {

  constructor(props) {
    super(props)
    this.errors = this.errors.bind(this)
  }

  componentDidMount() {
    this.props.getMyConcerts()
  }

  errors() {
    if (this.props.messages.success) {
      return <Success removeAlert= {this.props.removeAlert} message={this.props.messages.message}/>
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
        <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
          <ul className='nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/app'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/concerts'>My Concerts</Link>
            </li>
            <li>
              <a href='/users/sign_out' data-method='delete' className='nav-link'>Logout</a>
            </li>
          </ul>
        </nav>
        {this.errors()}
          <br/>



          <Route exact path='/app' render= {props => <Home />}/>
          <Route path='/concerts/:id'
            render= {props => <ConcertShow {...props} showConcert={this.props.showConcert} concertData={this.props.concerts.concertData} />}/>
          <Route exact path='/concerts'
            render= {props => <ConcertsCollection
            concerts={this.props.concerts.myConcerts} getConcerts={this.props.getMyConcerts} removeConcert={this.props.removeConcert}/>}/>
            <Route path='/users/sign_out'/>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => ({
  getMyConcerts: () => dispatch(getMyConcerts()),
  removeConcert: (id) => dispatch(removeConcert(id)),
  showConcert: (id) => dispatch(showConcert(id)),
  removeAlert: () => dispatch(removeAlert())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
