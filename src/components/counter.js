import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 10
    }
    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }
  up() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  down() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  render(){
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <button onClick={this.up}>+</button>
        <button onClick={this.down}>-</button>
      </div>
    )
  }
}

export default Counter;
