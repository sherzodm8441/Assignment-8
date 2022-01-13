import React from "react"
import TableCell from "./TableCell.js"

class TableColumn extends React.Component{

    constructor(props){
        super(props)

        
    }


    render(){
        return(
            <div className="column">
                <TableCell />
            </div>
        )
    }
}

export default TableColumn