// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      secondsLeft: this.props.initialCount
    }
    this.handleZero = this.handleZero.bind(this)
    this.countdown = this.countdown.bind(this)
    this.intervalId = setInterval(this.countdown, 1000)
  }

  handleZero(){
    if (this.state.secondsLeft === 0){
      return <div>Boom!</div>
    } else {
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    }
  }

  countdown(){
    if (this.state.secondsLeft > 0){
      let newSecondsLeft = this.state.secondsLeft - 1
      this.setState({secondsLeft: newSecondsLeft})
    }
  }

  render(){
    return <div>{this.handleZero()}</div>
  }
}
