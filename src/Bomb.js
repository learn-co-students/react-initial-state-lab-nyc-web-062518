import React, {Component} from 'react'

class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {secondsLeft: this.props.initialCount}
  }

  render(){
    if (this.state.secondsLeft === 0) {
      return 'Boom!'
    } else {
      return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
  }
}

export default Bomb
