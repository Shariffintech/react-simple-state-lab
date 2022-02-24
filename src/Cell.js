import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value,
    };
  }

  //Create a click listener which, when activated, updates the state
  // to the following hex value: '#333'
  handleClick = () => {
    const color = "#333";
    this.setState({ color });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        {this.state.color}
      </div>
    );
  }
}
