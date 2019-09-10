import React, { Component } from 'react';

import SearchBar from '../components/SearchBar'
import CurrentArtist from './CurrentArtist'
import ArtistsCollection from './ArtistsCollection'
import ConcertsCollection from './ConcertsCollection'
import MyConcertList from '../components/MyConcertList'
import MyConcert from '../components/MyConcert'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <SearchBar
          getArtist={this.props.getArtist}/>

        <CurrentArtist
          currentArtist={this.props.artists.currentArtist} getConcerts={this.props.getConcerts} concerts={this.props.concerts.artistConcerts} add={this.props.addConcert}/>

        <ArtistsCollection
          artistList={this.props.artists.artists} selectArtist={this.props.selectArtist}/>
      </div>
    )
  }
}
export default Home
