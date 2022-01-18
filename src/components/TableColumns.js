import React, { Component } from "react";
import TableCell from "./TableCell.js";

export default class TableColumn extends Component {
  rows = () => {
    const row = [];
    for (let i = 0; i < this.props.row; i++) {
      row.push(
        <TableCell
          key={`row${i + 1}`}
          color={this.props.color}
          hover={this.props.hover}
          handleColorOnHover={this.props.handleColorOnHover}
          handleRemoveHover={this.props.handleRemoveHover}
          changeCellColor={this.props.changeCellColor}
        />
      );
    }
    return row;
  };

  render() {
    return <div className="column">{this.rows()}</div>;
  }
}
