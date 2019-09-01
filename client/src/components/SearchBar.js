import React, { Component } from 'react'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      text:''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    return(
      <div>
        <p>Search for a new Artist Here</p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>Artist Name </label>
          <input name='text' onChange={this.handleChange} />
          <input type='submit' name='search'/>
        </form>
      </div>
    )
  }
}

export default SearchBar
