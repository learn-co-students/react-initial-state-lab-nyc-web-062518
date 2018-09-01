// your Bomb code here!

import React, { Component } from 'react'// your ImageSlider code here!

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = { secondsLeft: props.initialCount }
  }

  render() {
    if (this.state.secondsLeft !== 0) {
      return (<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
    }

    return (<div>Boom!</div>)
  }
}
