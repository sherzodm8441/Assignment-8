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
          changeColor={this.props.changeColor}
          fillAll={this.props.fillAll}
          unfill={this.props.unfill}
          fillUncolored={this.props.fillUncolored}
          hover={this.props.hover}
          handleColorOnHover={this.props.handleColorOnHover}
          handleRemoveHover={this.props.handleRemoveHover}
        />
      );
    }
    return row;
  };

  render() {
    return <div className="column">{this.rows()}</div>;
  }
}
