// Write your code here
import {Component} from "react"
import "./index.css"
class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 10 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 10 }))
  }
  render() {
    const { count } = this.state
    return (
      
      <div className="container">
        <h1 className="heading">{Speed is 0mph}</h1>
        <p className="paragraph">{Min Limit is 0mph,Max Limit is 200mph}</p>
        <button className="button" onClick={this.onIncrement}>
          Accelerate
        </button>
        <button className="button1" onClick={this.onDecrement}>
          ApplyBreak
        </button>
      </div>
    
  }
}

export default Counter