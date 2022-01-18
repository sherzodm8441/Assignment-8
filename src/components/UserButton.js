import React, { Component } from "react";

export default class UserButton extends Component {
  render() {
    return (
      <button className="user-btn" onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}
