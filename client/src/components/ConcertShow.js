import React, { Component } from 'react';

class ConcertShow extends Component {
  componentDidMount() {
    this.props.showConcert(this.props.match.params.id)
  }
  render() {
    return (
      <p>{this.props.match.params.id}</p>
    )
  }
}

export default ConcertShow
