import React from "react";
import TableColumn from "./TableColumns.js";

class Table extends React.Component {
  columns = () => {
    const col = [];
    for (let i = 0; i < this.props.column; i++) {
      col.push(
        <TableColumn
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

export default Table;
