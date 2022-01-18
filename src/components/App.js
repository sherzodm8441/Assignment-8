import React from "react";
import Header from "./Header.js";
import Table from "./Table.js";
import "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#000000",
      row: 1,
      column: 1,
      fillAll: false,
      unfill: false,
      fillUncolored: false,
      hover: false,
    };

    this.updateColor = this.updateColor.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.fillAllCells = this.fillAllCells.bind(this);
    this.unfillAllCells = this.unfillAllCells.bind(this);
    this.fillUncoloredCells = this.fillUncoloredCells.bind(this);
    this.colorOnHover = this.colorOnHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
  }

  colorOnHover() {
    this.setState((prevState) => ({ hover: true }));
  }

  removeHover() {
    this.setState((prevState) => ({ hover: false }));
  }

  updateColor(event) {
    this.setState({ color: event.target.value });
  }

  fillUncoloredCells() {
    this.setState((prevState) => ({ fillUncolored: !prevState.fillUncolored }));
  }

  fillAllCells() {
    this.setState((prevState) => ({ fillAll: !prevState.fillAll }));
  }

  unfillAllCells() {
    this.setState((prevState) => ({ unfill: !prevState.unfill }));
  }

  addRow() {
    if (this.state.column === 0) {
      this.setState((prevState) => ({ row: prevState.row + 1, column: 1 }));
    } else {
      this.setState((prevState) => ({ row: prevState.row + 1 }));
    }
  }

  addColumn() {
    if (this.state.row === 0) {
      this.setState((prevState) => ({ row: 1, column: prevState.column + 1 }));
    } else {
      this.setState((prevState) => ({ column: prevState.column + 1 }));
    }
  }

  deleteRow() {
    if (this.state.row === 1) {
      this.setState((prevState) => ({ row: 0, column: 0 }));
    } else if (this.state.row > 0) {
      this.setState((prevState) => ({ row: prevState.row - 1 }));
    }
  }

  deleteColumn() {
    if (this.state.column === 1) {
      this.setState((prevState) => ({ row: 0, column: 0 }));
    } else if (this.state.column > 1) {
      this.setState((prevState) => ({ column: prevState.column - 1 }));
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          color={this.state.color}
          changeColor={this.updateColor}
          addRow={this.addRow}
          deleteRow={this.deleteRow}
          addColumn={this.addColumn}
          deleteColumn={this.deleteColumn}
          fillOnClick={this.fillAllCells}
          unfillOnClick={this.unfillAllCells}
          fillUncolored={this.fillUncoloredCells}
        />
        <Table
          color={this.state.color}
          row={this.state.row}
          column={this.state.column}
          fillAll={this.state.fillAll}
          unfill={this.state.unfill}
          fillUncolored={this.state.fillUncolored}
          hover={this.state.hover}
          handleColorOnHover={this.colorOnHover}
          handleRemoveHover={this.removeHover}
        />
      </div>
    );
  }
}

export default App;
