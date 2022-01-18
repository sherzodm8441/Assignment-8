import React, { Component } from "react";
import TableColumn from "./TableColumns.js";

export default class Table extends Component {
  columns = () => {
    const col = [];
    for (let i = 0; i < this.props.column; i++) {
      col.push(
        <TableColumn
          key={`column${i + 1}`}
          color={this.props.color}
          row={this.props.row}
          fillAll={this.props.fillAll}
          unfill={this.props.unfill}
          fillUncolored={this.props.fillUncolored}
          hover={this.props.hover}
          handleColorOnHover={this.props.handleColorOnHover}
          handleRemoveHover={this.props.handleRemoveHover}
        />
      );
    }
    return col;
  };

  render() {
    return <div className="table-table">{this.columns()}</div>;
  }
}
