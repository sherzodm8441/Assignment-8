import React, { Component } from "react";

export default class TableCell extends Component {
  // USER STORY #10 - change grid cell color on mouse click and drag
  cellColor = (event) => {
    if (this.props.hover) {
      this.props.changeCellColor(event);
    }
  };

  // USER STORY #6 - change grid cell color on click
  colorOnClick = (event) => {
    this.props.handleColorOnHover();
    this.props.changeCellColor(event);
  };

  render() {
    return (
      <div
        className="cell"
        onMouseDown={this.colorOnClick}
        onMouseOver={this.cellColor}
        onMouseUp={this.props.handleRemoveHover}></div>
    );
  }
}
