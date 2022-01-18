import React from "react";
import "../style.css";

class TableCell extends React.Component {
  constructor(props) {
    super(props);


  }

  

  render() {
    return (
      <div
        className="cell"
        onClick={this.props.changeCellColor}></div>
    );
  }
}

export default TableCell;
