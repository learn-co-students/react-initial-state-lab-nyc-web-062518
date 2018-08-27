// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    // if (this.state.secondsLeft === 0) {
    //   return <p>Boom!</p>
    // } else if (this.state.secondsLeft === 120) {
    //   return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    // }

    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return (
      <div>{message}</div>
    )
  }
}
