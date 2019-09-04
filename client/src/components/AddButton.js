import React, { Component } from 'react'


class AddButton extends Component {
  handleClick = (e) => {
    this.props.addConcert(this.props.concert)
  }
  render() {
    return(
      <button onClick={this.handleClick}>Add</button>
    )
  }
}
export default AddButton
