import React, { Component } from 'react'

class DeleteButton extends Component {
  handleClick = (e) => {
    this.props.deleteConcert(this.props.concertId)
  }
  render() {
    return (
      <button onClick={this.handleClick}>X</button>
    )
  }
}
export default DeleteButton
