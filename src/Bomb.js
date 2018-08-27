import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    setTimeout(this.countdown, 1000)
    return this.bombTimer()
  }

  countdown = () => {
    const decrementedSecondsLeft = this.state.secondsLeft - 1
    this.setState({secondsLeft: decrementedSecondsLeft})
  }

  bombTimer = () => {
    if (this.state.secondsLeft > 0) {
      return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    } else {
      return <h1>Boom!</h1>
    }
  }

}

export default Bomb
