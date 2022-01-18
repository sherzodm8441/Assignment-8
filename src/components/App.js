import React from "react";
import Table from "./Table.js";
import "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#00000000",
      row: 1,
      column: 1
    };

  }

  getColor = (event) => {
    this.setState({ color: event.target.value });
  };

  updateRow = (val) => {
    if (this.state.row + val > 0) {
      this.setState({ row: this.state.row + val });
    }
  };
  updateColumn = (val) => {
    if (this.state.column + val > 0) {
      this.setState({ column: this.state.column + val });
    }
  };

  changeCellColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
    this.setState({backColor : ""})
  };

  clearCells = () => {
    //this.setState({backColor : "#00000000"})
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      cell.style.backgroundColor = "#00000000"
    }
  }

  render() {
    return (
      <div className="App">
        <label>
          Pick Color <input type="color" value={this.state.color} onChange={this.getColor} />
        </label>
        <label>
          Row<button onClick={() => this.updateRow(-1)}>-</button>
        </label>
        <button onClick={() => this.updateRow(1)}>+</button>
        <label>
          Column<button onClick={() => this.updateColumn(-1)}>-</button>
        </label>
        <button onClick={() => this.updateColumn(1)}>+</button>
      
          <button onClick={() => this.clearCells()}>Clear All Cells</button>
      
        <Table
          color={this.state.color}
          row={this.state.row}
          column={this.state.column}
          changeCellColor={this.changeCellColor}
        />
      </div>
    );
  }
}

export default App;
