import React from "react";
import Table from "./Table.js";
import "../style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      row: 1,
      column: 1, 
      hover: false
    };
    this.changeCellColor = this.changeCellColor.bind(this)
    this.hoverSetTrue = this.hoverSetTrue.bind(this)
    this.hoverSetFalse = this.hoverSetFalse.bind(this)
    this.hoverChangeColor = this.hoverChangeColor.bind(this)
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
  };

  clearCells = () => {
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      cell.style.backgroundColor = ""
    }
  }

  fillAllCells = () => {
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      cell.style.backgroundColor = this.state.color
    }
  }
  fillUncoloredCells = () => {
    
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      if(cell.style.backgroundColor === ""){
        cell.style.backgroundColor = this.state.color
      }
    }
  }

  hoverSetTrue(){
    this.setState({hover : true})
    console.log(this.state.hover)
  }
  hoverSetFalse(){
    this.setState({hover : false})
    console.log(this.state.hover)
  }
  hoverChangeColor(event){
    console.log(this.state.hover)
    if(this.state.hover){
      this.changeCellColor(event)
      //event.target.style.backgroundColor = this.state.color;
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
        <button onClick={() => this.clearCells()}>Clear All</button>
        <button onClick={() => this.fillAllCells()}>Fill All</button>
        <button onClick={() => this.fillUncoloredCells()}>Fill Uncolored</button>
      
        <Table
          color={this.state.color}
          row={this.state.row}
          column={this.state.column}
          changeCellColor={this.changeCellColor}
          hoverSetTrue={this.hoverSetTrue}
          hoverSetFalse={this.hoverSetFalse}
          hoverChangeColor={this.hoverChangeColor}
        />
      </div>
    );
  }
}

export default App;
