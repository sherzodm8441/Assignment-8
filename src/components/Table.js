import React from "react"
import TableColumn from "./TableColumns.js"
import "../style.css";

class Table extends React.Component{

    constructor(props){
        super(props)


        
    }

    // adds columns to table
    columns = () =>{
        const col = []
        for(let i = 0; i  < this.props.column; i++){
            col.push(<TableColumn 
                color={this.props.color}
                row={this.props.row}
                changeCellColor={this.props.changeCellColor}
                hoverSetTrue={this.props.hoverSetTrue}
                hoverSetFalse={this.props.hoverSetFalse}
                hoverChangeColor={this.props.hoverChangeColor}
            />)
        }
        return col
    }

    render(){
        return(
            <div className="table-table">
                {this.columns()}
            </div>
        )
    }
}

export default Table