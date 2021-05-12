import React, { Component } from 'react';

class Count extends Component {
  state = {
    counter: 0
  };

  handleIncrease = () => {
    this.setState((state) => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState((state) => ({
      counter: this.state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{ this.state.counter }</h1>
        <button onClick={ this.handleIncrease }>+1</button>
        <button onClick={ this.handleDecrease }>-1</button>
      </div>   
    );
  }
}

export default Count;