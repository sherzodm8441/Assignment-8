import React from "react"
import TableCell from "./TableCell.js"
import "../style.css";

class TableColumn extends React.Component{

    constructor(props){
        super(props)

        
    }

    rows = () =>{
        const row = []
        for(let i = 0; i  < this.props.row; i++){
            row.push(<TableCell 
                color={this.props.color} 
                changeCellColor={this.props.changeCellColor}
                backColor={this.props.backColor}
            />)
        }
        return row
    }
    


    render(){
        return(
            <div className="column">
                {/* <TableCell color={this.props.color}/> */}
                {this.rows()}
            </div>
        )
    }
}

export default TableColumn