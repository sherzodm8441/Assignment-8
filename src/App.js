import React from "react"
import Table from "./Table.js"

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      color : "transparent",
      row : 1,
      column : 1
    }
  }

  getColor = (event)=>{
    this.setState({color : event.target.value})
  }

  updateRow = (val) => {
    this.setState({row : this.state.row + val})
  }
  updateColumn = (val) => {
    this.setState({column : this.state.column + val})
  }
  

  render(){
    return (
      <div className="App">
        <label>Pick Color <input type="color" value={this.state.color} onChange={this.getColor}/></label>
        <label>Row<button onClick={()=>this.updateRow(-1)}>-</button></label>
        <button onClick={()=>this.updateRow(1)}>+</button>
        <label>Column<button onClick={()=>this.updateColumn(-1)}>-</button></label>
        <button onClick={()=>this.updateColumn(1)}>+</button>
        <Table 
          color={this.state.color}
          row={this.state.row}
          column={this.state.column}
        />

      </div>
    );
  }
  
}

export default App;
