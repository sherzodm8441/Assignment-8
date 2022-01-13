import React from "react"
import TableColumn from "./TableColumns.js"

class Table extends React.Component{

    constructor(props){
        super(props)

        
    }


    render(){
        return(
            <div className="table-table">
                <TableColumn />
                
            </div>
        )
    }
}

export default Table