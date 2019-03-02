import React, { Component } from 'react';

export class Calc extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMounet() {
    this.props.defaultAction();
  }

  render() {
    return (
      <div>
        <div style={{'border': '1px solid #ccc', 'display': 'inline-block'}}>{this.props.amount}</div>
        <br/>
        <button onClick={this.props.incrementAction}>INCREMENT</button>
        <br/>
        <button onClick={this.props.decrementAction}>DECEREMENT</button>
        <br/>
        <button onClick={this.props.defaultAction}>RESET</button>
      </div>
    )
  }
};
