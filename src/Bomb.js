// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component{
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){
    const boom = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return(
      <div>{boom}</div>
    )
  }

}
