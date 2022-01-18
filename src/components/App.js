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

  getColor = (event) => { //gets the user chosen color
    this.setState({ color: event.target.value });
  };

  updateRow = (val) => { //adds or removes rows
    if (this.state.row + val > 0) {
      this.setState({ row: this.state.row + val });
    }
  };
  updateColumn = (val) => { //adds or removes columns
    if (this.state.column + val > 0) {
      this.setState({ column: this.state.column + val });
    }
  };

  changeCellColor = (event) => { //changes cell color
    event.target.style.backgroundColor = this.state.color;
  };

  clearCells = () => { //resets color of all cells
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      cell.style.backgroundColor = ""
    }
  }

  fillAllCells = () => { //fill all cells with the selected color
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      cell.style.backgroundColor = this.state.color
    }
  }
  fillUncoloredCells = () => { //fills uncolored cells with the selected color
    
    const cells = document.querySelectorAll(".cell")
    for(let cell of cells){
      if(cell.style.backgroundColor === ""){
        cell.style.backgroundColor = this.state.color
      }
    }
  }

  hoverSetTrue(){ //sets hover to true
    this.setState({hover : true})
    console.log(this.state.hover)
  }
  hoverSetFalse(){ //sets hover to false
    this.setState({hover : false})
    console.log(this.state.hover)
  }
  hoverChangeColor(event){ //changes color of hovered cell
    console.log(this.state.hover)
    if(this.state.hover){
      this.changeCellColor(event)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="user-inputs">
          {/* drop down for colors */}
        <label className="color-picker">
          Pick Color <input type="color" value={this.state.color} onChange={this.getColor} />
        </label>

          {/* row inputs */}
        <div className="row-div">
          <label>Row</label>
          <button className="user-btn" onClick={() => this.updateRow(-1)}>-</button>
          
          <button className="user-btn" onClick={() => this.updateRow(1)}>+</button>
        </div>
        
        {/* column inouts */}
        <div className="column-div">
          <label>Column</label>
          <button className="user-btn" onClick={() => this.updateColumn(-1)}>-</button>
          
          <button className="user-btn" onClick={() => this.updateColumn(1)}>+</button>
        </div>
        
        {/* additional inputs */}
        <button className="user-btn" onClick={() => this.clearCells()}>Clear All</button>
        <button className="user-btn" onClick={() => this.fillAllCells()}>Fill All</button>
        <button className="user-btn" onClick={() => this.fillUncoloredCells()}>Fill Uncolored</button>
      
        </div>
        
        {/* creates table */}
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
