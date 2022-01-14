import React from "react"
import "./style.css"

class TableCell extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            color : ""
        }
    }

    cellClick = () => {
        this.setState({color : this.props.color})
    }

    render(){
        return(
            <div style={{backgroundColor : this.state.color}} className="cell" onClick={()=> this.cellClick()}>
                
            </div>
        )
    }
}

export default TableCell