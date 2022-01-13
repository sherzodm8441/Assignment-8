import React from "react"
import Table from "./Table.js"

class App extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      color : "transparent"
    }
  }

  getColor = (event)=>{
    this.setState({color : event.target.value})
    console.log(this.state.color)
  }
  

  render(){
    return (
      <div className="App">
        <label>Pick Color <input type="color" value={this.state.color} onChange={this.getColor}/></label>
        <Table color={this.state.color}/>

      </div>
    );
  }
  
}

export default App;
