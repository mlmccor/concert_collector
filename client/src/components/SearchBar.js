import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return(
      <div>
        <p>Search for a new Artist Here</p>
        <br/>
        <form>
          <label>Artist Name</label>
          <input />
          <input type='submit' name='search'/>
        </form>
      </div>
    )
  }
}

export default SearchBar
