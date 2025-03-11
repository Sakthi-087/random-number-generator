import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRadnomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="page-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRadnomNumber}
          >
            Generate
          </button>
          <p className="randomText">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
