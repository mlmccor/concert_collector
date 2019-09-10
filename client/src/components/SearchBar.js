import React, { Component } from 'react'


class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      text:''
    }
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getArtist(this.state.text)
    this.setState({
      text:''
    })
  }

  render() {
    return(
      <div>
        <p>Search for a new Artist Here</p>
        <form onSubmit={this.handleSubmit}>
          <label>Artist Name </label>
          <input
             name='text'
             onChange={this.handleChange}
             value={this.state.text} />
          <input type='submit' name='search'/>
        </form>
      </div>
    )
  }
}

export default SearchBar
