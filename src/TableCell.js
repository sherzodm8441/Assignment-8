import React from "react"
import "./style.css"

class TableCell extends React.Component{

    constructor(props){
        super(props)

        
    }

    

    render(){
        return(
            <div style={{backgroundColor : this.props.color}} className="cell">
                
            </div>
        )
    }
}

export default TableCell