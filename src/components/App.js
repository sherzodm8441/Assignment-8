import React from "react";
import Header from "./Header.js";
import Table from "./Table.js";
import "../style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#000000", // default black
      row: 1,
      column: 1,
      hover: false,
    };

    this.updateColor = this.updateColor.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.deleteColumn = this.deleteColumn.bind(this);
    this.changeCellColor = this.changeCellColor.bind(this);
    this.clearCells = this.clearCells.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this);
    this.colorOnHover = this.colorOnHover.bind(this);
    this.removeHover = this.removeHover.bind(this);
  }

  // USER STORY #1 - add rows to grid
  addRow() {
    if (this.state.column === 0) {
      this.setState((prevState) => ({ row: prevState.row + 1, column: 1 }));
    } else {
      this.setState((prevState) => ({ row: prevState.row + 1 }));
    }
  }

  // USER STORY #2 - add columns to grid
  addColumn() {
    if (this.state.row === 0) {
      this.setState((prevState) => ({ row: 1, column: prevState.column + 1 }));
    } else {
      this.setState((prevState) => ({ column: prevState.column + 1 }));
    }
  }

  // USER STORY #3 - remove rows to grid
  deleteRow() {
    if (this.state.row === 1) {
      this.setState({ row: 0, column: 0 });
    } else if (this.state.row > 1) {
      this.setState((prevState) => ({ row: prevState.row - 1 }));
    }
  }

  // USER STORY #4 - remove columns to grid
  deleteColumn() {
    if (this.state.column === 1) {
      this.setState({ row: 0, column: 0 });
    } else if (this.state.column > 1) {
      this.setState((prevState) => ({ column: prevState.column - 1 }));
    }
  }

  // USER STORY #5 - select color from dropdown
  updateColor(event) {
    this.setState({ color: event.target.value });
  }

  // USER STORY #6 - change grid cell color on click
  changeCellColor(event) {
    event.target.style.backgroundColor = this.state.color;
  }

  // USER STORY #7 - fill uncolored cells with selected color
  fillUncolored() {
    const cells = document.getElementsByClassName("cell");
    for (const cell of cells) {
      if (cell.style.backgroundColor === "") {
        cell.style.backgroundColor = this.state.color;
      }
    }
  }

  // USER STORY #8 - fill all cells with selected color
  // USER STORY #9 - unfill all cells
  clearCells(color) {
    const cells = document.querySelectorAll(".cell");
    for (let cell of cells) {
      cell.style.backgroundColor = color;
    }
  }

  // USER STORY #10 - events to handle mouse drag and hover state
  colorOnHover() {
    this.setState({ hover: true });
  }

  removeHover() {
    this.setState({ hover: false });
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
          fillUncolored={this.fillUncolored}
          fillOnClick={() => this.clearCells(this.state.color)}
          unfillOnClick={() => this.clearCells("")}
        />

        <Table
          row={this.state.row}
          column={this.state.column}
          hover={this.state.hover}
          handleColorOnHover={this.colorOnHover}
          handleRemoveHover={this.removeHover}
          changeCellColor={this.changeCellColor}
        />
      </div>
    );
  }
}
