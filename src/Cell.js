import React, { Component } from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  handleClick = () => {
    this.setState({ color: "#333" });
  };
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={"cell"}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

export default Cell;
